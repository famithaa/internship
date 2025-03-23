import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  color?: string;
  size?: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categories: string[];
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  recommendedProducts: Product[] = [];
  freeShippingThreshold = 75; // Free shipping for orders over $75
  shippingCost = 8.99;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCartItems();
    this.loadRecommendedProducts();
  }

  loadCartItems(): void {
    // Assuming getCartItems returns an Observable<CartItem[]>
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
    });
  }

  loadRecommendedProducts(): void {
    // Assuming getRecommendedProducts returns an Observable<Product[]>
    this.productService.getRecommendedProducts().subscribe((products: Product[]) => {
      this.recommendedProducts = products.slice(0, 4); // Limit to 4 recommended products
    });
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
    this.updateCart();
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateCart();
    }
  }

  updateQuantity(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value, 10);
    
    if (!isNaN(value) && value > 0) {
      this.cartItems[index].quantity = value;
    } else {
      this.cartItems[index].quantity = 1;
      input.value = '1';
    }
    
    this.updateCart();
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  updateCart(): void {
    // Assuming updateCartItems accepts CartItem[]
    this.cartService.updateCartItems(this.cartItems);
  }

  calculateSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  calculateTotal(): number {
    const subtotal = this.calculateSubtotal();
    return subtotal > this.freeShippingThreshold ? subtotal : subtotal + this.shippingCost;
  }

  addToCart(product: Product): void {
    const existingItemIndex = this.cartItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity++;
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1,
        imageUrl: product.imageUrl
      };
      this.cartItems.push(newItem);
    }
    
    this.updateCart();
  }

  continueShopping(): void {
    this.router.navigate(['/products']);
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
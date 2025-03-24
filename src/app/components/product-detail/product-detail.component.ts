import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
  category: string;
  materials: string[];
  available: boolean;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  selectedQuantity: number = 1;
  activeTab: 'description' | 'materials' | 'care' = 'description';
  relatedProducts: Product[] = [];

  // Mock product data - in real app, you would fetch this from a service
  products: Product[] = [
    {
      id: 1,
      name: 'Crochet Bunny',
      price: 259,
      description: 'Handmade white crochet bunny with embroidered face. Perfect gift for babies and children. Made with hypoallergenic materials.',
      imagePath: 'https://i.pinimg.com/736x/ce/56/ef/ce56ef386c12c10aa28a62075239aa1a.jpg',
      category: 'toys',
      materials: ['cotton yarn', 'polyfill stuffing'],
      available: true,
    },
    {
      id: 2,
      name: 'Baby Booties',
      price: 185,
      description: 'Cozy gray crochet booties for babies. Keeps little feet warm and adds adorable style to any outfit.',
      imagePath: 'https://i.pinimg.com/736x/8b/65/e5/8b65e52186036836352908f090e7d94d.jpg',
      category: 'baby',
      materials: ['soft acrylic yarn'],
      available: true,
    },
    {
      id: 3,
      name: 'Bear Hat',
      price: 220,
      description: 'Cute gray crochet bear hat with ears. Perfect for keeping little ones warm during colder months.',
      imagePath: 'https://i.pinimg.com/474x/fa/0e/b1/fa0eb1c5a57e9fe84e843a6b18554b24.jpg',
      category: 'baby',
      materials: ['soft acrylic yarn'],
      available: true,
    },
    {
      id: 4,
      name: 'Red Shrug',
      price: 459,
      description: 'Stylish red crochet shrug with black trim. This versatile piece adds a pop of color to any outfit.',
      imagePath: 'https://i.pinimg.com/736x/22/a6/d9/22a6d98811054505fb2ec24889673251.jpg',
      category: 'clothing',
      materials: ['cotton yarn', 'acrylic yarn'],
      available: true,
    },
    {
      id: 5,
      name: 'Two-Tone Tote Bag',
      price: 350,
      description: 'Trendy black and yellow crochet tote bag. Spacious and stylish for everyday use.',
      imagePath: 'https://i.pinimg.com/736x/db/6b/33/db6b33edb3c9c6b3f1d871fe909c3b4c.jpg',
      category: 'accessories',
      materials: ['cotton yarn'],
      available: true,
    },
    {
      id: 6,
      name: 'Macrame Wall hanging',
      price: 555,
      description: 'Elegant handcrafted macrame wall hanging that adds bohemian charm to any room. Each piece is carefully knotted to create a unique pattern.',
      imagePath: 'https://i.pinimg.com/474x/d0/28/67/d028670a245083c51e262cede1ce7510.jpg',
      category: 'decor',
      materials: ['cotton yarn'],
      available: true,
    },
    {
      id: 7,
      name: 'Macrame key chains',
      price: 55,
      description: 'Beautifully crafted macrame key chains that add a stylish touch to your keys or bag. Each piece is handmade with attention to detail.',
      imagePath: 'https://i.pinimg.com/474x/03/59/65/035965b07cc7c47e0d063767bfe1457b.jpg',
      category: 'accessories',
      materials: ['cotton yarn'],
      available: true,
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      this.fetchProductDetails(productId);
      this.fetchRelatedProducts(productId);
    });
  }

  fetchProductDetails(id: number): void {
    this.product = this.products.find(p => p.id === id);
  }

  fetchRelatedProducts(currentId: number): void {
    // Find products in the same category
    if (this.product) {
      this.relatedProducts = this.products
        .filter(p => p.category === this.product?.category && p.id !== currentId)
        .slice(0, 3); // Limit to 3 related products
    }
  }

  setActiveTab(tab: 'description' | 'materials' | 'care'): void {
    this.activeTab = tab;
  }

  increaseQuantity(): void {
    this.selectedQuantity++;
  }

  decreaseQuantity(): void {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }

  addToCart(): void {
    // In a real app, this would call a cart service
    if (this.product) {
      console.log(`${this.product.name} added to cart`);
      alert(`${this.product.name} added to cart!`);
    }
  }

  // Method to get the availability class
  getAvailabilityClass(): string {
    return this.product?.available ? 'in-stock' : 'out-of-stock';
  }

  // Method to get the availability text
  getAvailabilityText(): string {
    return this.product?.available ? 'In Stock' : 'Out of Stock';
  }
}
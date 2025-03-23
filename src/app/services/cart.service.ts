import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {
    // Initialize with some sample data or load from localStorage
    this.loadCartFromStorage();
  }

  getCartItems(): Observable<CartItem[]> {
    return of(this.cartItems);
  }

  updateCartItems(items: CartItem[]): void {
    this.cartItems = items;
    this.saveCartToStorage();
  }

  addToCart(item: CartItem): void {
    const existingItemIndex = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity += item.quantity;
    } else {
      this.cartItems.push(item);
    }
    
    this.saveCartToStorage();
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartToStorage();
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  private saveCartToStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }
}
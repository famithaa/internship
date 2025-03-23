import { CartItem } from './cart-item';

export interface Order {
  id: number; // Unique order ID
  userId: number; // ID of the user who placed the order
  items: CartItem[]; // List of items in the order
  total: number; // Total price of the order
  date: Date; // Date the order was placed
  status: string; // Order status (e.g., "Pending", "Shipped", "Delivered")
  shippingAddress: string; // Shipping address for the order
  paymentMethod: string; // Payment method (e.g., "Credit Card", "PayPal")
}
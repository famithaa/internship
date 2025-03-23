import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categories: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Handmade Crochet Blanket',
      description: 'Soft and cozy crochet blanket made with premium yarn in a beautiful pattern.',
      price: 89.99,
      imageUrl: 'assets/images/blanket.jpg',
      categories: ['blankets', 'home']
    },
    {
      id: 2,
      name: 'Amigurumi Elephant',
      description: 'Adorable hand-crocheted elephant toy, perfect for children or collectors.',
      price: 24.99,
      imageUrl: 'assets/images/elephant.jpg',
      categories: ['toys', 'amigurumi']
    },
    {
      id: 3,
      name: 'Crochet Hat and Scarf Set',
      description: 'Warm winter hat and scarf set, handmade with soft acrylic yarn.',
      price: 39.99,
      imageUrl: 'assets/images/hat-scarf.jpg',
      categories: ['wearables', 'winter']
    },
    {
      id: 4,
      name: 'Baby Booties',
      description: 'Adorable crochet booties for babies, available in multiple colors.',
      price: 15.99,
      imageUrl: 'assets/images/booties.jpg',
      categories: ['baby', 'wearables']
    }
  ];

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(product => product.categories.includes(category)));
  }

  searchProducts(query: string): Observable<Product[]> {
    query = query.toLowerCase();
    return of(this.products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query)
    ));
  }

  getRecommendedProducts(): Observable<Product[]> {
    // In a real app, this might use user history or popular items
    // For now, just return all products
    return of(this.products);
  }
}
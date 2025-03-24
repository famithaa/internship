import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; 

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
  selector: 'app-shop',
  standalone: true, // Ensure this is set to true
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
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
      name: 'Tote Bag',
      price: 350,
      description: 'Soft, pastel-hued crochet bag for a chic and eco-friendly look',
      imagePath: 'https://i.pinimg.com/736x/db/6b/33/db6b33edb3c9c6b3f1d871fe909c3b4c.jpg',
      category: 'accessories',
      materials: ['cotton yarn'],
      available: true,
    },
    {
      id: 6,
      name: 'Macrame Wall hanging',
      price: 555,
      description: ' Bohemian-inspired wall décor to elevate your space beautifully',
      imagePath: 'https://i.pinimg.com/474x/d0/28/67/d028670a245083c51e262cede1ce7510.jpg',
      category: 'decor',
      materials: ['cotton yarn'],
      available: true,
    },
    {
      id: 7,
      name: 'Macrame key  chains',
      price: 55,
      description: 'Elegant handcrafted keychains with intricate knots for a stylish touch.',
      imagePath: 'https://i.pinimg.com/474x/03/59/65/035965b07cc7c47e0d063767bfe1457b.jpg',
      category: 'accessories',
      materials: ['cotton yarn'],
      available: true,
    },
    {
      id: 8,
      name: 'camera pouch',
      price: 150,
      description: 'camera pouch for protecting your camera gives edgy and stylish for everyday use.',
      imagePath: 'https://i.pinimg.com/474x/c4/d0/d3/c4d0d3f03f67624426cd7da25f4cc3e5.jpg',
      category: 'accessories',
      materials: ['cotton yarn'],
      available: true,
    },
    {
      id: 8,
      name: 'corset top',
      price: 550,
      description: 'Handmade crochet red corset top with white ruffled edges and pearl buttons for a vintage, elegant look. Perfect for casual wear, festive occasions, or gifting!',
      imagePath: 'https://i.pinimg.com/474x/c3/15/0a/c3150ade81e17502a705669779b4097d.jpg',
      category: 'accessories',
      materials: ['cotton yarn'],
      available: true,
    },
    {
      id: 9,
      name: 'tote bag',
      price: 500,
      description: 'Stylish and eco-friendly handmade crochet mesh bag, perfect for shopping, beach days, or casual outings. Lightweight, spacious, and durable for everyday use!',
      imagePath: 'https://i.pinimg.com/474x/63/bf/c2/63bfc22f4eeef8a1dbb2db36759ac8b2.jpg',
      category: 'accessories',
      materials: ['cotton yarn'],
      available: true,
    },
  ];

  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';

  constructor(private router: Router) {} // Inject Router


  ngOnInit(): void {
    this.filteredProducts = [...this.products];
    // Extract unique categories
    const categorySet = new Set<string>();
    this.products.forEach((product) => categorySet.add(product.category));
    this.categories = Array.from(categorySet);
    
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category === category
      );
    }
  }

  addToCart(product: Product): void {
    console.log(`Rs.{product.name} added to cart`);
    // Here you would typically call a cart service to add the item
    alert(`Rs.{product.name} added to cart!`);
  }
  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]); // Navigate to product details page
  }
}


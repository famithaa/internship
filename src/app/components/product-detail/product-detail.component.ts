import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  template: `<p>Product ID: {{ id }}</p>`,
})
export class ProductDetailComponent {
  @Input() id!: string; // Automatically bound from route parameter
}
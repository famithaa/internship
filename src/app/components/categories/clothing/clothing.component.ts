import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-clothing',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss'],
})
export class ClothingComponent {
  clothing = [
    { id: 1, name: 'Baby Set', price: 30, image: 'assets/images/baby-set.jpg' },
    { id: 2, name: 'Crop Top', price: 25, image: 'assets/images/crop-top.jpg' },
  ];
}
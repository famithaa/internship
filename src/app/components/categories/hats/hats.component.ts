import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-hats',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './hats.component.html',
  styleUrls: ['./hats.component.scss'],
})
export class HatsComponent {
  // Add logic for fetching and displaying hats
  hats = [
    { id: 1, name: 'Beanie', price: 20, image: 'assets/images/beanie.jpg' },
    { id: 2, name: 'Baby Boots', price: 15, image: 'assets/images/baby-boots.jpg' },
  ];
}
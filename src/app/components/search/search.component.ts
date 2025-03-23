import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  // Handle search input
  onSearchInput() {
    // You can add logic to fetch suggestions or redirect to search results
    console.log('Search Query:', this.searchQuery);
  }
}
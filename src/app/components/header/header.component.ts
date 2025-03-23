import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Import RouterLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink], // Add RouterLink here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchQuery: string = ''; // Holds the search query

  constructor(private router: Router) {}

  // Handle search form submission
  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    }
  }
}
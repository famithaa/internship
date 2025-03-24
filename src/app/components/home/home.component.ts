import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Remove HeaderComponent
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
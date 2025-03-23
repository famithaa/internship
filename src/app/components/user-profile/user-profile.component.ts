import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Ensure password is included
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'hashedPassword', // Add password property
  };
}
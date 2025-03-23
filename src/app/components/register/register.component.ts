import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Add this for standalone components
import { FormsModule } from '@angular/forms'; // Add this for template-driven forms
import { RouterLink } from '@angular/router'; // Add this for routerLink

// Define the shape of the registration response
interface RegisterResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

@Component({
  selector: 'app-register',
  standalone: true, // Add this for standalone components
  imports: [CommonModule, FormsModule, RouterLink], // Add required modules
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  };
  showSocialLogin = true;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Check if user is already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    // Validate password match
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    // Validate terms agreement
    if (!this.registerData.agreeToTerms) {
      this.errorMessage = 'You must agree to the terms';
      return;
    }

    const userData = {
      name: this.registerData.name,
      email: this.registerData.email,
      password: this.registerData.password,
    };

    this.authService.register(userData).subscribe({
      next: (response: RegisterResponse) => {
        // Handle successful registration
        this.authService.setToken(response.token);
        this.authService.setUser(response.user);
        this.router.navigate(['/home']);
      },
      error: (error: HttpErrorResponse) => {
        // Handle registration error
        this.errorMessage =
          error.error?.message || 'Registration failed. Please try again.';
      },
    });
  }

  registerWithGoogle(): void {
    this.authService
      .loginWithGoogle()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        this.errorMessage = 'Google registration failed. Please try again.';
        console.error('Google registration error:', error);
      });
  }

  registerWithFacebook(): void {
    this.authService
      .loginWithFacebook()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        this.errorMessage = 'Facebook registration failed. Please try again.';
        console.error('Facebook registration error:', error);
      });
  }
}
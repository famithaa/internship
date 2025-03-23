import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: '',
  };
  showSocialLogin = true;
  errorMessage = '';

  constructor(
    private authService: AuthService, // Dependency on AuthService
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        this.authService.setToken(response.token);
        this.authService.setUser(response.user);
        this.router.navigate(['/home']);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage =
          error.error?.message || 'Failed to login. Please try again.';
      },
    });
  }

  loginWithGoogle(): void {
    this.authService
      .loginWithGoogle()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        this.errorMessage = 'Google login failed. Please try again.';
        console.error('Google login error:', error);
      });
  }

  loginWithFacebook(): void {
    this.authService
      .loginWithFacebook()
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error: any) => {
        this.errorMessage = 'Facebook login failed. Please try again.';
        console.error('Facebook login error:', error);
      });
  }
}
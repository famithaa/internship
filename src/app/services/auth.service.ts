import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

// Define interfaces for request/response shapes
interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Regular email/password login
  login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(catchError(this.handleError));
  }

  // Register new user
  register(userData: RegisterUserData): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/register`, userData)
      .pipe(catchError(this.handleError));
  }

  // Logout user
  logout(): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/auth/logout`, {})
      .pipe(catchError(this.handleError));
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      // Decode the token to check expiration (if using JWT)
      const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decode the payload
      const expirationDate = new Date(tokenPayload.exp * 1000); // Convert expiration time to Date
      return expirationDate > new Date(); // Check if the token is still valid
    } catch (error) {
      console.error('Error decoding token:', error);
      return false; // If token is invalid, return false
    }
  }

  // Get current user
  getCurrentUser(): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}/auth/me`)
      .pipe(catchError(this.handleError));
  }

  // Set authentication token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Get authentication token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove authentication token
  removeToken(): void {
    localStorage.removeItem('token');
  }

  // Set user data
  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Get user data
  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Remove user data
  removeUser(): void {
    localStorage.removeItem('user');
  }

  // Google login/register
  loginWithGoogle(): Promise<AuthResponse> {
    // Implementation depends on your authentication provider
    // This is a placeholder
    return Promise.resolve({
      token: 'google-token',
      user: { id: '1', name: 'Google User', email: 'google@example.com' },
    });
  }

  // Facebook login/register
  loginWithFacebook(): Promise<AuthResponse> {
    // Implementation depends on your authentication provider
    // This is a placeholder
    return Promise.resolve({
      token: 'facebook-token',
      user: { id: '2', name: 'Facebook User', email: 'facebook@example.com' },
    });
  }

  // Handle HTTP errors
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(
      () => new Error('Something went wrong. Please try again later.'),
    );
  }
}
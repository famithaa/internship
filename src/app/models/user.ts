export interface User {
    id: number; // Unique user ID
    name: string; // Full name of the user
    email: string; // Email address of the user
    password: string; // Password (hashed in the backend)
    address?: string; // Optional: User's address
    phone?: string; // Optional: User's phone number
  }
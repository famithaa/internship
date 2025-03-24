import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { HatsComponent } from './components/categories/hats/hats.component';
import { ClothingComponent } from './components/categories/clothing/clothing.component';
import { ToysComponent } from './components/categories/toys/toys.component';
import { HomeDecorComponent } from './components/categories/home-decor/home-decor.component';
import { BagsComponent } from './components/categories/bags/bags.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component'

export const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent }, // Add this route
  { path: 'register', component: RegisterComponent }, // Register route
  { path: '', component: HomeComponent }, // Default route (Home)
  { path: 'shop', component: ShopComponent }, // Shop page
  { path: 'about', component: AboutComponent }, // About page
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'cart', component: CartComponent }, // Cart page
  { path: 'category/hats', component: HatsComponent }, // Hats category
  { path: 'category/clothing', component: ClothingComponent }, // Clothing category
  { path: 'category/toys', component: ToysComponent }, // Toys category
  { path: 'category/home-decor', component: HomeDecorComponent }, // Home Decor category
  { path: 'category/bags', component: BagsComponent }, // Bags category
  { path: 'search', component: SearchComponent }, // Search page
  { path: '**', redirectTo: '' }, // Redirect to home for unknown routes
];
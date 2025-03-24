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
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// Import the getPrerenderParams function from your server file
import { getPrerenderParams } from '../server';

export const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    // providers: [
    //   {
    //     provide: 'PRERENDER_PARAMS',
    //     useValue: getPrerenderParams
    //   }
    // ]
  },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'category/hats', component: HatsComponent },
  { path: 'category/clothing', component: ClothingComponent },
  { path: 'category/toys', component: ToysComponent },
  { path: 'category/home-decor', component: HomeDecorComponent },
  { path: 'category/bags', component: BagsComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '' },
];
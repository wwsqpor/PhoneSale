import { Routes } from '@angular/router';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { SupportComponent } from './components/support/support.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: BrandListComponent },
  { path: 'phone/:id', component: PhoneDetailComponent },
  { path: 'support', component: SupportComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];
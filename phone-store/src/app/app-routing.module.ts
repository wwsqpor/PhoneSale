// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandListComponent } from './components/brand-list/brand-list.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  { path: '', component: BrandListComponent },
  { path: 'phone/:id', component: PhoneDetailComponent },
  { path: 'support', component: SupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
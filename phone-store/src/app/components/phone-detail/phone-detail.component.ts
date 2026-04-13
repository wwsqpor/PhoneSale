// phone-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html'
})
export class PhoneDetailComponent implements OnInit {

  phone?: Phone;

  constructor(
    private route: ActivatedRoute,
    private service: PhoneService,
    private cart: CartService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getPhone(id).subscribe((data: any) => {
      this.phone = data;
    });
  }
  like() {
    if (this.phone) {
      this.phone.liked = !this.phone.liked;
    }
  }

  addToCart() {
    if(this.phone){
      this.cart.add(this.phone);

      this.message = `🛒 ${this.phone.name} добавлена в корзину`;
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    }
  }

  showNotification = false;
  message = '';

  buyNow() {
    if(this.phone){
      this.message = `You bought ${this.phone.name} for ${this.phone.price}$`;
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    }
  }
}
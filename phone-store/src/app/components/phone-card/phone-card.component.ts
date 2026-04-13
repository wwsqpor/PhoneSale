import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Phone } from '../../models/phone';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phone-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './phone-card.component.html'
})
export class PhoneCardComponent {

  @Input() phone!: Phone;

  constructor(
    private router: Router,
    private cart: CartService,
    public notification: NotificationService,
    private http: HttpClient
  ) {}

  open() {
    this.router.navigate(['/phone', this.phone.id]);
  }

  addToCart() {
    this.cart.add(this.phone);
    this.http.post('https://jsonplaceholder.typicode.com/posts', {})
      .subscribe({
        next: () => console.log('ok'),
        error: () => alert('Error API')
      });
  }

  like() {
    this.phone.liked = !this.phone.liked;

    this.http.post('https://jsonplaceholder.typicode.com/posts', {})
      .subscribe({
        next: () => console.log('ok'),
        error: () => alert('Error API')
      });
  }
  showNotification = false;
  message = '';

  buyNow() {
    this.message = `You bought ${this.phone.name} for ${this.phone.price}$`;
    this.showNotification = true;

    setTimeout(() => {
      console.log('hide');
      this.showNotification = false;
    }, 1000);
    this.http.post('https://jsonplaceholder.typicode.com/posts', {})
      .subscribe({
        next: () => console.log('ok'),
        error: () => alert('Error API')
      });
  }
}
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  constructor(
      public cart: CartService,
      private notification: NotificationService
  ) {}

  remove(id: number) {
    this.cart.remove(id);
  }
  getTotal(): number {
    return this.cart.getItems().reduce((sum, item) => sum + item.price, 0);
  }
  showNotification = false;
  message = '';

  buy() {
    const total = this.getTotal();

    this.message = `🛍 Purchase successful! Total: ${total}$`;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
    }, 3000);

    this.cart.cart = [];
  }
  like(item: any) {
  item.liked = !item.liked;
  }

  add(item: any) {
    this.cart.add(item);
  }
}
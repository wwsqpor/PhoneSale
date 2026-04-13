import { Injectable } from '@angular/core';
import { Phone } from '../models/phone';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Phone[] = [];

  add(phone: Phone) {
    this.cart.push(phone);
  }

  getItems() {
    return this.cart;
  }

  remove(id: number) {
    this.cart = this.cart.filter(p => p.id !== id);
  }
  clear() {
    this.cart = [];
  }
}
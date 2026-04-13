import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  show = false;
  message = '';

  showMessage(msg: string) {
    this.message = msg;
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
}
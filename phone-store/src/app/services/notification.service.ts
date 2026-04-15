import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  show(message: string) {
    console.log('Notification:', message);
  }
}
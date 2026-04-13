import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅

@Component({
  standalone: true,
  imports: [FormsModule], // ✅
  templateUrl: './support.component.html'
})
export class SupportComponent {
  name = '';
  email = '';
  message = '';

  send() {
    alert('Sent!');
  }
}
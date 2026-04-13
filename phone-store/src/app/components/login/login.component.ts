import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      localStorage.setItem('token', 'fake-jwt');
      this.router.navigate(['/']);
    } else {
      alert('Enter login and password');
    }
  }
}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private auth: AuthService) { }

  login() {
    if (this.username && this.password) {
      this.auth.login(this.username, this.password).subscribe({
        next: (res: any) => {
          this.auth.saveToken(res.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage = 'Invalid credentials. Try again.';
          console.error('Login error:', err);
        }
      });
    } else {
      this.errorMessage = 'Enter login and password';
    }
  }
}
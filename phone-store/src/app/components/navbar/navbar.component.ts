import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  search = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor(private auth: AuthService) { }

  onSearch() {
    this.searchEvent.emit(this.search);
  }

  logout() {
    this.auth.logout();
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
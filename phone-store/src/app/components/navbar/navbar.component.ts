import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule 
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  search = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    this.searchEvent.emit(this.search);
  }
  logout() {
    localStorage.removeItem('token');
  }
}

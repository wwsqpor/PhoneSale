import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone';
import { NavbarComponent } from '../navbar/navbar.component';
import { PhoneCardComponent } from '../phone-card/phone-card.component';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    PhoneCardComponent
  ],
  templateUrl: './brand-list.component.html'
})
export class BrandListComponent implements OnInit {

  phones: Phone[] = [];
  allPhones: Phone[] = [];
  errorMessage = '';

  constructor(private service: PhoneService) { }

  ngOnInit() {
    this.service.getPhones().subscribe({
      next: (data: Phone[]) => {
        this.phones = data;
        this.allPhones = data;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load phones. Check server connection.';
        console.error('Error loading phones:', err);
      }
    });
  }

  load(brand: string) {
    if (!brand) {
      this.phones = this.allPhones;
      return;
    }

    this.phones = this.allPhones.filter(p =>
      p.brand.toLowerCase() === brand.toLowerCase()
    );
  }

  filter(text: string) {
    this.phones = this.allPhones.filter(p =>
      p.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
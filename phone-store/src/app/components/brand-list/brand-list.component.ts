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

  constructor(private service: PhoneService) {}

  ngOnInit() {
    this.service.getPhones().subscribe((data: any) => {
      this.phones = data;
      this.allPhones = data;
    });
    this.service.getTestApi().subscribe({
      next: (data) => console.log('API OK', data),
      error: () => console.log('API ERROR')
    });
  }

  load(brand: string) {
    this.service.getByBrand(brand).subscribe(data => {
      this.phones = data;
    });
  }

  filter(text: string) {
    this.phones = this.allPhones.filter(p =>
      p.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
import { Injectable } from '@angular/core';
import { Phone } from '../models/phone';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  constructor(private http: HttpClient) {}
  private phones: Phone[] = [
  { id:1, name:'Samsung Galaxy S24', brand:'Samsung', price:1000, year:2024, description:'Flagship Samsung', image:'s24.png', memory:'256GB', camera:'50MP', battery:'4000mAh' },
  { id:2, name:'Samsung S23', brand:'Samsung', price:900, year:2023, description:'Premium phone', image:'23.png', memory:'256GB', camera:'50MP', battery:'3900mAh' },
  { id:3, name:'Samsung A54', brand:'Samsung', price:400, year:2023, description:'Mid-range device', image:'a54.png', memory:'128GB', camera:'50MP', battery:'5000mAh' },
  { id:4, name:'Samsung A34', brand:'Samsung', price:350, year:2023, description:'Affordable phone', image:'a34.png', memory:'128GB', camera:'48MP', battery:'5000mAh' },
  { id:5, name:'Samsung S22', brand:'Samsung', price:800, year:2022, description:'Old flagship', image:'s22.png', memory:'256GB', camera:'50MP', battery:'3700mAh' },
  { id:6, name:'Samsung Z Flip', brand:'Samsung', price:1200, year:2024, description:'Foldable phone', image:'zflip.png', memory:'256GB', camera:'12MP', battery:'3700mAh' },
  { id:7, name:'Samsung Z Fold', brand:'Samsung', price:1800, year:2024, description:'Premium foldable', image:'zfold.png', memory:'512GB', camera:'50MP', battery:'4400mAh' },
  { id:8, name:'Samsung M14', brand:'Samsung', price:200, year:2023, description:'Budget phone', image:'m14.png', memory:'128GB', camera:'50MP', battery:'6000mAh' },

  { id:9, name:'iPhone 15 Pro', brand:'iPhone', price:1200, year:2024, description:'Latest Apple flagship', image:'15pro.png', memory:'256GB', camera:'48MP', battery:'3274mAh' },
  { id:10, name:'iPhone 15', brand:'iPhone', price:1000, year:2024, description:'Base model', image:'15.png', memory:'128GB', camera:'48MP', battery:'3349mAh' },
  { id:11, name:'iPhone 14 Pro', brand:'iPhone', price:1100, year:2023, description:'Pro version', image:'14pro.png', memory:'256GB', camera:'48MP', battery:'3200mAh' },
  { id:12, name:'iPhone 14', brand:'iPhone', price:900, year:2023, description:'Standard iPhone', image:'14.png', memory:'128GB', camera:'12MP', battery:'3279mAh' },
  { id:13, name:'iPhone 13', brand:'iPhone', price:800, year:2022, description:'Still powerful', image:'13.png', memory:'128GB', camera:'12MP', battery:'3227mAh' },
  { id:14, name:'iPhone 12', brand:'iPhone', price:600, year:2021, description:'Older iPhone', image:'12.png', memory:'128GB', camera:'12MP', battery:'2815mAh' },
  { id:15, name:'iPhone SE', brand:'iPhone', price:500, year:2022, description:'Budget Apple', image:'se.png', memory:'64GB', camera:'12MP', battery:'2018mAh' },
  { id:16, name:'iPhone 11', brand:'iPhone', price:400, year:2020, description:'Old model', image:'11.png', memory:'64GB', camera:'12MP', battery:'3110mAh' },

  { id:17, name:'Xiaomi 14', brand:'Xiaomi', price:900, year:2024, description:'Flagship Xiaomi', image:'mi14.png', memory:'256GB', camera:'50MP', battery:'4610mAh' },
  { id:18, name:'Xiaomi 13', brand:'Xiaomi', price:800, year:2023, description:'Previous model', image:'mi13.png', memory:'256GB', camera:'50MP', battery:'4500mAh' },
  { id:19, name:'Redmi Note 13', brand:'Xiaomi', price:300, year:2024, description:'Popular model', image:'note13.png', memory:'128GB', camera:'108MP', battery:'5000mAh' },
  { id:20, name:'Redmi Note 12', brand:'Xiaomi', price:250, year:2023, description:'Budget model', image:'note12.png', memory:'128GB', camera:'50MP', battery:'5000mAh' },
  { id:21, name:'Poco F5', brand:'Xiaomi', price:400, year:2023, description:'Gaming phone', image:'f5.png', memory:'256GB', camera:'64MP', battery:'5000mAh' },
  { id:22, name:'Poco X5', brand:'Xiaomi', price:300, year:2023, description:'Affordable gaming', image:'x5.png', memory:'128GB', camera:'48MP', battery:'5000mAh' },
  { id:23, name:'Mi 11', brand:'Xiaomi', price:500, year:2022, description:'Old flagship', image:'mi11.png', memory:'256GB', camera:'108MP', battery:'4600mAh' },
  { id:24, name:'Redmi 10', brand:'Xiaomi', price:200, year:2022, description:'Basic phone', image:'redmi10.png', memory:'64GB', camera:'50MP', battery:'5000mAh' },

  { id:25, name:'Oppo Find X7', brand:'Oppo', price:1000, year:2024, description:'Flagship Oppo', image:'7x.png', memory:'256GB', camera:'50MP', battery:'5000mAh' },
  { id:26, name:'Oppo Find X6', brand:'Oppo', price:900, year:2023, description:'Older flagship', image:'6x.png', memory:'256GB', camera:'50MP', battery:'4800mAh' },
  { id:27, name:'Oppo Reno 11', brand:'Oppo', price:500, year:2024, description:'Mid range', image:'reno11.png', memory:'256GB', camera:'64MP', battery:'5000mAh' },
  { id:28, name:'Oppo Reno 10', brand:'Oppo', price:450, year:2023, description:'Popular phone', image:'reno10.png', memory:'128GB', camera:'64MP', battery:'4600mAh' },
  { id:29, name:'Oppo A78', brand:'Oppo', price:300, year:2023, description:'Budget phone', image:'a78.png', memory:'128GB', camera:'50MP', battery:'5000mAh' },
  { id:30, name:'Oppo A58', brand:'Oppo', price:250, year:2023, description:'Cheap phone', image:'a58.png', memory:'128GB', camera:'50MP', battery:'5000mAh' },
  { id:31, name:'Oppo A38', brand:'Oppo', price:200, year:2023, description:'Entry level', image:'a38.png', memory:'64GB', camera:'50MP', battery:'5000mAh' },
  { id:32, name:'Oppo A18', brand:'Oppo', price:150, year:2023, description:'Very cheap', image:'a18.png', memory:'64GB', camera:'8MP', battery:'5000mAh' }

];

  getPhones(): Observable<Phone[]> {
    return of(this.phones);
  }

  getByBrand(brand: string): Observable<Phone[]> {
    return of(this.phones.filter(p => p.brand === brand));
  }

  getPhone(id: number): Observable<Phone> {
    return of(this.phones.find(p => p.id === id)!);
  }
  getTestApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
import { Injectable } from '@angular/core';
import { Phone } from '../models/phone';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private API_URL = 'http://127.0.0.1:8000/api/products/';

  constructor(private http: HttpClient) { }

  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.API_URL);
  }

  getPhone(id: number): Observable<Phone> {
    return this.http.get<Phone>(`${this.API_URL}${id}/`);
  }
}
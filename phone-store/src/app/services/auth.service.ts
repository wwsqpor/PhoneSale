import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}login/`, { username, password });
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post(`${this.API_URL}register/`, { username, password, email });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
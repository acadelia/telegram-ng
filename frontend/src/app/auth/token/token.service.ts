import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {}

  public saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}

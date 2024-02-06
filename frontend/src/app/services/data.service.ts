import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../auth/token/token.service';

const users = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  users(): Observable<any> {
    return this.http.get(users);
  }

  userMe(): Observable<any> {
    const token = this.tokenService.getToken();
    return this.http.get(`http://localhost:3000/user/me/${token}`);
  }
}

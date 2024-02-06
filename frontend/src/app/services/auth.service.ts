import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { TokenService } from 'src/app/auth/token/token.service';

const signInApi = 'http://localhost:3000/user/login';
const signUpApi = 'http://localhost:3000/user/create';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  signUpAndLogin(
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    const signUpBody = {
      email: email,
      username: username,
      password: password,
    };
    const loginBody = {
      email: email,
      password: password,
    };

    return this.http.post(signUpApi, signUpBody, { responseType: 'text' }).pipe(
      switchMap((registrationResponse: any) => {
        return this.http
          .post(signInApi, loginBody, { responseType: 'text' })
          .pipe(
            tap((loginResponse: any) => {
              const token = loginResponse;
              if (token) {
                this.tokenService.saveToken(token);
              }
            })
          );
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    const body = {
      email: email,
      password: password,
    };

    return this.http.post(signInApi, body, { responseType: 'text' }).pipe(
      tap((response: any) => {
        const token = response;
        if (token) {
          this.tokenService.saveToken(token);
        }
      })
    );
  }

  signout() {
    this.tokenService.signOut();
  }
}

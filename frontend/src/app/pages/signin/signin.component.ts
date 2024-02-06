import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/auth/token/token.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    const token = this.tokenService.getToken();

    if (token) {
      this.router.navigateByUrl('/home');
    }
  }

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        this.errorMessage = 'Invalid email or password';
      },
    });
  }
}

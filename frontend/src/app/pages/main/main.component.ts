import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.auth.users().subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.data.users().subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}

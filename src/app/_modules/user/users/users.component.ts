import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  headers = ['#', 'First Name', 'Last Name', 'Email'];
  constructor() { }

  ngOnInit(): void {
  }

}

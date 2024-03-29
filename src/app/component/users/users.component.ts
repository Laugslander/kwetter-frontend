import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../domain/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: User[];

  constructor() {
  }

  ngOnInit() {
  }

}

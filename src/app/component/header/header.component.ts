import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../domain/user";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<String>();

  currentUser: User;
  searchString: String;

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.searchString = '';

    this.loadData();
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.searchEvent.emit(this.searchString)

      this.searchString = ''
    }
  }

  logOut() {
    this.authService.logOut();
  }

  loggedIn() {
    return this.authService.loggedIn()
  }

  showProfile() {
    if (this.loggedIn()) {
      const id = sessionStorage.getItem('id');

      return '/profile/' + id
    } else {
      return 'login'
    }
  }

  loadData() {
    const id = sessionStorage.getItem('id');

    this.userService.getUser(id).subscribe(u => this.currentUser = u);
  }

}

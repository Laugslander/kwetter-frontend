import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../domain/user";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<String>();

  currentUser: User;
  searchString: String;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.searchString = '';

    this.authService.getUser().subscribe(u => this.currentUser = u);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.searchEvent.emit(this.searchString)

      this.searchString = ''
    }
  }
}

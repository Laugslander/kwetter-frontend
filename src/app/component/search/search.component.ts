import {Component, OnInit} from '@angular/core';
import {Message} from "../../domain/message";
import {User} from "../../domain/user";
import {MessageService} from "../../service/message.service";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString: String;
  messages: Message[];
  users: User[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private messageService: MessageService,
              private userService: UserService) {
  }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.route.params.subscribe(params => {
        this.searchString = params["searchString"];
        this.loadData();
      });
    } else {
      this.router.navigate(['login'])
    }
  }

  likeMessageEvent() {
    this.loadData()
  }

  unlikeMessageEvent() {
    this.loadData()
  }

  noMessages() {
    return this.messages.length == 0;
  }

  noUsers() {
    return this.users.length == 0;
  }

  loadData() {
    this.messageService.searchMessages(this.searchString).subscribe(u => this.messages = u);
    this.userService.searchUsers(this.searchString).subscribe(u => this.users = u);
  }

}

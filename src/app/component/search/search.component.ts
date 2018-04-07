import {Component, OnInit} from '@angular/core';
import {Message} from "../../domain/message";
import {User} from "../../domain/user";
import {MessageService} from "../../service/message.service";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchString: String;
  messages: Message[];
  users: User[];

  constructor(private route: ActivatedRoute,
              private messageService: MessageService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchString = params["searchString"];
      this.loadData();
    });
  }

  likeMessageEvent() {
    this.loadData()
  }

  unlikeMessageEvent() {
    this.loadData()
  }

  loadData() {
    this.messageService.searchMessages(this.searchString).subscribe(u => this.messages = u);
    this.userService.searchUsers(this.searchString).subscribe(u => this.users = u);
  }

  noMessages() {
    return this.messages.length == 0;
  }

  noUsers() {
    return this.users.length == 0;
  }

}

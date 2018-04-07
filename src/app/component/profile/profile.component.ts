import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {AuthService} from "../../service/auth.service";
import {Message} from "../../domain/message";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  user: User;
  messages: Message[];

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.loadData()
  }

  follow() {
    this.userService.follow(this.user.id, this.currentUser.id).subscribe();
    this.loadData()
  }

  unfollow() {
    this.userService.unfollow(this.user.id, this.currentUser.id).subscribe();
    this.loadData()
  }

  isCurrentUser() {
    return this.user != null && this.currentUser.id == this.user.id
  }

  currentUserFollowsUser() {
    return this.currentUser.followings.map(u => u.id).includes(this.user.id)
  }

  likeMessageEvent() {
    this.loadData()
  }

  unlikeMessageEvent() {
    this.loadData()
  }

  loadData() {
    this.authService.getUser().subscribe(u => this.currentUser = u);

    this.authService.getUser().subscribe(u => this.user = u);
    this.authService.getMessagesPersonal().subscribe(m => this.messages = m);

    this.route.params.subscribe(params => {
      const id = params["id"];

      if (id) {
        this.userService.getUser(id).subscribe(u => this.user = u);
        this.userService.getMessagesPersonal(id).subscribe(m => this.messages = m);
      }
    });
  }

}

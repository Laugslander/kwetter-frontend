import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {AuthService} from "../../service/auth.service";
import {Message} from "../../domain/message";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  currentUser: User;
  user: User;
  messages: Message[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.route.params.subscribe(params => {
        this.id = params["id"];
        this.loadData();
      });
    } else {
      this.router.navigate(['login'])
    }
  }

  follow() {
    this.userService.follow(this.user.id, this.currentUser.id).subscribe(() => this.loadData());
  }

  unfollow() {
    this.userService.unfollow(this.user.id, this.currentUser.id).subscribe(() => this.loadData());
  }

  isCurrentUser() {
    if (this.currentUser == null) {
      return false
    }

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
    const currentId = sessionStorage.getItem('id');
    if (currentId != null) {
      this.userService.getUser(currentId).subscribe(u => this.currentUser = u);
    }

    this.userService.getUser(this.id).subscribe(u => this.user = u);
    this.userService.getMessagesPersonal(this.id).subscribe(m => this.messages = m);
  }

}

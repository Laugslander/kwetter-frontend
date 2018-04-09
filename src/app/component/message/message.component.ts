import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../domain/message";
import {User} from "../../domain/user";
import {MessageService} from "../../service/message.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Input() currentUser: User;
  @Output() likeMessageEvent = new EventEmitter();
  @Output() unlikeMessageEvent = new EventEmitter();

  constructor(private userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.loadData()
  }

  like() {
    this.messageService.like(this.message.id, this.currentUser.id).subscribe(() => this.likeMessageEvent.emit())
  }

  unlike() {
    this.messageService.unlike(this.message.id, this.currentUser.id).subscribe(() => this.unlikeMessageEvent.emit())
  }

  liked(): Boolean {
    const likes = this.message.likes;
    return likes != null && likes.map(u => u.id).includes(this.currentUser.id)
  }

  loadData() {
    const id = sessionStorage.getItem('id');

    this.userService.getUser(id).subscribe(u => this.currentUser = u);
  }

}

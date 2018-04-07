import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../domain/message";
import {User} from "../../domain/user";
import {MessageService} from "../../service/message.service";
import {AuthService} from "../../service/auth.service";

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

  constructor(private authService: AuthService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.authService.getUser().subscribe(u => this.currentUser = u);
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

}

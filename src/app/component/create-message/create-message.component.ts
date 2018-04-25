import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from "../../service/message.service";
import {User} from "../../domain/user";
import {Message} from "../../domain/message";
import {WebsocketService} from "../../service/websocket.service";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
  @Input() currentUser: User;
  @Output() createMessageEvent = new EventEmitter();

  maxTextCharacters = 140;
  message = new Message();

  constructor(private webSocketService: WebsocketService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.message.text = '';
  }

  postMessage() {
    this.message.text = this.message.text.trim();
    if (!this.message.text) {
      return;
    }

    this.message.author = this.currentUser;

    this.messageService.postMessage(this.message).subscribe(() => this.createMessageEvent.emit());

    this.message.text = "";
  }

  totalTextCharacters(): Number {
    return this.messageLength() * 100 / this.maxTextCharacters
  }

  buttonDisabled() {
    return this.messageLength() == 0
  }

  messageLength() {
    return this.message.text.trim().length
  }

}

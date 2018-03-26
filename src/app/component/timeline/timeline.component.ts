import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../service/message.service";
import {Message} from "../../domain/message";
import {Topic} from "../../domain/topic";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  messages: Message[];
  topics: Topic[];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.getMessages().subscribe(messages => this.messages = messages);
  }

}

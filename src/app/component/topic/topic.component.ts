import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Topic} from "../../domain/topic";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() topic: Topic;
  @Output() topicEvent = new EventEmitter<Topic>();

  constructor() {
  }

  ngOnInit() {
  }

  onTopicClick() {
    this.topicEvent.emit(this.topic);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../domain/topic";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() topic: Topic;

  constructor() {
  }

  ngOnInit() {
  }

}

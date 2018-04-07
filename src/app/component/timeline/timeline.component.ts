import {Component, OnInit, ViewChild} from '@angular/core';
import {Message} from "../../domain/message";
import {Topic} from "../../domain/topic";
import {TopicService} from "../../service/topic.service";
import {User} from "../../domain/user";
import {AuthService} from "../../service/auth.service";
import {NgbTabset} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {
  @ViewChild('tabset') tabSet: NgbTabset;

  currentUser: User;
  messages: Message[];
  mentions: Message[];
  topics: Topic[];
  topic: Topic;

  constructor(private authService: AuthService,
              private topicService: TopicService) {
  }

  ngOnInit() {
    this.loadData()
  }

  ngAfterViewChecked() {
    if (this.topic != null) {
      this.tabSet.select('topics')
    }
  }

  createMessageEvent() {
    this.loadData()
  }

  likeMessageEvent() {
    this.loadData()
  }

  unlikeMessageEvent() {
    this.loadData()
  }

  clearTopic() {
    this.topic = null
  }

  topicEvent(topic: Topic) {
    this.topic = topic;
    this.loadData()
  }

  loadData() {
    this.authService.getUser().subscribe(u => this.currentUser = u);
    this.authService.getMessagesTimeline().subscribe(m => this.messages = m);
    this.authService.getMessagesMentioned().subscribe(m => this.mentions = m);
    this.topicService.getTrendingTopics().subscribe(t => this.topics = t);

    if (this.topic != null) {
      this.topicService.getMessages(this.topic.id).subscribe(m => this.topic.messages = m);
    }
  }

}

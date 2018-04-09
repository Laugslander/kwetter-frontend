import {Component, OnInit, ViewChild} from '@angular/core';
import {Message} from "../../domain/message";
import {Topic} from "../../domain/topic";
import {TopicService} from "../../service/topic.service";
import {User} from "../../domain/user";
import {AuthService} from "../../service/auth.service";
import {NgbTabset} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

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

  constructor(private router: Router,
              private authService: AuthService,
              private userService: UserService,
              private topicService: TopicService) {
  }

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.loadData()
    } else {
      this.router.navigate(['login'])
    }
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
    const id = sessionStorage.getItem('id');

    this.userService.getUser(id).subscribe(u => this.currentUser = u);
    this.userService.getMessagesTimeline(id).subscribe(m => this.messages = m);
    this.userService.getMessagesMentioned(id).subscribe(m => this.mentions = m);
    this.topicService.getTrendingTopics().subscribe(t => this.topics = t);

    if (this.topic != null) {
      this.topicService.getMessages(this.topic.id).subscribe(m => this.topic.messages = m);
    }
  }

}

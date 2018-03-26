import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  messageCount = 15;
  followingCount = 10;
  followerCount = 5;

  constructor() {
  }

  ngOnInit() {
  }

}

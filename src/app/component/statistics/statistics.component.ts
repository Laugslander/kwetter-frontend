import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../domain/user";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() currentUser: User;

  constructor() {
  }

  ngOnInit() {
  }

}

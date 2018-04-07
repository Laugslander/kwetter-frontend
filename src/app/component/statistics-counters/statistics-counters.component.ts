import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../domain/user";

@Component({
  selector: 'app-statistics-counters',
  templateUrl: './statistics-counters.component.html',
  styleUrls: ['./statistics-counters.component.css']
})
export class StatisticsCountersComponent implements OnInit {
  @Input() currentUser: User;

  constructor() {
  }

  ngOnInit() {
  }

}

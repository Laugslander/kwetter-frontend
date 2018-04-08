import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {TimelineComponent} from './component/timeline/timeline.component';
import {MessageComponent} from './component/message/message.component';
import {CreateMessageComponent} from './component/create-message/create-message.component';
import {TopicComponent} from './component/topic/topic.component';
import {StatisticsComponent} from './component/statistics/statistics.component';
import {HeaderComponent} from './component/header/header.component';
import {MessageService} from "./service/message.service";
import {TopicService} from "./service/topic.service";
import {AuthService} from "./service/auth.service";
import {UserService} from "./service/user.service";
import {AppRoutingModule} from './app-routing.module';
import {ProfileComponent} from './component/profile/profile.component';
import {BannerComponent} from './component/banner/banner.component';
import {StatisticsCountersComponent} from './component/statistics-counters/statistics-counters.component';
import {DetailsComponent} from './component/details/details.component';
import {UsersComponent} from './component/users/users.component';
import {AccountService} from "./service/account.service";
import {TimeAgoPipe} from "time-ago-pipe";
import {SearchComponent} from './component/search/search.component';
import {LoginComponent} from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    CreateMessageComponent,
    MessageComponent,
    TopicComponent,
    StatisticsComponent,
    HeaderComponent,
    ProfileComponent,
    BannerComponent,
    StatisticsCountersComponent,
    DetailsComponent,
    UsersComponent,
    TimeAgoPipe,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    AuthService,
    AccountService,
    UserService,
    MessageService,
    TopicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

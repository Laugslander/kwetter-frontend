import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";


import {AppComponent} from './app.component';
import {TimelineComponent} from './component/timeline/timeline.component';
import {MessageComponent} from './component/message/message.component';
import {CreateMessageComponent} from './component/create-message/create-message.component';
import {TopicComponent} from './component/topic/topic.component';
import {StatisticsComponent} from './component/statistics/statistics.component';
import {HeaderComponent} from './component/header/header.component';
import {MessageService} from "./service/message.service";


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    CreateMessageComponent,
    MessageComponent,
    TopicComponent,
    StatisticsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

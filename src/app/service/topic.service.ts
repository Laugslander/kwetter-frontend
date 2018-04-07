import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Topic} from "../domain/topic";
import {environment} from "../../environments/environment";
import {Message} from "../domain/message";

@Injectable()
export class TopicService {

  private resource: string;

  constructor(private http: HttpClient) {

    this.resource = environment.api + 'topics/'
  }

  getTrendingTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.resource + 'trending')
  }

  getMessages(id: Number): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + id + '/messages')
  }

}

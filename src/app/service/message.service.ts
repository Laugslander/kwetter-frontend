import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Message} from "../domain/message";
import {User} from "../domain/user";
import {environment} from "../../environments/environment";

@Injectable()
export class MessageService {

  private resource: string;

  constructor(private http: HttpClient) {

    this.resource = environment.api + 'messages/'
  }

  postMessage(message: Message): Observable<Message> {
    let data = {
      author: {
        id: message.author.id,
      },
      text: message.text
    };

    return this.http.post<Message>(this.resource, data)
  }

  like(messageId: Number, userId: Number): Observable<User> {
    return this.http.post<User>(this.resource + messageId + '/likes/' + userId, null)
  }

  unlike(messageId: Number, userId: Number): Observable<User> {
    return this.http.delete<User>(this.resource + messageId + '/likes/' + userId)
  }

  getLikes(id: Number): Observable<User[]> {
    return this.http.get<User[]>(this.resource + id + '/likes')
  }

  searchMessages(searchString: String): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + 'search/' + searchString)
  }

}

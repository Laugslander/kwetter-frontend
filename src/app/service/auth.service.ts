import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Message} from "../domain/message";
import {Observable} from "rxjs/Observable";
import {User} from "../domain/user";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  private userId = 2;

  private resource: string;

  constructor(private http: HttpClient) {
    this.resource = environment.api + 'users/'
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.resource + this.userId)
  }

  getMessagesTimeline(): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + this.userId + '/messagesTimeline')
  }

  getMessagesPersonal(): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + this.userId + '/messagesPersonal')
  }

  getMessagesMentioned(): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + this.userId + '/messagesMentioned')
  }

}

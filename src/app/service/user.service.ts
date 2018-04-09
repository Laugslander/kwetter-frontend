import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Message} from "../domain/message";
import {User} from "../domain/user";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {

  private resource: string;

  constructor(private http: HttpClient) {

    this.resource = environment.api + 'users/'
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.resource + id)
  }

  getMessagesTimeline(id): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + id + '/messagesTimeline')
  }

  getMessagesPersonal(id): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + id + '/messagesPersonal')
  }

  getMessagesMentioned(id): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + id + '/messagesMentioned')
  }

  follow(id, followerId): Observable<User> {
    return this.http.post<User>(this.resource + id + '/followers/' + followerId, null)
  }

  unfollow(id, unfollowerId): Observable<User> {
    return this.http.delete<User>(this.resource + id + '/followers/' + unfollowerId)
  }

  searchUsers(searchString): Observable<User[]> {
    return this.http.get<User[]>(this.resource + 'search/' + searchString)
  }

}

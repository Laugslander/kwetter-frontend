import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Message} from "../domain/message";
import {AuthService} from "./auth.service";
import {User} from "../domain/user";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {

  private resource: string;

  constructor(private http: HttpClient,
              private authService: AuthService) {

    this.resource = environment.api + 'users/'
  }

  getUser(userId: Number): Observable<User> {
    return this.http.get<User>(this.resource + userId)
  }

  getMessagesPersonal(id: Number): Observable<Message[]> {
    return this.http.get<Message[]>(this.resource + id + '/messagesPersonal')
  }

  follow(id: Number, followerId: Number): Observable<User> {
    return this.http.post<User>(this.resource + id + '/followers/' + followerId, null)
  }

  unfollow(id: Number, unfollowerId: Number): Observable<User> {
    return this.http.delete<User>(this.resource + id + '/followers/' + unfollowerId)
  }

  searchUsers(searchString: String): Observable<User[]> {
    return this.http.get<User[]>(this.resource + 'search/' + searchString)
  }

}

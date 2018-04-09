import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {Credential} from "../domain/credential";

@Injectable()
export class AuthService {

  private resource: string;

  constructor(private http: HttpClient) {
    this.resource = environment.api + 'accounts/'
  }

  logIn(username: String, password: String): Observable<Credential> {
    let data = {
      username: username,
      password: password
    };

    return this.http.post<Credential>(this.resource + 'login', data)
  }

  logOut() {
    sessionStorage.clear();
  }

  loggedIn() {
    return sessionStorage.getItem('id') != null;
  }

}

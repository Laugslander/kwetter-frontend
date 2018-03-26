import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Message} from "../domain/message";

@Injectable()
export class MessageService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/kwetter-1.0-SNAPSHOT/api/messages/';
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url)
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Account} from "../domain/account";

@Injectable()
export class AccountService {

  private resource: string;

  constructor(private http: HttpClient) {

    this.resource = environment.api + 'accounts/'
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<[Account]>(this.resource)
  }

}

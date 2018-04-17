import {Injectable} from '@angular/core';
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";

@Injectable()
export class WebsocketService {

  private socket;

  constructor() {
    this.socket = new WebSocket(environment.websocket + sessionStorage.getItem('id'));
  }

  sendMessage(id: String) {
    this.socket.send(id);
  }

  getSocket() {
    return this.socket;
  }

}

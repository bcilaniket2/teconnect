import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  socket: any
  readonly url: string = config.socketUrl

  constructor() {
    this.socket = io(this.url)
  }

  listen(eventName: any) {
    return new Observable(subscriber => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data)
      })
    })
  }

  check() {
    this.socket.on("connection", (socket: any) => {
      console.log(socket);
    });
  }

  // // ValidateServerUser~{ "UserName": "1", "Password":"1"}~$
  // // ValidateServerUser~{"UserName": "1","Password":"1"}~>
  emit(userId: any, password: any) {
    console.log(this.socket)
    this.socket.emit("authentication", { "UserName": userId, "Password": password })
  }

}

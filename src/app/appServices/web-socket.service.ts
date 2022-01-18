import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  socket: any
  readonly url: string = 'ws://192.168.0.4:9100'

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

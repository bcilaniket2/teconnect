import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  socket: any
  readonly url: string = 'ws://192.168.0.3:9100'
  // readonly url: string = 'http://3.109.47.45:9100'

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
    // console.log('check 1', this.socket.connected);
    this.socket.on('', (data: any) => {
      console.log(data);
    });
  }

  // emit(UserName: any, Password: any) {
  //   this.socket.emit("1", "1")
  // }
  emit(eventName: any, data: any) {
    this.socket.emit(eventName, data)
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  socket: any
  // readonly url: string = 'http://localhost:3000'
  // readonly url: string = 'http://3.109.47.45'
  readonly url: string = 'http://3.109.47.45:9100'

  constructor() {
    this.socket = io(this.url)
  }

  listen(eventName: any) {
    return new Observable(subscriber => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data)
      }
      // ,(err:any)=>{console.log(err)}
      )
    })
  }

  // handleError() {
  //   this.socket.on('connect_error', (err: any) => handleErrors(err));
  //   this.socket.on('connect_failed', (err: any) => handleErrors(err));
  //   this.socket.on('disconnect', (err: any) => handleErrors(err));
  // }

  emit(eventName: any, data: any) {
    this.socket.emit(eventName, data)
  }

}

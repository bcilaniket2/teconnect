import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  socket: any
  // readonly url: string = 'http://localhost:3000'
  readonly url: string = 'http://3.109.47.45'
  // readonly url: string = 'http://3.109.47.45:9100'

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
check(){
console.log('check 1', this.socket.connected);
this.socket.on('connect', function(socket:any) {
  console.log('check 2', socket.connected);
});
}
  emit(eventName: any, data: any) {
    this.socket.emit(eventName,data)
  }

}

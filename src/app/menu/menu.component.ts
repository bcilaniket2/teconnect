import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sitedata from '../../assets/json/sitedata.json';
import { WebSocketService } from '../appServices/web-socket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  siteData: { menu: any } = sitedata;
  Object = Object;
  constructor(private router: Router, private webSocketService: WebSocketService) {
    this.webSocketService.listen('test event').subscribe((data) => {
      console.log(data)
     })
    this.webSocketService.check()
  }

  ngOnInit(): void {
  }

}

import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sitedata from '../../assets/json/sitedata.json';
// import { WebSocketService } from '../appServices/web-socket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  siteData: { menu: any } = sitedata;
  Object = Object;
  constructor(public router: Router) {
    // this.webSocketService.listen('test event').subscribe((data) => {
    //   console.log(data)
    //  })
    // this.webSocketService.check()
  }

  ngOnInit(): void {
  }
  isShow: any;
  topPosToStartShowing = 40;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


}

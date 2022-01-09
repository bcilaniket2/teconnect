import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sitedata from '../../assets/json/sitedata.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  siteData: { menu: any } = sitedata;
  Object = Object;
   constructor(private router:Router) { }
  
 ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import sitedata from '../../../assets/json/sitedata.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 siteData: { header: any } = sitedata;
  
  constructor() { }

  ngOnInit(): void {
  }

}

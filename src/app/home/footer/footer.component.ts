import { Component, OnInit } from '@angular/core';
import sitedata from '../../../assets/json/sitedata.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  siteData: { footer: any } = sitedata;
  
  constructor() { }

  ngOnInit(): void {
  }

}

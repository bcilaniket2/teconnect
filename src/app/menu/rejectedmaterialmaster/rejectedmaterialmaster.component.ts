import { Component, OnInit } from '@angular/core';
import sitedata from '../../../assets/json/sitedata.json';

@Component({
  selector: 'app-rejectedmaterialmaster',
  templateUrl: './rejectedmaterialmaster.component.html',
  styleUrls: ['./rejectedmaterialmaster.component.scss']
})
export class RejectedmaterialmasterComponent implements OnInit {
  siteData: { Reports: any } = sitedata;
  Object = Object;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import sitedata from '../../../../../assets/json/sitedata.json';

@Component({
  selector: 'app-rejectedmaterialmaster',
  templateUrl: './rejectedmaterialmaster.component.html',
  styleUrls: ['./rejectedmaterialmaster.component.scss']
})
export class RejectedmaterialmasterComponent implements OnInit {
  rejectedMaterial: { Reports: any } = sitedata;
  Object = Object;

  constructor() { }

  returnZero() {
    return 0
  }
  ngOnInit(): void {
  }

}

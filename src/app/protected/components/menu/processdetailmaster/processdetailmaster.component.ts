import { Component, OnInit } from '@angular/core';
import sitedata from '../../../../../assets/json/sitedata.json';

interface Reports {
  Id: string;
  EmployeeId: string;
  WorkOrderNumber: string;
  RejectedMaterialQuantity: string;
  SenderId: string
}
@Component({
  selector: 'app-processdetailmaster',
  templateUrl: './processdetailmaster.component.html',
  styleUrls: ['./processdetailmaster.component.scss']
})

export class ProcessdetailmasterComponent implements OnInit {
  processDetail: Reports[] = sitedata.Reports.RejectedMaterial;
  Object = Object;
  p: number = 1
  filterTerm: any
  order: string = 'processDetail.Id';
  reverse: boolean = false;
  arrow:boolean=false;
  caseInsensitive: boolean = false;

  constructor() { }

  returnZero() {
    return 0
  }

  setOrder(value: any) {
    this.arrow=true;
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value
  }

  ngOnInit(): void {
  }

}

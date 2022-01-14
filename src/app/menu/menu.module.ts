import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ChartsComponent } from './charts/charts.component';
import { BreakmasterComponent } from './breakmaster/breakmaster.component';
import { LogdetailmasterComponent } from './logdetailmaster/logdetailmaster.component';
import { ProcessdetailmasterComponent } from './processdetailmaster/processdetailmaster.component';
import { RejectedmaterialmasterComponent } from './rejectedmaterialmaster/rejectedmaterialmaster.component';
// import { NgChartsModule } from 'ng2-charts';
const menuRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'breakmaster', component: BreakmasterComponent },
      { path: 'logdetail', component: LogdetailmasterComponent },
      { path: 'processdetail', component: ProcessdetailmasterComponent },
      { path: 'rejectedmaterial', component: RejectedmaterialmasterComponent },
      { path: 'charts', component: ChartsComponent },
    ],
  },
];

@NgModule({
  declarations: [MenuComponent,
    ChartsComponent,
    BreakmasterComponent,
    LogdetailmasterComponent,
    ProcessdetailmasterComponent,
    RejectedmaterialmasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(menuRoutes),
    // NgChartsModule
  ]
})
export class MenuModule { }

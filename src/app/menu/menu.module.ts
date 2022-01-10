import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Report1Component } from './report1/report1.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { Report2Component } from './report2/report2.component';
import { ChartsComponent } from './charts/charts.component';

const menuRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [{ path: 'report1', component: Report1Component },
    { path: 'report2', component: Report2Component },{path:'charts', component:ChartsComponent}],
  },
];

@NgModule({
  declarations: [Report1Component, MenuComponent, Report2Component, ChartsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(menuRoutes),

  ]
})
export class MenuModule { }

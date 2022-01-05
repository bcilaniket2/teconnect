import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Report1Component } from './report1/report1.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const menuRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [{ path: 'money-transfer', component: Report1Component }],
  },
];

@NgModule({
  declarations: [Report1Component,MenuComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(menuRoutes),
   
  ]
})
export class MenuModule { }

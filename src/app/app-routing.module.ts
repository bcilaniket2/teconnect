import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ 
  { path: '', component: AuthComponent },
{
  path: 'auth',
  loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthModule),
},
{
  path: 'menu',
  loadChildren: () =>
    import('./menu/menu.module').then((m) => m.MenuModule),
},
{ path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './public/components/auth/auth.component';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./public/components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./protected/components/menu/menu.module').then((m) => m.MenuModule),
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

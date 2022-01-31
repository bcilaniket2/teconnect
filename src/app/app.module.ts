import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './public/components/page-not-found/page-not-found.component';
import { HomeComponent } from './shared/components/home/home.component';
import { HeaderComponent } from './shared/components/home/header/header.component';
import { FooterComponent } from './shared/components/home/footer/footer.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxHideOnScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

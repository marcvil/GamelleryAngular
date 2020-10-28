import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './layout/landing/landing.component';
import { GameCardComponent } from './components/GameCard/GameCard.component';
import { MainComponent } from './layout/main/main.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    GameCardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule





  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){

  }
}

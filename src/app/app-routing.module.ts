import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./layout/landing/landing.component";
import { GameCardComponent } from './components/GameCard/GameCard.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [


  {
    path: '',
    component: LandingComponent,

  },
  {
    path: 'main',
    component: MainComponent,

  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

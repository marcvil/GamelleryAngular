import { Component, OnInit } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gamellery';
  faCoffee = faCoffee;


  constructor()
  {


  }

  ngOnInit(){




  }

  /* getgame(){
    this.gameService.getGame(1)
    .subscribe((resp :any )=> {
      console.log(resp);
      this.game = resp;
    })
  } */



 }










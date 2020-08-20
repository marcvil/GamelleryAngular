import { Component, OnInit } from '@angular/core';
import { Repository } from "./Models/repository";
import { Game } from "./Models/game.model";
import { IGame } from "./interfaces/game";
import { ApiService } from './api.service';


import { Observable } from 'rxjs';
import { GameService } from './services/game.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gamellery';
  game : IGame;
  gameupdate :any;
  iff : boolean;
  hi:string;
  constructor(private http :HttpClient, public gameService : GameService)
  {}



  ngOnInit(){
    this.getgame();



  }

  getgame(){
    this.gameService.getGame(3)
    .subscribe((resp :any )=> {
      console.log(resp);
      this.game = resp;
    })
  }

  clickFunction(){
    this.gameService.getGame(3).subscribe((resp: any) => {
      console.log(resp);
      this.gameupdate =resp;
    });
      this.hi +="i";
    this.iff = true;
  }
}






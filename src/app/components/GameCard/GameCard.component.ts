import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IGameCoverCard } from 'src/app/interfaces/gameCoverCard';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-GameCard',
  templateUrl: './GameCard.component.html',
  styleUrls: ['./GameCard.component.css']
})

export class GameCardComponent implements OnInit {

  gameCard : IGameCoverCard

  constructor(private http :HttpClient,public gameService: GameService) { }

  ngOnInit() {
    this.getGameCover(1);
  }


  getGameCover(id : number) {
    this.gameService.getGameCoverCard(1)
     .subscribe((resp :IGameCoverCard )=> {

       this.gameCard = resp;
       console.log(this.gameCard);


     })
   }

    isPlaystation(): boolean{
     if(this.gameCard.platformsIds.includes(1))
     {
       return true;
     }
     else{ return false;}
   }
   isXbox(): boolean{
    if(this.gameCard.platformsIds.includes(2))
    {
      return true;
    }
    else{ return false;}
  }
}

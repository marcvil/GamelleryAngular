import { Component, OnInit } from '@angular/core';
import { Repository } from "./Models/repository";
import { Game } from "./Models/game.model";
import { IGame } from "./interfaces/game";
import { ApiService } from './api.service';

import { DomSanitizer,SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { GameService } from './services/game.service';
import { ImageService } from './services/image.service';
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
  img: Blob;

  Items : any[];
  imagefinal: any;
  temp: any;
  imagefinals: SafeUrl[];
  constructor(private http :HttpClient, public gameService : GameService,public imageService : ImageService, private sanitizer: DomSanitizer)
  {


  }



  ngOnInit(){
    this.getgame();
    


  }

  getImage(id :number){
    this.imageService.getImage(id).subscribe((blob :any )=> {


      let objectURL = URL.createObjectURL(blob);
      this.imagefinal = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

  getgame(){
    this.gameService.getGame(1)
    .subscribe((resp :any )=> {
      console.log(resp);
      this.game = resp;
    })
  }

  clickFunction(){
    this.imageService.getImage(1).subscribe((blob :any )=> {
      console.log(blob);
      let objectURL = URL.createObjectURL(blob);
      this.imagefinal = this.sanitizer.bypassSecurityTrustUrl(objectURL);

      }
  )
  }


  clickFunctionAllImages(){
    this.imageService.getAllImages().subscribe((blob :any )=> {
      this.Items= JSON.parse(blob);
      for (let i = 0; i < 3; i++){

        console.log(this.Items[i] ,i);

      };
        });

      };


      }










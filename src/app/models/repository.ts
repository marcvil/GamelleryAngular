import { Game } from "./game.model";
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const gameUrl = "api/Games";

@Injectable()
export class Repository {

  public game: Game;
  constructor(private httpClient: HttpClient,@Inject('BASE_URL')baseUrl :string)
  {
    httpClient.get<Game>(baseUrl + 'Games/GetGame')
      .subscribe(result => {
          this.game = result
        },
        error => console.error(error)
        );
        this.getMovie(3);

  }

  getMovie(id :number)  {
    ///console.log("Movie Data Requested");
    this.httpClient.get(gameUrl + "/" + id)
      .subscribe(response => {this.game =response});
  }

}

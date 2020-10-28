import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGame } from '../interfaces/game';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IGameCoverCard } from '../interfaces/gameCoverCard';


@Injectable({providedIn: 'root'})
export class GameService {
  constructor(private http: HttpClient) { }


  getGame(id :Number): Observable<IGame> {
    return this.http.get<IGame>("https://localhost:44320/api/Games/" +id);

  }

  getGameCoverCard(id :Number): Observable<IGameCoverCard> {
    return this.http.get<IGameCoverCard>("https://localhost:44320/api/Games/ImageCover/" +id);

  }

}


import { IGenre} from "./genre";
import { IGamesPlatforms} from "./gamesplatforms";
import { IImage } from "./image";


export interface IGame {

   gameId: number,
    gameName: string,
    gameDescription: string,
   genreId?: number,
   genre?: IGenre,
   gamesPlatforms?: IGamesPlatforms[];
   images? : IImage[];


}

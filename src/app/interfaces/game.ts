import { IGenre} from "../interfaces/genre";
import { IGamesPlatforms} from "./gamesplatforms";
import { IImage } from "../interfaces/image";


export interface IGame {

   gameId: number,
    gameName: string,
    gameDescription: string,
   genreId?: number,
   genre?: IGenre,
   gamesPlatforms?: IGamesPlatforms[];
   images? : IImage[];


}

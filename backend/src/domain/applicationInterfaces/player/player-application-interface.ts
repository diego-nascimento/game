import { gameDomainInterface } from "../../entities/game/game";
import { direction } from "../../entities/game/services/move";


export interface playerApplicationInterface {
  move(game: gameDomainInterface, player: string, direction: direction):void
}
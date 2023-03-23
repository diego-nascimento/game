import { playerApplicationInterface } from "../../domain/applicationInterfaces/player/player-application-interface";
import { gameDomainInterface } from "../../domain/entities/game/game";
import { direction } from "../../domain/entities/game/services/move";

export class PlayerApplication implements playerApplicationInterface{
  move(game: gameDomainInterface, player: string, direction: direction): void {
    game.handleMovimentation(player, direction)
  }
}
import { Game } from "../game";
import { FindPlayer } from "../services/findPlayer";
import { InitiatePlayer } from "../services/initiatePlayer";
import { Move } from "../services/move";
import { PositionOcupied } from "../services/positionOcupied/positionOcupied";
import { warZoneSizeProps } from "../types/war-zone-size-interface";

export interface gameFactoryInterface {
  createGame:(name: string, warZoneSize: warZoneSizeProps) => Game
}

export class GameFactory {
  createGame(name: string, warZoneSize: warZoneSizeProps) {
  const positionOcupied  = new PositionOcupied()
  const findPlayer = new FindPlayer()
  const initiatePlayer = new InitiatePlayer(positionOcupied)
  const movePlayer = new Move(positionOcupied)
  return new Game(warZoneSize, movePlayer, findPlayer, initiatePlayer, name)
  }
}
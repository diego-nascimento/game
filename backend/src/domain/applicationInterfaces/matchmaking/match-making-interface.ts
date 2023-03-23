import { gameDomainInterface } from "../../entities/game/game";
import { gameInfoInterface } from "../../entities/game/types/game-info-interface";
import { warZoneSizeProps } from "../../entities/game/types/war-zone-size-interface";
import { Player } from "../../entities/player/player";

export interface enterGameTypes {
  playerName:string, position: warZoneSizeProps
}

export interface matchMakingAppicationInterface {
  createGame: (name: string,  warZoneSize: warZoneSizeProps) => void
  enterGame: (gameID: string, id: string, playerName: string) => enterGameTypes
  listGames: () => gameInfoInterface[]
  findGame:(gameID: string)=>gameDomainInterface
}
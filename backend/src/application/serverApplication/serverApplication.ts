import { enterGameTypes, matchMakingAppicationInterface } from "../../domain/applicationInterfaces/matchmaking/match-making-interface";
import { gameInfoInterface } from "../../domain/entities/game/types/game-info-interface";
import { warZoneSizeProps } from "../../domain/entities/game/types/war-zone-size-interface";


export interface ServerApplicationInterface {
  listGames:() => gameInfoInterface[]
  createGame:(gameName: string, warZoneSize: warZoneSizeProps) => void
  enterGame: (gameId: string, playerId: string, playerName: string) => enterGameTypes
}

export class ServerApplication implements ServerApplicationInterface{
  constructor( 
    private readonly gameCoordinator: matchMakingAppicationInterface
  ){}

  listGames(){
    return this.gameCoordinator.listGames()
  }

  createGame(gameName: string, warZoneSize: warZoneSizeProps){
    this.gameCoordinator.createGame(gameName, warZoneSize)
  }

  enterGame(gameId: string, playerId: string, playerName: string): enterGameTypes{
    const newPlayer =  this.gameCoordinator.enterGame(gameId, playerId, playerName)
    return {
      playerName: newPlayer.playerName,
      position: newPlayer.position
    }

  }
}
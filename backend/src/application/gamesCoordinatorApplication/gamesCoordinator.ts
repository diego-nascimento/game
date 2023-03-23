import { gameFactoryInterface } from "../../domain/entities/game/factory/gameFactory";
import {  gameDomainInterface } from "../../domain/entities/game/game";

import { gameInfoInterface } from "../../domain/entities/game/types/game-info-interface";

import { warZoneSizeProps } from "../../domain/entities/game/types/war-zone-size-interface";
import { playerFactoryInterface } from "../../domain/entities/player/factory/playerFactory";
import { Player } from "../../domain/entities/player/player";
import { enterGameTypes, matchMakingAppicationInterface } from "../../domain/applicationInterfaces/matchmaking/match-making-interface";

export class GameCoordinatorApplication implements matchMakingAppicationInterface {
  private gameList: gameDomainInterface[]
  private readonly gameFactory: gameFactoryInterface
  private readonly playerFactory: playerFactoryInterface

  constructor(gameFactory: gameFactoryInterface, playerFactory: playerFactoryInterface){
    this.gameList = []
    this.gameFactory = gameFactory
    this.playerFactory = playerFactory
  }
  listGames(): gameInfoInterface[] {
    return this.gameList.map(function(game): gameInfoInterface  {
      return {
        id: game.id(),
        name: game.name(),
        warzone: game.warZoneArea()
      }
    })
  }

  enterGame(gameID: string, id: string, playerName: string): enterGameTypes {
    const game = this.findGame(gameID)
    const newPlayer = this.playerFactory.createPlayer(id, playerName)
    game.addPlayer(newPlayer)
    return {
      playerName: newPlayer.name(),
      position: newPlayer.position().getPosition()
    } 
  }

  createGame(name: string, warZoneSize: warZoneSizeProps): void {
    const newGame = this.gameFactory.createGame(name, warZoneSize)
    this.gameList.push(newGame)
  }

  findGame(gameID: string):gameDomainInterface {
    const game =  this.gameList.find(game => game.id() === gameID)
    if(!game) throw new Error('Game not found')
    return game
  }
}
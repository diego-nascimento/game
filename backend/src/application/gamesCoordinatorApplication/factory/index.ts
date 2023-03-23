import { PlayerFactory } from "../../../domain/entities/player/factory/playerFactory"
import {GameFactory} from '../../../domain/entities/game/factory/gameFactory'
import { GameCoordinatorApplication } from "../gamesCoordinator"


export interface GameCoordinatorFactoryInterface {
  create: () =>  GameCoordinatorApplication
}

export class GameCoordinatorFactory implements GameCoordinatorFactoryInterface{
  create (): GameCoordinatorApplication{
    const gameFactory = new GameFactory()
    const playerFactory = new PlayerFactory()
    return new GameCoordinatorApplication(gameFactory, playerFactory)
  }
  
}
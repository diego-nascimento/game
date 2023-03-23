import { GameFactory } from "../../domain/entities/game/factory/gameFactory"
import { Game } from "../../domain/entities/game/game"
import { PlayerFactory } from "../../domain/entities/player/factory/playerFactory"
import { Position } from "../../domain/entities/position"
import { GameCoordinatorApplication } from "../gamesCoordinatorApplication/gamesCoordinator"
import { PlayerApplication } from "./PlayerApplication"



describe('Player Application tests', () => {
  const makeSut = () => {
    const gameFactory = new GameFactory()
    const playerFactory = new PlayerFactory()
    const gameCoordinator = new GameCoordinatorApplication(gameFactory, playerFactory)
    const sut = new PlayerApplication()

    return {
      gameCoordinator,
      sut
    }
  }
  test('The player should move', () => {
    const {gameCoordinator, sut} = makeSut()
    gameCoordinator.createGame('Game teste', {horizontal: 20, vertical: 20})
    const [game] = gameCoordinator.listGames()
    const gameFounded = gameCoordinator.findGame(game.id)
    const player = gameCoordinator.enterGame(game.id, 'asd', 'Player 1')
    player.setPosition(new Position(0,0))
    sut.move(gameFounded, player.id(), 'bottom')
    expect(player.position()).toEqual({"horizontal": 0, "vertical": 1})

    })
})
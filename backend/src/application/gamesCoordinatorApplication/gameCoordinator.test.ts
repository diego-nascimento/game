import { GameFactory } from "../../domain/entities/game/factory/gameFactory"
import { PlayerFactory } from "../../domain/entities/player/factory/playerFactory"
import { GameCoordinatorApplication } from "./gamesCoordinator"

describe('Game coordinator tests', () => {
  const makeSut = () => {
    const gameFactory = new GameFactory()
    const playerFactory = new PlayerFactory()
    const sut = new GameCoordinatorApplication(gameFactory, playerFactory)

    return {
      sut
    }
  }
  test('Should create a game', () => {
    const {sut} = makeSut()
    sut.createGame('game test', {horizontal: 20, vertical: 20})
    expect(sut.listGames()).toHaveLength(1)
  })

  test('Should list games correctly', () => {
    const {sut} = makeSut()
    sut.createGame('game test', {horizontal: 20, vertical: 20})
    const games = sut.listGames()
    expect(games).toHaveLength(1)
    expect(games[0].id).toBeDefined()
    expect(games[0].name).toBe('game test')
  })

  test('Should enter in a game', () => {
    const {sut} = makeSut()
    sut.createGame('game test', {horizontal: 20, vertical: 20})
    sut.createGame('game test 2', {horizontal: 20, vertical: 20})
    const [game1] = sut.listGames()
   
    const gameFounded  = sut.findGame(game1.id)
    expect(gameFounded.name()).toBe('game test')
  })

  test('Should throw a error if a game is not founded', () => {
    expect(() => {
      const {sut} = makeSut()
      sut.createGame('game test', {horizontal: 20, vertical: 20})
      sut.createGame('game test 2', {horizontal: 20, vertical: 20})
      const [game1] = sut.listGames()
     
      sut.findGame( 'fake id')
    }).toThrowError('Game not found')
   
  })

  test('Should enter in a game', () => {
    const {sut} = makeSut()
    sut.createGame('game test', {horizontal: 20, vertical: 20})
    const [game] = sut.listGames()
    sut.enterGame(game.id, 'asd','Player 1')
    const gameFounded  = sut.findGame(game.id)
    expect(gameFounded.players()).toHaveLength(1)
    expect(gameFounded.players()[0].name()).toBe('Player 1')
  })
})
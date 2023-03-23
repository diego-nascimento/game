

import { describe } from "node:test";
import { Player } from "../player/player";
import { Position } from "../position";
import {Game} from './game'
import { FindPlayer } from "./services/findPlayer";
import { InitiatePlayer } from "./services/initiatePlayer";
import { Move } from "./services/move";
import { PositionOcupied } from "./services/positionOcupied/positionOcupied";


const makeSut = () => {
  const warZoneSize =  {horizontal: 5, vertical: 5}
  const positionOcupied  = new PositionOcupied()
  const findPlayer = new FindPlayer()
  const initiatePlayer = new InitiatePlayer(positionOcupied)
  const movePlayer = new Move(positionOcupied)

  const sut = new Game(warZoneSize, movePlayer, findPlayer, initiatePlayer, 'Game 1')
  return {
    sut,
    warZoneSize
  }
}

describe('findPlayer unit tests', () => {
  test('Should create a new Game', () => {
    const {sut, warZoneSize} = makeSut()

    expect(sut.id()).toBeDefined()
    expect(sut.name()).toBe('Game 1')
    expect(sut.players()).toEqual([])
    expect(sut.warZoneArea()).toEqual(warZoneSize)
  })

  test('Should add a new Player to the game', () => {
    const {sut} = makeSut()
    const player = new Player('asd','Player 1')
    sut.addPlayer(player)

    expect(sut.players()).toHaveLength(1)

  })

  test('Should move a player', () => {
    const {sut} = makeSut()
    const player = new Player('asd','Player 1')
    sut.addPlayer(player)

    const position = new Position(2, 5 )

    player.setPosition(position)

    sut.handleMovimentation(player.id(), 'top')

    expect(player.position()).toEqual({ horizontal: 2, vertical: 4 })

  })
})
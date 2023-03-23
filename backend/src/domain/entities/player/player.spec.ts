import { describe } from "node:test";
import { Player } from "./player";
import { Position } from "../position/position";

describe('move unit tests', () => {
  test('Should create a player', () => {
    const player = new Player('asd','Player 1')
    const position = new Position(0,0)
    player.setPosition(position)


    expect(player.id()).toBeDefined()
    expect(player.name()).toBe('Player 1')
    expect(player.position().getPosition()).toEqual({
      horizontal: 0,
      vertical: 0
    })
  })

  test('Should throw a error if player name is empty', () => {
    expect(() => {
      new Player('asd','')
    }).toThrowError('Nome de usuario nao pode ser vazio')
  })

  test('Should throw a error if player name lenght is greater than 10', () => {
    expect(() => {
      new Player('asd','12345678910')
    }).toThrowError('Só é permitido um nome com 10 caracteres para um jogador')
  })


})
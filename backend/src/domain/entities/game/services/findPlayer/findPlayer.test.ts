import { describe } from "node:test";
import { Player } from "../../../player/player";
import { FindPlayer } from "./findPlayer";



describe('findPlayer unit tests', () => {
  test('Should find a player in the array', () => {
    const player1 = new Player('asd','Player 1')
    const player2 = new Player('asd','Player 2')
    const players = [player1, player2]
    const sut = new FindPlayer()

    expect(sut.findplayer(player1.id(), players)).toEqual(player1)
  })

  test('Should throw if player does not exists', () => {
    expect(() => {
      const player1 = new Player('asd','Player 1')
    const player2 = new Player('asd','Player 2')
    const players = [player1, player2]
    const sut = new FindPlayer()
    sut.findplayer('any_id', players)
    }).toThrowError('User not found')
    
  })
})
import { describe } from "node:test";
import { Player } from "../../../player/player";
import { Position } from "../../../position/position";
import { warZoneSizeProps } from "../../types/war-zone-size-interface";

import { PositionOcupied } from "../positionOcupied/positionOcupied";
import {InitiatePlayer} from './initiatePlayer'



describe('findPlayer unit tests', () => {
  const makeSut = () => {
    const player1 = new Player('asd','Player 1')
    const positionOcupied = new PositionOcupied()
    const sut = new InitiatePlayer(positionOcupied)

    const player2 = new Player('asd','Player 2') 
    const position2 = new Position(0, 1)
    player2.setPosition(position2)
   
    const position3 = new Position(1, 2)
    
    const player3 = new Player('asd','Player 3')
    player3.setPosition(position3)
    const position4 = new Position(3, 1)
    const player4 = new Player('asd','Player 4')
    player4.setPosition(position4)

    const players = [player2, player3, player4]

    return {sut, player1, players}
  }
  test('Should find a player in the array', () => {
    const warZoneArea: warZoneSizeProps = {horizontal: 5, vertical: 5}
    const {player1, players, sut} = makeSut()
    

    sut.initiate(player1, warZoneArea, players)

    expect(player1.position).toBeDefined()

    expect(
      !!players
        .filter(player => player.id() !== player1.id())
        .find(player => player.position() === player1.position()))
      .not.toBeTruthy()
  })


})
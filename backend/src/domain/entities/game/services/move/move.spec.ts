import { describe } from "node:test";
import { Player } from "../../../player/player";
import { Position } from "../../../position/position";
import { PositionOcupied } from "../positionOcupied/positionOcupied";
import { Move } from "./move";




describe('move unit tests', () => {
  test('Should move top', () => {
    const position = new Position(0,5)
    const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)
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

    sut.move('top', position, {horizontal: 5, vertical: 5}, players)
    
    expect(position.getPosition()).toEqual({horizontal: 0, vertical: 4})
  })


 
  test('Should move bottom', () => {
    const position = new Position(0,4)
    const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)
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

    sut.move('bottom', position, {horizontal: 5, vertical: 5}, players)
    
    expect(position.getPosition()).toEqual({horizontal: 0, vertical: 5})
  })



  test('Should move left', () => {
    const position = new Position(1,0)
    const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)
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

    sut.move('left', position, {horizontal: 5, vertical: 5}, players)
    
    expect(position.getPosition()).toEqual({horizontal: 0, vertical: 0})
  })

  test('Should move right', () => {
    const position = new Position(1,0)
    const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)
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

    sut.move('right', position, {horizontal: 5, vertical: 5}, players)
    
    expect(position.getPosition()).toEqual({horizontal: 2, vertical: 0})
  })

  test('Should throw if a player is in the spot where i want to move', () => {
    expect(() => {
      const position = new Position(0,0)
      const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)

    const player1 = new Player('asd','Player 2') 
    const position1 = new Position(0, 1)

    player1.setPosition(position1)
    
    sut.move('bottom', position, {horizontal: 5, vertical: 5}, [player1])
    
    }).toThrowError('User cant move right now')
  })

  test('Should throw if reaches try to move beyond top border', () => {
    expect(() => {
      const position = new Position(0,0)
      const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)
    

    sut.move('top', position, {horizontal: 5, vertical: 5}, [])
    
    }).toThrowError('User cant move right now')
  })

  test('Should throw if reaches try to move beyond bottom border', () => {
    expect(() => {
      const position = new Position(0,5)
      const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)

    sut.move('bottom', position, {horizontal: 5, vertical: 5}, [])
    
    }).toThrowError('User cant move right now')
  })

  test('Should throw if reaches try to move beyond left border', () => {
    expect(() => {
      const position = new Position(0,5)
      const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)

    sut.move('left', position, {horizontal: 5, vertical: 5}, [])
  
    }).toThrowError('User cant move right now')
  })

  test('Should throw if reaches try to move beyond right border', () => {
    expect(() => {
      const position = new Position(5,0)
      const positionOcupied = new PositionOcupied()
    const sut =  new Move(positionOcupied)

    sut.move('right', position, {horizontal: 5, vertical: 5}, [])
 
    }).toThrowError('User cant move right now')
  })


})
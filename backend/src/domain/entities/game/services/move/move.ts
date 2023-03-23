import { Player } from "../../../player/player"
import { Position } from "../../../position/position"
import { warZoneSizeProps } from "../../types/war-zone-size-interface"

import { positionOcupiedInterface } from "../positionOcupied/positionOcupied"

export type direction = 'left' | 'right'| 'top' | 'bottom'

export interface MoveInterface {
  move:(direction:direction, playerPosition: Position, warZoneSize: warZoneSizeProps, players: Player[]) =>void
}

export class Move implements MoveInterface{
  private readonly positionOcupied: positionOcupiedInterface 
  constructor(positionOcupied: positionOcupiedInterface){
    this.positionOcupied = positionOcupied

  }

  
  move(direction:direction, playerPosition: Position, warZoneSize: warZoneSizeProps, players: Player[]){
    if(!this.canMove(playerPosition, direction, warZoneSize, players)) throw new Error('User cant move right now')
    switch(direction){
      case 'top':
        playerPosition.moveTop()
         break
      case 'bottom':
        playerPosition.moveBottom()
         break
      case 'left':
        playerPosition.moveLeft()
         break
      case 'right':
          playerPosition.moveRight()
           break
    }
  }

  
  private newPosition(position: Position, direction: direction): warZoneSizeProps{
    const {horizontal, vertical} = position.getPosition()
    switch(direction){
      case 'top':
        return {
          horizontal, vertical: vertical -1
        } 
      case 'bottom':
        return {
          horizontal, vertical: vertical  + 1
        } 
      case 'left':
        return {
          horizontal: horizontal - 1, vertical
        } 
      case 'right':
        return {
          horizontal: horizontal + 1, vertical
        } 
    }
  }

  private canMove(position: Position, direction: direction, warZoneSize: warZoneSizeProps, players: Player[]):boolean{
    const {horizontal, vertical} = position.getPosition()
    const newPosition = this.newPosition(position, direction)
    if(this.positionOcupied.positionOcupied(newPosition, players)) return false
    switch(direction){
      case 'top':
        return vertical > 0 
      case 'bottom':
        return vertical < warZoneSize.vertical
      case 'left':
        return horizontal > 0
      case 'right':
        return horizontal < warZoneSize.horizontal
    }
  }

}
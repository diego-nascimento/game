import { Player } from "../../../player/player";
import { Position } from "../../../position/position";
import { warZoneSizeProps } from "../../types/war-zone-size-interface";

import { positionOcupiedInterface } from "../positionOcupied/positionOcupied";

export interface InitiatePlayerInterface {
  initiate: (player: Player, warZoneSize: warZoneSizeProps, players: Player[])=> void
}

export class InitiatePlayer implements InitiatePlayerInterface {
  private readonly positionOcupied: positionOcupiedInterface 

  constructor(positionOcupied: positionOcupiedInterface){
    this.positionOcupied = positionOcupied
  }

  initiate(player: Player, warZoneSize: warZoneSizeProps, players: Player[]){
    let  initialPlayerPosition: warZoneSizeProps
    let validPosition = false
    do {
      initialPlayerPosition = this.generateInitialPlayerPosition(warZoneSize)
      validPosition = !this.positionOcupied.positionOcupied(initialPlayerPosition, players)
    }while(!validPosition)
    const position = new Position(initialPlayerPosition.horizontal, initialPlayerPosition.vertical)
    player.setPosition(position)
    players.push(player)
  }

  private generateInitialPlayerPosition(warZoneSize: warZoneSizeProps): warZoneSizeProps{
    return {
      horizontal: Math.floor(Math.random() * (warZoneSize.horizontal + 1)),
      vertical: Math.floor(Math.random() * (warZoneSize.horizontal + 1))
    }
  }

 

}
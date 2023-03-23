import { Player } from "../../../player/player"
import { warZoneSizeProps } from "../../types/war-zone-size-interface"


export interface positionOcupiedInterface {
  positionOcupied: (position: warZoneSizeProps, players: Player[]) =>boolean
}

export class PositionOcupied implements  positionOcupiedInterface {
  positionOcupied(position: warZoneSizeProps, players: Player[]):boolean{
    return !!players.find(player => {
      const playerPosition = player.position()
      const {horizontal, vertical} = playerPosition.getPosition()
      return horizontal === position.horizontal && vertical === position.vertical
    })
  }
}
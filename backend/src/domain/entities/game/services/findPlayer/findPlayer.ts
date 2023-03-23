import { Player } from "../../../player/player"

export interface findPlayerInterface {
  findplayer: (id: string, players: Player[]) =>Player
}

export class FindPlayer implements findPlayerInterface {
  findplayer(id: string, players: Player[]):Player {
    const player = players.find(player => player.id() === id)
    if(player === undefined) throw new Error('User not found')
    return player
  }
}
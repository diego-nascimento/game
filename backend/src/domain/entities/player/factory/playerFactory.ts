import { Player } from "../player";




export interface playerFactoryInterface {
  createPlayer:(id: string, name: string) => Player
}

export class PlayerFactory {
  createPlayer(id: string, name: string ) {
    return new Player(id, name)
  }
}
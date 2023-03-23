import { Player } from "../player/player";
import { findPlayerInterface } from "./services/findPlayer/findPlayer";
import { InitiatePlayerInterface } from "./services/initiatePlayer/initiatePlayer";
import { direction, MoveInterface } from "./services/move/move";
import crypto from 'crypto'
import { warZoneSizeProps } from "./types/war-zone-size-interface";


export interface gameDomainInterface {
  addPlayer:(player: Player)=>void 
  handleMovimentation:(playerId: string, direction: direction) =>void
  id:() => string 
  name:() =>string
  players:() => Player[]
  warZoneArea:() =>warZoneSizeProps
}

export class Game implements gameDomainInterface{
  private _id: string
  private _name: string
  private _players: Player[]
  private _warZoneSize: warZoneSizeProps
  private _findPlayer: findPlayerInterface
  private _movePlayer: MoveInterface
  private _initiatePlayer: InitiatePlayerInterface

  constructor(
    warZoneSize: warZoneSizeProps, 
    movePlayer: MoveInterface, 
    findPlayer: findPlayerInterface, 
    initiatePlayer: InitiatePlayerInterface, 
    name: string
    ){
    this._id = crypto.randomUUID()
    this._name = name
    this._players = []
    this._warZoneSize = warZoneSize
    this._movePlayer = movePlayer
    this._findPlayer = findPlayer
    this._initiatePlayer = initiatePlayer
  }

  addPlayer(player: Player) {
    this._initiatePlayer.initiate(player, this._warZoneSize, this._players)
  }

  handleMovimentation(playerId: string, direction: direction){
    const player = this._findPlayer.findplayer(playerId, this._players)
    this._movePlayer.move(direction, player.position(), this._warZoneSize, this._players)
  }

  id():string {
    return this._id
  }

  name():string{
    return this._name
  }

  players(): Player[]{
    return this._players
  }

  warZoneArea():warZoneSizeProps{
    return this._warZoneSize
  }
}
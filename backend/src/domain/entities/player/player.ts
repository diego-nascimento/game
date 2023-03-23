import { Position } from '../position/position'

export class Player {
  private _id: string
  private _name: string
  private _position!: Position

  constructor(id: string, name: string) {
    this._id = id
    this._name = name
    this.validate()
  }

  private validate(){
    this.validateName()
  }

  setPosition(position: Position){
    this._position = position
  }

  private validateName(){
    if(this._name.length === 0) throw new Error('Nome de usuario nao pode ser vazio')
    if(this._name.length > 10) throw new Error('Só é permitido um nome com 10 caracteres para um jogador')
  }

  id(){
    return this._id
  }

  position(){
    return this._position
  }

  name(){
    return this._name
  }
}
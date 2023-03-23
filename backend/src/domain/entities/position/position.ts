
interface PositionInterface {
  moveTop: () => void
  moveLeft: () => void
  moveRight: () => void
  moveBottom: () => void
}

export class Position implements PositionInterface{
  private horizontal: number
  private vertical: number

  constructor(horizontal: number, vertical: number){
    this.horizontal = horizontal
    this.vertical = vertical
  }

   moveLeft(){
    this.horizontal = this.horizontal -1
  }

   moveRight(){
    this.horizontal = this.horizontal + 1
  }

   moveBottom(){
    this.vertical = this.vertical + 1
  }

   moveTop(){
    this.vertical = this.vertical  - 1
  }

  getPosition(){
    return {
      horizontal: this.horizontal, vertical:this.vertical
    }
  }
} 
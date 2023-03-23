
import { Server } from "socket.io"
import { DefaultEventsMap } from "socket.io/dist/typed-events"
import { ServerApplicationInterface } from "../../../application/serverApplication/serverApplication"



export class WebSocket {
  constructor(
    private readonly io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, 
    private readonly gameServer: ServerApplicationInterface){
    this.websocketMethods()
  }

  websocketMethods(){
    this.io.on('connection', socket => {
      socket.on('enterGame', data => {
        try {
          
          const {gameId, playerName} = data
          console.log('user connected', playerName)
          this.gameServer.enterGame(gameId, socket.id, playerName)
          socket.join(gameId)
          socket.emit('userconnected', {playerId: socket.id})
        } catch (error) {
          if(error instanceof Error){
            socket.emit('error', {message: error?.message})
          }else{
            socket.emit('error', {message: 'Algo deu errado'})
          }
         
        }
        
      })
    })
  }
}







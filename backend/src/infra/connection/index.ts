import {Server} from "socket.io";
import express, {Express} from 'express'
import {createServer} from 'http'
import cors from 'cors'
import { ServerApplicationInterface } from "../../application/serverApplication/serverApplication";
import { ServerApplicationFactory } from "../../application/serverApplication/factory";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import '../socket-io/websocket'
import { WebSocket } from "../socket-io/websocket";
import { ExpressRouter } from "../express/routes";


class GameServer  {
  private readonly gameServer: ServerApplicationInterface
  private  app: Express
  private serverHttp: any
  private io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>


  constructor(){
    this.gameServer = new ServerApplicationFactory().create()
    this.app = express()
    this.app.use(express.json())
    this.app.use(cors());
    this.serverHttp = createServer(this.app)
    this.io = new Server(this.serverHttp, {
      cors: {
        origin: '*'
      }
    })
    new WebSocket(this.io, this.gameServer)
    new ExpressRouter(this.app, this.gameServer)
  }

  init(port: number){
    this.serverHttp.listen(port, () => console.log('Server running on port 3000'))
  }

  getServer(){
    this.init(3000)
    return {
      io: this.io
    }
  }
}



export const server =  new GameServer().getServer()









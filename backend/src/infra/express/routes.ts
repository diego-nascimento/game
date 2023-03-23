import {Router, Express, Request, Response} from 'express'
import { ServerApplicationInterface } from '../../application/serverApplication/serverApplication'



export class ExpressRouter {
  private router: Router
  
  constructor(
    private  app: Express,
    private  gameServer: ServerApplicationInterface){
    this.router = Router()
    this.routes()
    this.app.use(this.router)
  }

  routes(){
    this.router.get('/listgames', (_, response: Response) => {
      const games = this.gameServer.listGames()
      response.status(200).json(games)
    })
    this.router.post('/creategame',  (request: Request, response: Response) => {
      const {gameName, warzoneSize} = request.body
      this.gameServer.createGame(gameName, warzoneSize)
      
      return response.status(200).json()
    })
  }

}


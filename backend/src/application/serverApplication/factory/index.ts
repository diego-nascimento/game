import { GameCoordinatorFactory } from "../../gamesCoordinatorApplication/factory"
import { ServerApplication } from "../serverApplication"



export interface serverFactoryInterface {
  create: () =>  ServerApplication
}

export class ServerApplicationFactory implements serverFactoryInterface{
  create (): ServerApplication{
    const GameCoordinator = new GameCoordinatorFactory().create()
    return new ServerApplication(GameCoordinator)
  }
  
}
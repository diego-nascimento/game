import { combineReducers } from "redux";
import createGame  from './reducers/createGame'
import {StateType as createGameStateType} from './reducers/createGame'

export const reducer = combineReducers({
  createGame
})

export interface RootState {
  createGame: createGameStateType
}
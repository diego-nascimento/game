

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Result } from '../../../shared/http'

type errorTypes = string | null

export interface StateType {
  loading: boolean,
  error: errorTypes
  data: Result | null
}

const initialState: StateType = {
  loading: false,
  error: '',
  data: null
}

const createGameReducer = createSlice({
  name: 'getGames',
  initialState,
  reducers: {
    request: () => {
      return {
        loading: true,
        error:  null,
        data: null
      }
    },
    failure: (state, action:PayloadAction<errorTypes>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null
      }
    },
    success: (state, action: PayloadAction<Result>) => {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }
    }
  }
})

export default createGameReducer.reducer

export const {failure, request, success} = createGameReducer.actions


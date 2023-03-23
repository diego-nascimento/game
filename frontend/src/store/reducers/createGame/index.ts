

import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type errorTypes = string | null

export interface StateType {
  loading: boolean,
  error: errorTypes
  success: boolean
}

const initialState: StateType = {
  loading: false,
  error: null,
  success: false
}

const createGameReducer = createSlice({
  name: 'createGame',
  initialState,
  reducers: {
    request: () => {
      return {
        loading: true,
        error:  null,
        success: false
      }
    },
    failure: (state, action:PayloadAction<errorTypes>) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false
      }
    },
    success: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: false,
        error: null,
        success: action.payload
      }
    }
  }
})

export default createGameReducer.reducer

export const {failure, request, success} = createGameReducer.actions


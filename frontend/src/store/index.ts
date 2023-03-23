import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './rootReducer'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer
})



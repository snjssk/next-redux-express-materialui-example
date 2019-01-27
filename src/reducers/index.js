import { combineReducers } from 'redux'
import { appReducer, appInitialState } from './appReducer'

export const rootReducer = combineReducers({
  app: appReducer
})

export const rootState = {
  app: appInitialState
}
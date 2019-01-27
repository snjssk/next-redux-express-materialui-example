import * as ActionTypes from './ActionTypes'

export function appInit(payload) {
  return {
    type: ActionTypes.APP_INIT, payload
  }
}

export function appGet(payload) {
  return {
    type: ActionTypes.APP_GETDATA, payload
  }
}
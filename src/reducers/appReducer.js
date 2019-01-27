import * as ActionTypes from '../actions/ActionTypes';
import { updateObject } from '../utils/updateObject';

export const appInitialState = {
  env: {
    mode: process.env.NODE_ENV
  },
  data: {
    payload: []
  }
}

export const appReducer = (state = appInitialState, action ) => {
  switch (action.type) {
    case ActionTypes.APP_INIT: {
      return state
    }
    case ActionTypes.APP_GETDATA_OK: {
      const { data } = state
      return updateObject(state, { data: { ...data, ...action }})
    }
    case ActionTypes.APP_GETDATA_NG: {
      const { data } = state
      return updateObject(state, { data: { ...data, ...action }})
    }
    default:
      return state
  }
}
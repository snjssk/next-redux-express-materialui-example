import fetch from 'isomorphic-unfetch'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as ActionTypes from '../actions/ActionTypes'


function api () {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json().then(data => {
      return {
        payload: data,
        error: false,
        meta: {}
      }
    })
  })
}


function* getData() {
  try {
    const { payload, meta, error } = yield call(api, {})
    yield put({ type: ActionTypes.APP_GETDATA_OK, payload, meta, error })
  } catch (e) {
    yield put({ type: ActionTypes.APP_GETDATA_NG, ...e })
  }
}

export const appSaga = [
  takeEvery(ActionTypes.APP_GETDATA, getData)
]
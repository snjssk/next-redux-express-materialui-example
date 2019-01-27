import App, {Container} from 'next/app'
import React from 'react'
import ReactDOM from 'react-dom'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../src/store/'
import { Provider, connect } from 'react-redux'
import Router from 'next/router'


const handleRouteChange = (err, url, as) => {
  console.log('App is changing to: ', err, Router.router)
}
Router.events.on('routeChange', handleRouteChange)


class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    
  }
}
const mapDispatchToProps = dispatch => {
  return {
  }
}

// export default withRedux(createStore)(withReduxSaga({ async: true })(connect(mapStateToProps, mapDispatchToProps)(MyApp)))
export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp))

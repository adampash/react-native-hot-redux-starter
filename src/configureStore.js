'use strict'

import appReducers from './reducers/index'
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'

export default function configureStore(initialState) {
  // // Enables your middleware:
  let composers = [ applyMiddleware(thunk) ]
  const finalCreateStore = compose(...composers)(createStore)

  let store = finalCreateStore(appReducers, initialState)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

// include devtools and persiststate if enabled
// if (__DEVTOOLS__) {
//   composers.push(
//     devTools(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )
// }



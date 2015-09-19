'use strict'

import { combineReducers } from 'redux'
import * as exampleReducer from './example'

const appReducers = combineReducers({
  ...exampleReducer
})

export default appReducers


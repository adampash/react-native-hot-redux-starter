'use strict'

import { combineReducers } from 'redux'
import { TEST } from '../actions/example'

export function foo(state='Click me to test Redux setup.', action) {
  switch (action.type) {
  case TEST:
    return action.text
  default:
    return state
  }
}

// const exampleApp = combineReducers({
//   foo
// })
// 
// export default exampleApp

// below is without combinereducers
// const initialState = {foo: 'bar'}

// export default function testApp(state = initialState, action={}) {
//   switch (action.type) {
//   case TEST:
//     return _.assign({}, state, {
//       foo: action.text,
//     })
//   default:
//     return state
//   }
// }

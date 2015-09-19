'use strict'

export const TEST = 'TEST'

//
// action creators
//

export function test(text) {
  return { type: TEST, text }
}

export function testAsync(text) {
  return dispatch => {
    // dispatch optimistic update
    dispatch(test(text))
    setTimeout(() => {
      // dispatch final update
      dispatch(test(`${text} async`))
    }, 1000)
  }
}

'use strict'

import React from 'react-native'
import ExampleApp from './example'
import { Provider } from 'react-redux/native'
import configureStore from '../configureStore'


export default class react_native_starter extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        {() => <ExampleApp />}
      </Provider>
    )
  }
}

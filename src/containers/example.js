'use strict'

import React from 'react-native'
import { connect, dispatch } from 'react-redux/native'
import { test } from '../actions/example'
import DumbComponent from '../components/DumbComponent'

let {
  StyleSheet,
  Text,
  View,
} = React

function select(state) {
  return { foo: state.foo }
}

@connect(state => {
  return select(state)
})
export default class ExampleApp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { foo, dispatch } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Starter is Running Hot!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <DumbComponent
          foo={foo}
          test={(text='hi') => dispatch(test(text))}
        />
      </View>
    )
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

'use strict'

import React from 'react-native'

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React

let styles = StyleSheet.create({
  dummy: {
    fontSize: 20,
    padding: 15,
    backgroundColor: '#F5FCFF',
  },
})

export default class DumbComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  handlePress(e) {
    this.props.test('Success! This action flowed through Redux.')
  }

  render() {
    return(
      <TouchableHighlight onPress={this.handlePress.bind(this)}>
        <Text style={styles.dummy}>
          {this.props.foo}
        </Text>
      </TouchableHighlight>
    )
  }

}


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
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
})

export default class UserComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  handlePress(e) {
    this.props.getUser()
  }

  handleLogin(e) {
    // this should be some user who exists in your Parse app
    // obviously in a real application you'd take this from
    // user input
    this.props.login('a@p.co', 'pass')
  }

  handleLogout(e) {
    this.props.logout()
  }

  render() {
    return(
      <View>
        {this.props.user &&
          <TouchableHighlight onPress={this.handlePress.bind(this)}>
            <Text style={styles.dummy}>
              {this.props.user.fullName} is logged in!
            </Text>
          </TouchableHighlight>
        }
        <TouchableHighlight onPress={this.handleLogin.bind(this)}>
          <Text style={styles.dummy}>
            Log in
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handleLogout.bind(this)}>
          <Text style={styles.dummy}>
            Log out
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

}


import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

import Logo from './Logo';
import LoginPanel from './LoginPanel';

class Homepage extends Component {
  state = {
    logoAnimation: false
  };

  showLogin() {
    this.setState({
      logoAnimation: true
    });
  }

  render() {
    console.log(this.props);
    return (
      <ScrollView>
        <View style={styles.container}>
          <Logo
            showLogin={this.showLogin.bind(this)}
          />
          <LoginPanel
            show={this.state.logoAnimation} navigator={this.props.navigator}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  }
})

export default Homepage;

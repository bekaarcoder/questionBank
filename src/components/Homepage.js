import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import {Spinner} from './common';
import Logo from './Logo';
import LoginPanel from './LoginPanel';
import {getTokens} from './utils/tokens';

class Homepage extends Component {
  state = {
    logoAnimation: false,
    loading: true
  };

  componentDidMount() {
    getTokens((tokens) => {
      if(tokens[0][1] === null) {
        this.setState({
          loading: false
        });
      }
    });
  }

  showLogin() {
    this.setState({
      logoAnimation: true
    });
  }

  render() {
    if(this.state.loading) {
      return (
        <Spinner />
      );
    }

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

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import {Spinner} from './common';
import Logo from './Logo';
import LoginPanel from './LoginPanel';
import {getTokens} from './utils/tokens';
import {autoSignIn} from './Store/actions/userActions';
import LoadMainApp from './MainApp';

class Homepage extends Component {
  state = {
    logoAnimation: false,
    loading: true
  };

  componentDidMount() {
    console.log("Component Mount");
    getTokens((tokens) => {
      if(tokens[0][1] === null) {
        this.setState({
          loading: false
        });
      } else {
        this.props.autoSignIn(tokens[1][1]);
      }
    });
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state.loading);
    const {refreshToken} = props.userData;
    if(refreshToken !== null) {
      LoadMainApp();
      return {
        loading: true
      }
    }
    return null;
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

const mapStateToProps = (state) => ({
  userData: state.user
});

export default connect(mapStateToProps, {autoSignIn})(Homepage);

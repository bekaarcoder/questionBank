import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {Input, Button} from './common';

class Register extends Component {
  state = {
    hasErrors: false,
    form: {
      email: {
        type: 'textinput',
        value: ''
      },
      password: {
        type: 'textinput',
        value: ''
      },
      confirmPassword: {
        type: 'textinput',
        value: ''
      }
    }
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;
    this.setState({
      form: formCopy
    });
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Register</Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            placeholder="Enter Your Email"
            type={this.state.form.email.type}
            value={this.state.form.email.value}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={(value) => this.updateInput('email', value)}
          />
          <Input
            placeholder="Enter Your Password"
            type={this.state.form.password.type}
            value={this.state.form.password.value}
            onChangeText={(value) => this.updateInput('password', value)}
            secureTextEntry
          />
          <Input
            placeholder="Confirm Your Password"
            type={this.state.form.confirmPassword.type}
            value={this.state.form.confirmPassword.value}
            onChangeText={(value) => this.updateInput('confirmPassword', value)}
            secureTextEntry
          />
          <Button overrideStyle={{marginTop: 20}}>
            SUBMIT
          </Button>
          <TouchableOpacity onPress={() => this.props.navigator.pop({})}>
            <Text style={styles.backText}>Go Back To Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  header: {
    marginTop: 50,
    fontSize: 40,
    color: '#17a2b8',
    fontFamily: 'RobotoCondensed-Regular'
  },
  formContainer: {
    marginTop: 30
  },
  backText: {
    alignSelf: 'center',
    color: '#868e96',
    fontSize: 18,
    fontFamily: 'RobotoCondensed-Regular',
    marginTop: 20
  }
})

export default Register;
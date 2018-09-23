import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import Input from './common/Input';

class LoginForm extends Component {
  state = {
    form: {
      email: {
        type: "textinput",
        value: '',
      },
      password: {
        type: "textinput",
        value: ''
      }
    }
  };

  render() {
    return (
      <View style={styles.formContainer}>
        <Input
          placeholder="Enter your email"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          onChangeText={(value) => alert("something")}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />
        <Input
          placeholder="Enter your email"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          onChangeText={(value) => alert("something")}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    minHeight: 400
  }
})

export default LoginForm;

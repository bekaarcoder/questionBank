import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing, TouchableOpacity } from 'react-native';
import Input from './common/Input';
import Button from './common/Button';
import LoadMainApp from '../components/MainApp';

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

  updateInput = (name, value) => {
    let formCopy = this.state.form;
    formCopy[name].value = value;
    this.setState({
      form: formCopy
    });
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.formContainer}>
        <Input
          placeholder="Enter your email"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          onChangeText={(value) => this.updateInput("email", value)}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />
        <Input
          placeholder="Enter your password"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={(value) => this.updateInput("password", value)}
          secureTextEntry
        />
        <Button overrideStyle={{marginTop: 20}} onPress={() => alert('login')}>
          LOGIN
        </Button>
        <Button
          overrideStyle={{marginTop: 30, backgroundColor: '#17a2b8', width: 200}}
          onPress={() => alert('register')}>
          I NEED TO REGISTER
        </Button>
        <TouchableOpacity onPress={() => LoadMainApp()}>
          <Text style={styles.skipText}>Skip. I'll do it later</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    minHeight: 450
  },
  skipText: {
    alignSelf: 'center',
    color: '#868e96',
    fontSize: 18,
    fontFamily: 'RobotoCondensed-Regular',
    marginTop: 20
  }
})

export default LoginForm;

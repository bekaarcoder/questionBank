import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {Input, Button} from './common';
import LoadMainApp from '../components/MainApp';
import ValidationRules from './utils/forms/ValidationRules';
import {loginUser} from './Store/actions/userActions';

class LoginForm extends Component {
  state = {
    hasErrors: false,
    form: {
      email: {
        type: "textinput",
        value: '',
        valid: true,
        rules: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        type: "textinput",
        value: '',
        valid: true,
        rules: {
          isRequired: true,
          minLength: 6
        }
      }
    }
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    let rules = formCopy[name].rules;
    let valid = ValidationRules(value, rules, formCopy);
    formCopy[name].valid = valid;

    this.setState({
      form: formCopy
    });
  }

  submitForm = () => {
    const {email, password} = this.state.form;
    let formData;
    if(email.value === '' || !email.valid) {
      this.setState({hasErrors: true});
    } else if(password.value === '' || !password.valid) {
      this.setState({hasErrors: true});
    } else {
      formData = {
        email: email.value,
        password: password.value
      }
      this.props.loginUser(formData);
    }
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
          overrideStyle={!this.state.form.email.valid && {borderBottomColor: '#dc3545'}}
        />
        <Input
          placeholder="Enter your password"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={(value) => this.updateInput("password", value)}
          overrideStyle={!this.state.form.password.valid && {borderBottomColor: '#dc3545'}}
          secureTextEntry
        />
        {this.state.hasErrors && (
          <Text style={styles.errorText}>Please enter valid data in the above fields.</Text>
        )}
        <Button overrideStyle={{marginTop: 20}} onPress={() => this.submitForm()}>
          LOGIN
        </Button>
        <Button
          overrideStyle={{marginTop: 30, backgroundColor: '#17a2b8', width: 200}}
          onPress={() => {
            this.props.navigator.push({
              screen: "questionBank.RegisterScreen",
              title: "Register",
              navigatorStyle: {
                navBarHidden: true
              }
            })
          }}>
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
  },
  errorText: {
    alignSelf: 'center',
    color: '#dc3545',
    fontSize: 16,
    fontFamily: 'RobotoCondensed-Regular',
    marginTop: 10,
    marginBottom: 10
  }
})

export default connect(null, {loginUser})(LoginForm);

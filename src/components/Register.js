import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {Input, Button} from './common';
import ValidationRules from './utils/forms/ValidationRules';
import {signUpUser, clearError} from './Store/actions/userActions';

class Register extends Component {
  state = {
    hasErrors: false,
    form: {
      email: {
        type: 'textinput',
        value: '',
        valid: true,
        rules: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        type: 'textinput',
        value: '',
        valid: true,
        rules: {
          isRequired: true,
          minLength: 6
        }
      },
      confirmPassword: {
        type: 'textinput',
        value: '',
        valid: true,
        rules: {
          isRequired: true,
          confirmPass: "password"
        }
      }
    },
    error: '',
    loading: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("Derived state Register", props, state);
    if(props.error.error !== null) {
      return {
        error: props.error.error,
        loading: false
      }
    }
    return { error: '' };
  }

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
  };

  submitForm = () => {
    this.props.clearError();
    this.setState({
      loading: true
    });
    const {email, password, confirmPassword} = this.state.form;
    let formData;
    if(email.value === '' || !email.valid) {
      this.setState({hasErrors: true, loading: false});
    } else if(password.value === '' || !password.valid) {
      this.setState({hasErrors: true, loading: false});
    } else if(confirmPassword.value === '' || !confirmPassword.valid) {
      this.setState({hasErrors: true, loading: false});
    } else {
      formData = {
        email: email.value,
        password: password.value
      }
      this.props.signUpUser(formData);
    }
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
            overrideStyle={!this.state.form.email.valid && {borderBottomColor: '#dc3545'}}
          />
          <Input
            placeholder="Enter Your Password"
            type={this.state.form.password.type}
            value={this.state.form.password.value}
            onChangeText={(value) => this.updateInput('password', value)}
            overrideStyle={!this.state.form.password.valid && {borderBottomColor: '#dc3545'}}
            secureTextEntry
          />
          <Input
            placeholder="Confirm Your Password"
            type={this.state.form.confirmPassword.type}
            value={this.state.form.confirmPassword.value}
            onChangeText={(value) => this.updateInput('confirmPassword', value)}
            overrideStyle={!this.state.form.confirmPassword.valid && {borderBottomColor: '#dc3545'}}
            secureTextEntry
          />
          {this.state.hasErrors && (
            <Text style={styles.errorText}>Please enter valid data in the above fields.</Text>
          )}
          {this.state.error !== '' && (
            <Text style={styles.errorText}>{this.state.error}</Text>
          )}
          <Button
            overrideStyle={this.state.loading ? {marginTop: 20, backgroundColor: 'grey'} : {marginTop: 20}}
            onPress={() => this.submitForm()}
          >
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
  },
  errorText: {
    alignSelf: 'center',
    color: '#dc3545',
    fontSize: 16,
    fontFamily: 'RobotoCondensed-Regular',
    marginTop: 10,
    marginBottom: 10
  }
});

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error
});

export default connect(mapStateToProps, {signUpUser, clearError})(Register);
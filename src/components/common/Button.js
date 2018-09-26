import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={[styles.buttonStyle, props.overrideStyle]} onPress={props.onPress}>
      <Text style={styles.textStyle} >{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
    width: 150,
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 2
  },
  textStyle: {
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
    fontFamily: 'RobotoCondensed-Regular'
  }
})

export default Button;

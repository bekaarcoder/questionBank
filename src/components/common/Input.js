import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';

const width = Dimensions.get('window').width - 50;

const Input = (props) => {
  let template = null;
  switch(props.type) {
    case "textinput":
      return (
        template = (
          <TextInput
            underlineColorAndroid="transparent"
            {...props}
            style={[styles.inputStyle, props.overrideStyle]}
          />
        )
      );
      break;
    default:
      return template;
  }
  return (
    <View style={styles.inputContainer}>
      {template}
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch'
  },
  inputStyle: {
    width: width,
    borderBottomWidth: 2,
    borderBottomColor: "#EAEAEA",
    fontSize: 18,
    padding: 5,
    marginTop: 10
  }
})

export default Input;

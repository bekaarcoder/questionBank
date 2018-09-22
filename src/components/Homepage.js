import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

class Homepage extends Component {
  render() {
    return (
      <View>
        <Text>This is homepage</Text>
        <Button
          title="Go To Questions"
          onPress={() => {
            this.props.navigator.push({
              screen: "questionBank.QuestionScreen",
              title: "Questions"
            })
          }}
        />
      </View>
    )
  }
}

export default Homepage;

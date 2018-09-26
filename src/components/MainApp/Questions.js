import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {Card, CardSection} from '../common';

class Questions extends Component {
  state = {
    list: ['HTML', 'CSS', 'JavaScript']
  };

  onItemPress = (item) => {
    this.props.navigator.push({
      screen: "questionBank.QuestionList",
      title: item,
      passProps: {
        param: item.toLowerCase()
      }
    });
  }

  render() {
    const {list} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          {list.map((listItem) => (
            <Card>
              <CardSection>
                <Text onPress={() => this.onItemPress(listItem)}>{listItem}</Text>
              </CardSection>
            </Card>
          ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Questions;

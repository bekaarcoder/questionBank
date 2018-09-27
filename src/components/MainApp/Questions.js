import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CategoryListItem from './CategoryListItem';
import html5 from '../../assets/images/html5.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.jpg';

class Questions extends Component {
  state = {
    list: [
      {
        category: "HTML",
        image: html5
      },
      {
        category: "CSS",
        image: css
      },
      {
        category: "JavaScript",
        image: js
      }
    ]
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
            <CategoryListItem category={listItem} onCategoryPress={() => this.onItemPress(listItem.category)} />
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

import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import {Card, CardSection} from '../common';

class CategoryListItem extends Component {
  render() {
    const {category, image}  = this.props.category;
    return (
      <TouchableWithoutFeedback onPress={this.props.onCategoryPress}>
        <View>
          <Card>
            <CardSection>
              <Image source={image} style={styles.imageStyle} />
            </CardSection>
            <CardSection>
              <Text style={styles.textStyle}>{category}</Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    color: '#000000',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'RobotoCondensed-Regular'
  },
  imageStyle: {
    height: 150,
    flex: 1,
    width: null
  }
})

export default CategoryListItem;

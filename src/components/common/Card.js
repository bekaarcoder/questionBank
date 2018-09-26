import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 2,
    borderColor: '#CCCCCC',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderBottomWidth: 0
  }
})

export {Card};

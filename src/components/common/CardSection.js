import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.cardSectionStyle}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cardSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    padding: 5,
    backgroundColor: '#FFFFFF'
  }
})

export {CardSection};

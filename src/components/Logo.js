import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';

class Logo extends Component {
  state = {
    questionAnime: new Animated.Value(0),
    bankAnime: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.questionAnime, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOutCubic
      }),
      Animated.timing(this.state.bankAnime, {
        toValue: 1,
        duration: 500,
        easing: Easing.easeOutCubic
      })
    ]).start(() => {
      this.props.showLogin();
    })
  }

  render() {
    return (
      <View>
        <View style={styles.logo}>
          <Animated.View style={{
            opacity: this.state.questionAnime,
            top: this.state.questionAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0]
            })
          }}>
            <Text style={styles.question}>Question</Text>
          </Animated.View>
          <Animated.View style={{
            opacity: this.state.bankAnime
          }}>
            <Text style={styles.bank}>Bank</Text>
          </Animated.View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 100
  },
  question: {
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    color: '#868e96'
  },
  bank: {
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    color: '#007bff',
    marginLeft: 5
  }
})

export default Logo;

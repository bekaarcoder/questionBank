import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing, Image } from 'react-native';

import BackImage from '../assets/images/splashImage.png';
import LoginForm from './LoginForm';

class LoginPanel extends Component {
  state = {
    animeFinish: false,
    backImage: new Animated.Value(0),
    inputForm: new Animated.Value(0)
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.show && !this.state.animeFinish) {
      Animated.parallel([
        Animated.timing(this.state.backImage, {
          toValue: 1,
          duration: 1000
        }),
        Animated.timing(this.state.inputForm, {
          toValue: 1,
          duration: 1500
        })
      ]).start(() => {
        this.setState({animeFinish: true});
      })
    }
  }

  render() {
    return (
      <View>
        <View style={styles.imageContainer}>
          <Animated.View style={{
            opacity: this.state.backImage
          }}>
            <Image
              style={styles.imageStyle}
              source={BackImage}
              resizeMode={'contain'}
            />
          </Animated.View>
        </View>
        <View  style={styles.formStyleContainer}>
          <Animated.View style={{
            opacity: this.state.inputForm,
            top: this.state.inputForm.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0]
            })
          }}>
            <LoginForm />
          </Animated.View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center'
  },
  imageStyle: {
    width: 150,
    height: 150
  },
  formStyleContainer: {
    marginTop: 30
  }
});

export default LoginPanel;
import {Navigation} from 'react-native-navigation';
import configureStore from './components/Store/config';
import {Provider} from 'react-redux';

import HomeScreen from './components/Homepage';
import RegisterScreen from './components/Register';

const store = configureStore();

Navigation.registerComponent("questionBank.HomeScreen", () => HomeScreen, store, Provider);
Navigation.registerComponent("questionBank.RegisterScreen", () => RegisterScreen, store, Provider);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "questionBank.HomeScreen",
    title: "Home",
    navigatorStyle: {
      navBarHidden: true
    }
  }
});
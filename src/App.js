import {Navigation} from 'react-native-navigation';
import configureStore from './components/Store/config';
import {Provider} from 'react-redux';

import HomeScreen from './components/Homepage';
import QuestionScreen from './components/Questions';

const store = configureStore();

Navigation.registerComponent("questionBank.HomeScreen", () => HomeScreen, store, Provider);
Navigation.registerComponent("questionBank.QuestionScreen", () => QuestionScreen, store, Provider);

export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "questionBank.HomeScreen",
    title: "Home",
    navigatorStyle: {
      navBarHidden: true
    }
  }
});
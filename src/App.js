import {Navigation} from 'react-native-navigation';

import HomeScreen from './components/Homepage';
import QuestionScreen from './components/Questions';

Navigation.registerComponent("questionBank.HomeScreen", () => HomeScreen);
Navigation.registerComponent("questionBank.QuestionScreen", () => QuestionScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "questionBank.HomeScreen",
    title: "Home"
  }
});
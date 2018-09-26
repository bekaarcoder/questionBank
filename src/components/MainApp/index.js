import {Navigation} from 'react-native-navigation';
import configureStore from '../Store/config';
import {Provider} from 'react-redux';
import QuestionScreen from './Questions';
import QuestionList from './QuestionList';

const store = configureStore();

Navigation.registerComponent("questionBank.QuestionScreen", () => QuestionScreen, store, Provider);
Navigation.registerComponent("questionBank.QuestionList", () => QuestionList, store, Provider);

const MainApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "questionBank.QuestionScreen",
      title: "Question Bank"
    }
  })
}

export default MainApp;
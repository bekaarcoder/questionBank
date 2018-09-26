import {combineReducers} from 'redux';
import User from './UserReducer';
import QuestionReducer from './QuestionReducer';

const rootReducer = combineReducers({
  user: User,
  questions: QuestionReducer
});

export default rootReducer;
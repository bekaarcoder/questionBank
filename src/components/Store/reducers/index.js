import {combineReducers} from 'redux';
import User from './UserReducer';
import QuestionReducer from './QuestionReducer';
import SelectReducer from './SelectReducer';

const rootReducer = combineReducers({
  user: User,
  questions: QuestionReducer,
  selectedItem: SelectReducer
});

export default rootReducer;
import {combineReducers} from 'redux';
import User from './UserReducer';
import QuestionReducer from './QuestionReducer';
import SelectReducer from './SelectReducer';
import ErrorReducer from './ErrorReducer';

const rootReducer = combineReducers({
  user: User,
  questions: QuestionReducer,
  selectedItem: SelectReducer,
  error: ErrorReducer
});

export default rootReducer;
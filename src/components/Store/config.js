import {createStore, compose, applyMiddleware} from 'redux';
// import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

let reduxCompose = compose;
if(__DEV__) {
  reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
}

const configureStore = () => {
  return createStore(Reducers, applyMiddleware(ReduxThunk));
}

export default configureStore;
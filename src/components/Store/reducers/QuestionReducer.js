import {LIST_FETCH_SUCCESS} from '../actions/types';

const initial_state = {};

export default (state = initial_state, action) => {
  console.log(action);
  switch(action.type) {
    case LIST_FETCH_SUCCESS:
      return action.payload
    default:
      return state;
  }
}
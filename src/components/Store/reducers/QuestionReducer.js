import {LIST_FETCH_SUCCESS, GET_ERROR} from '../actions/types';

const initial_state = {};

export default (state = initial_state, action) => {
  console.log(action);
  switch(action.type) {
    case LIST_FETCH_SUCCESS:
      return action.payload
    case GET_ERROR:
      return initial_state;
    default:
      return state;
  }
}
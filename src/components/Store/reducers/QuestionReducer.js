import {LIST_FETCH_SUCCESS, GET_ERROR, SHOW_LOADER} from '../actions/types';

const initial_state = {
  questions: null,
  loading: false
};

export default (state = initial_state, action) => {
  console.log(action);
  switch(action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      }
    case LIST_FETCH_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      }
    case GET_ERROR:
      return initial_state;
    default:
      return state;
  }
}
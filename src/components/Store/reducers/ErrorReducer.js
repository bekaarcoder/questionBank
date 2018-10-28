import { SET_ERROR, CLEAR_ERROR } from "../actions/types";

const initial_state = {
  error: null
};

export default (state = initial_state, action) => {
  switch(action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_ERROR:
      return initial_state;
    default:
      return state
  }
}
import { SELECT_ITEM, DESELECT_ITEM } from "../actions/types";

const initial_state = null;

export default(state = initial_state, action) => {
  switch(action.type) {
    case SELECT_ITEM:
      return action.payload;
    case DESELECT_ITEM:
      return initial_state;
    default:
      return state;
  }
}
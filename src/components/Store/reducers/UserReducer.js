import { REGISTER_USER, LOGIN_USER } from "../actions/types";

const initial_state = {
  uid: null,
  tokenId: null,
  refreshToken: null
};

export default (state = initial_state, action) => {
  console.log(action);
  switch(action.type) {
    case REGISTER_USER:
      return {
        ...state,
        uid: action.payload.localId,
        tokenId: action.payload.idToken,
        refreshToken: action.payload.refreshToken
      };
    case LOGIN_USER:
      return {
        ...state,
        uid: action.payload.localId,
        tokenId: action.payload.idToken,
        refreshToken: action.payload.refreshToken
      };
    default:
      return state;
  }
}
import { REGISTER_USER, LOGIN_USER, AUTO_LOGIN } from "../actions/types";

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
    case AUTO_LOGIN:
      return {
        ...state,
        uid: action.payload.user_id,
        tokenId: action.payload.id_token,
        refreshToken: action.payload.refresh_token
      }
    default:
      return state;
  }
}
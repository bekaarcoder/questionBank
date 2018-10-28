import {REGISTER_USER, LOGIN_USER, AUTO_LOGIN, SET_ERROR, CLEAR_ERROR} from './types';
import axios from 'axios';
import {signup, login, refresh} from '../../utils/api/api';
import LoadMainApp from '../../MainApp';
import {setTokens} from '../../utils/tokens';

export const signUpUser = ({email, password}) => {
  return(dispatch) => {
    axios.post(signup, {
      email,
      password,
      returnSecureToken: true
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: REGISTER_USER,
        payload: response.data
      });
      setTokens(response.data, () => console.log("'token stored"));
      LoadMainApp();
    }).catch((err) => {
      let error = err.response.data;
      console.log(error.error.message);
      let errMessage = error.error.message;
      if(errMessage === 'EMAIL_EXISTS') {
        dispatch({
          type: SET_ERROR,
          payload: "Account already exists with this email."
        });
      }
    });
  }
};

export const loginUser = ({email, password}) => {
  return(dispatch) => {
    axios.post(login, {
      email,
      password,
      returnSecureToken: true
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: LOGIN_USER,
        payload: response.data
      });
      setTokens(response.data, () => console.log('token stored'));
      LoadMainApp();
    }).catch((err) => {
      let error = err.response.data;
      console.log(error.error.message);
      let errMessage = error.error.message;
      if(errMessage === 'EMAIL_NOT_FOUND') {
        dispatch({
          type: SET_ERROR,
          payload: "Email Address is invalid"
        });
      } else if(errMessage === 'INVALID_PASSWORD') {
        dispatch({
          type: SET_ERROR,
          payload: "Password is incorrect"
        });
      }
    })
  }
};

export const autoSignIn = (refToken) => {
  return(dispatch) => {
    axios({
      method: 'post',
      url: refresh,
      data: `grant_type=refresh_token&refresh_token=${refToken}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((response) => {
      console.log(response.data);
      dispatch({
        type: AUTO_LOGIN,
        payload: response.data
      });
    }).catch((error) => {
      console.log(error.response.data);
    });
  }
}

export const clearError = () => {
  return(dispatch) => {
    dispatch({
      type: CLEAR_ERROR
    })
  }
}
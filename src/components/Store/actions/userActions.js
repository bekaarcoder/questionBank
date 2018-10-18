import {REGISTER_USER, LOGIN_USER} from './types';
import axios from 'axios';
import {signup, login} from '../../utils/api/api';

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
      })
    }).catch((error) => {
      console.log(error.response.data);
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
    }).catch((error) => {
      console.log(error.response.data);
    })
  }
}
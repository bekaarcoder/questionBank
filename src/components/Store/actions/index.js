import {LIST_FETCH_SUCCESS} from './types';
import axios from 'axios';

export const fetchQuestions = (param) => {
  return (dispatch) => {
    axios.get(`https://agile-sea-21994.herokuapp.com/${param}`)
      .then((res) => {
        dispatch({
          type: LIST_FETCH_SUCCESS,
          payload: res.data
        });
      });
  }
}
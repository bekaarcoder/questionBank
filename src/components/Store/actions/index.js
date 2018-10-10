import {LIST_FETCH_SUCCESS, GET_ERROR, SELECT_ITEM, DESELECT_ITEM, SHOW_LOADER} from './types';
import axios from 'axios';

export const fetchQuestions = (param) => {
  return (dispatch) => {
    dispatch(displayLoader());
    axios.get(`https://agile-sea-21994.herokuapp.com/${param}`)
      .then((res) => {
        dispatch({
          type: LIST_FETCH_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => dispatch({
        type: GET_ERROR
      }));
  }
};

export const selectItem = (id) => {
  return {
    type: SELECT_ITEM,
    payload: id
  }
};

export const deselectItem = () => {
  return {
    type: DESELECT_ITEM
  }
};

export const displayLoader = () => {
  return {
    type: SHOW_LOADER
  };
};
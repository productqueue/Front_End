import axios from 'axios';
import {URL, user_id} from '../constants';

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

// Update Ifo
export const updateInfo = (API) => dispatch => {
    dispatch({ type: UPDATE_START });
    return axios
      .put(`${URL}/api/${API}/${user_id}`)
      .then(res => {
        localStorage.setItem("data", JSON.stringify(res.data))
        dispatch({ type: UPDATE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: UPDATE_FAILURE, payload: err });
      });
  };
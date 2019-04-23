import axios from 'axios';
import {URL, user_id} from '../constants';

export const READ_START = "READ_START";
export const READ_SUCCESS = "READ_SUCCESS";
export const READ_FAILURE = "READ_FAILURE";


// Read info
export const readInfo = (API) => dispatch => {
    dispatch({ type: READ_START });
    return axios
      .get(`${URL}/api/${API}/${user_id}`)
      .then(res => {
        localStorage.setItem("data", JSON.stringify(res.data))
        dispatch({ type: READ_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: READ_FAILURE, payload: err });
      });
  };


import axios from 'axios'
import {URL, user_id} from '../constants';

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

// Delete Info
export const deleteInfo = (API) => dispatch => {
    dispatch({ type: DELETE_START });
    return axios
      .delete(`${URL}/api/${API}/${user_id}`)
      .then(res => {
        localStorage.setItem("data", JSON.stringify(res.data))
        dispatch({ type: DELETE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: DELETE_FAILURE, payload: err });
      });
  };


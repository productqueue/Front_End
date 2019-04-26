import axios from 'axios';
import {URL} from '../constants'

//Exports
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_FAILURE = "CREATE_FAILURE";


// Create Info
export const createInfo = (newInfo, data, token) => dispatch => {
    dispatch({ type: CREATE_START });
    return axios
      .post(`${URL}/api/projects/${data.id}`, JSON.stringify(newInfo), {
        headers: { Authorization: token, "Content-Type": "application/json" }
      })
      .then(res => {
        dispatch({ type: CREATE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: CREATE_FAILURE, payload: err });
      });
  };

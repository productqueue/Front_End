import axios from 'axios';
import {URL, user_id} from '../constants'

//Exports
export const CREATE_START = "CREATE_START";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_FAILURE = "CREATE_FAILURE";


// Create Info
export const createInfo = (API) => dispatch => {
    dispatch({ type: CREATE_START });
    return axios
      .post(`${URL}/api/${API}/${user_id}`)
      .then(res => {
        localStorage.setItem("data", JSON.stringify(res.data))
        dispatch({ type: CREATE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: CREATE_FAILURE, payload: err });
      });
  };

import axios from 'axios';
import {URL, user_id} from '../constants';


export const READ_START = "READ_START";
export const READ_SUCCESS = "READ_SUCCESS";
export const READ_FAILURE = "READ_FAILURE";


// Read info
export const readInfo = (token) => dispatch => {
    dispatch({ type: READ_START });
    console.log("token info", token)
    return axios
      .get(`${URL}/api/projects/`, token)
      .then(res => {
        console.log("redInfo Action",res)
        localStorage.setItem("data", JSON.stringify(res.data))
        dispatch({ type: READ_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: READ_FAILURE, payload: err });
      });
  };

// Read info
export const readUserInfo = () => dispatch => {
  dispatch({ type: READ_START });
  return axios
    .get(`${URL}/api/projects/${user_id}`)
    .then(res => {
      console.log("redInfo Action",res)
      localStorage.setItem("data", JSON.stringify(res.data))
      dispatch({ type: READ_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: READ_FAILURE, payload: err });
    });
};
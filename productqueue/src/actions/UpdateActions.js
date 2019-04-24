import axios from 'axios';
import {URL} from '../constants';

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

// Update Info
export const updateInfo = (data, token) => dispatch => {
    dispatch({ type: UPDATE_START });
    return axios
      .put(`${URL}/api/users/${data.id}`,{
        headers: {'Authorization': token}
      })
      .then(res => {
        localStorage.setItem("data", JSON.stringify(res.data))
        dispatch({ type: UPDATE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: UPDATE_FAILURE, payload: err });
      });
  };
  
  // Update User Info
export const updateUserInfo = (data, token) => dispatch => {
  dispatch({ type: UPDATE_START });
  return axios
    .put(`${URL}/api/users/${data.id}`, data, {
      headers: {'Authorization': token}
    })
    .then(res => {
      localStorage.setItem("data", JSON.stringify(res.data))
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_FAILURE, payload: err });
    });
};
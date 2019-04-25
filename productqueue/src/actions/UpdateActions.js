import axios from 'axios';
import {URL} from '../constants';

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

// Update Info
export const updateProjectInfo = (data, newInfo, token) => dispatch => {
    dispatch({ type: UPDATE_START });
    return axios
      .put(`${URL}/api/projects/${data.id}/${newInfo.id}`, newInfo, {
        headers: {'Authorization': token}
      })
      .then(res => {
        dispatch({ type: UPDATE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: UPDATE_FAILURE, payload: err });
      });
  };
  
  // Update User Info
export const updateUserInfo = (newInfo, token) => dispatch => {
  dispatch({ type: UPDATE_START });
  return axios
    .put(`${URL}/api/users/${newInfo.id}`, newInfo, {
      headers: {'Authorization': token}
    })
    .then(res => {
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_FAILURE, payload: err });
    });
};
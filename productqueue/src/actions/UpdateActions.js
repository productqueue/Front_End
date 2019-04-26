import axios from 'axios';
import {URL} from '../constants';

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

// Update Info
export const updateProjectInfo = (userId, newInfo, token) => dispatch => {
    dispatch({ type: UPDATE_START });
    console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSS',userId)
    console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTT',newInfo)
    console.log('JJJJJJJJJJJJJJJJJJJJJJJJJJJ',token)
    return axios
      .put(`${URL}/api/projects/${userId}/${newInfo.id}`, JSON.stringify(newInfo), {
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
export const updateUserInfo = (newInfo, token, user) => dispatch => {
  dispatch({ type: UPDATE_START });
  console.log("newInfo", newInfo);
  console.log('token', token)
  console.log('data', user.id)
  return axios
    .put(`${URL}/api/users/${user.id}`, newInfo, {
      headers: {'Authorization': token}
    })
    .then(res => {
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_FAILURE, payload: err });
    });
};
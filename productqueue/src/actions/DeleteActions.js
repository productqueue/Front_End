import axios from 'axios'
import {URL} from '../constants';

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

// Delete Info
export const deleteInfo = (user_id, project_id, token) => dispatch => {
    dispatch({ type: DELETE_START });
    return axios
      .delete(`${URL}/api/projects/${user_id}/${project_id}`,{
        headers: { Authorization: token, "Content-Type": "application/json" }
      })
      .then(res => {
        localStorage.setItem("data", JSON.stringify(res.data))
        dispatch({ type: DELETE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: DELETE_FAILURE, payload: err });
      });
  };


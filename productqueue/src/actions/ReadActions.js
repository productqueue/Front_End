import axios from "axios";
import { URL } from "../constants";

export const READ_START = "READ_START";
export const READ_SUCCESS = "READ_SUCCESS";
export const READ_FAILURE = "READ_FAILURE";

// Read info
export const readInfo = token => dispatch => {
  dispatch({ type: READ_START });
  console.log("my token", token);
  return axios
    .get(`${URL}/api/projects`, {
      headers: { Authorization: token, "Content-Type": "application/json" }
    })
    .then(res => {
      console.log("readInfo Action", res);
      // localStorage.setItem("data", res.data);
      dispatch({ type: READ_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: READ_FAILURE, payload: err });
    });
};

// Read info
export const readUserInfo = (data, token) => dispatch => {
  dispatch({ type: READ_START });
  return axios
    .get(`${URL}/api/projects/${data}`,{
      headers: { Authorization: token, "Content-Type": "application/json" }
    })
    .then(res => {
      console.log("redInfo Action", res);
      localStorage.setItem("data", JSON.stringify(res.data));
      dispatch({ type: READ_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: READ_FAILURE, payload: err });
    });
};

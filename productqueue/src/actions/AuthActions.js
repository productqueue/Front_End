import axios from 'axios'
import {URL} from '../constants';

//Exports

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// Register New User

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START })
  return axios
    .post(`${URL}/api/users/register`, creds)
    .then(res => {
      
      localStorage.setItem('token', res.data.token)
      dispatch({ type: REGISTER_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err })
    })
}

// Login User

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START })
  return axios
    .post(`${URL}/api/users/login`, creds)
    .then(res => {
      console.log("XXXXXXXXXX",res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem("user_id", res.data.id)
      localStorage.setItem('data', JSON.stringify(res.data))
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}

// Logout User

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_START })
  localStorage.removeItem('token')
  localStorage.removeItem('user_id')
  localStorage.removeItem('data')
  console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
  dispatch({ type: LOGOUT_SUCCESS })
  window.location.reload()
}
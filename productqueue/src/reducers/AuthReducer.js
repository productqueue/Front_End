import {REGISTER_START,
REGISTER_SUCCESS,
REGISTER_FAILURE,
LOGIN_START,
LOGIN_SUCCESS,
LOGIN_FAILURE,
LOGOUT_START,
LOGOUT_SUCCESS} from '../actions';

const initialState = {
    user: {},
    error: null,
    loggingIn: false,
    registering: false,
    isLoggedIn: false,
    updatingUser: false,
  }
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_START:
        return {
          ...state,
          error: '',
          registering: true
        }
      case REGISTER_SUCCESS:
        return {
          ...state,
          error: '',
          registering: false
        }
      case REGISTER_FAILURE:
        return {
          ...state,
          error: action.payload,
          registering: false
        }
      case LOGIN_START:
        return {
          ...state,
          error: '',
          loggingIn: true,
          isLoggedIn: false
        }
      case LOGIN_SUCCESS:
        return {
          ...state,
          error: '',
          loggingIn: false,
          user: action.payload,
          isLoggedIn: true
        }
      case LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
          loggingIn: false,
          isLoggedIn: false
        }
      case LOGOUT_START:
        return {
          ...state,
          loggingOut: true,
          error: ''
        }
      case LOGOUT_SUCCESS:
        return {
          ...state,
          loggingOut: false,
          error: '',
          user: {},
          isLoggedIn: false
        }
        default:
      return state;
      }
    }
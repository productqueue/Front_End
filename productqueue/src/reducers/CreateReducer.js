import * as actionTypes from '../actions';

const initialState = {
  info: [],
  creatingInfo: false,
  error: null
};

export const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_START:
      return {
        ...state,
        creatingInfo: true
      };
    case actionTypes.CREATE_SUCCESS:
      return {
        ...state,
        info: action.payload,
        creatingInfo: false,
      };
    case actionTypes.CREATE_FAILURE:
      return {
        ...state,
        creatingInfo: false,
        error: action.payload
      };
    default:
      return state;
  }
};
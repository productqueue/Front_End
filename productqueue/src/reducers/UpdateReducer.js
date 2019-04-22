import * as actionTypes from '../actions';

const initialState = {
  info: [],
  updatingInfo: false,
  error: null
};

export const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_START:
      return {
        ...state,
        updatingInfo: true,
      };
    case actionTypes.UPDATE_SUCCESS:
      return {
        ...state,
        info: action.payload,
        updatingInfo: false
      };
    case actionTypes.UPDATE_FAILURE:
      return {
        ...state,
        updatingInfo: false,
        error: action.payload
      };
    default:
      return state;
  }
};
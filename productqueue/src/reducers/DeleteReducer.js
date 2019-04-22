import * as actionTypes from '../actions';

const initialState = {
  info: [],
  deletingInfo: false,
  error: null
};

export const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_START:
      return {
        ...state,
        deletingInfo: true
      };
    case actionTypes.DELETE_SUCCESS:
      return {
        ...state,
        info: action.payload,
        deletingInfo: false
      };
    case actionTypes.DELETE_FAILURE:
      return {
        ...state,
        deletingInfo: false,
        error: action.payload
      };
    default:
      return state;
  }
};
import * as actionTypes from '../actions';

const initialState = {
  info: [],
  readingInfo: false,
  error: null
};

export const readReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.READ_START:
      return {
        ...state,
        readingInfo: true,
      };
    case actionTypes.READ_SUCCESS:
      return {
        ...state,
        info: action.payload,
        readingingInfo: false,
        
      };
    case actionTypes.READ_FAILURE:
      return {
        ...state,
        readingInfo: false,
        error: action.payload
      };
    default:
      return state;
  }
};
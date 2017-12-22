import * as types from './actionTypes';

const initialState = {
  userLogin: false,
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* My Location Information
    /**************************/
    case types.USER_SIGN_OUT:
      return {
        ...state,
        userLogin: false,
      };
    case types.USER_SIGN_IN:
      return {
        ...state,
        userLogin: true,
      };
    case types.USER_SIGN_UP:
      return {
        ...state,
        userLogin: true,
      };
    default:
      return state;
  }
}
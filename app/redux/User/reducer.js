import * as types from './actionTypes';

const initialState = {
  userLogin: true,
  menuIndex: 0,
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
    case types.CHANGE_MENU:
      return {
        ...state,
        menuIndex: action.data
      }
    default:
      return state;
  }
}
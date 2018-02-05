import * as types from './actionTypes';

const initialState = {
  loading: false,
  error:null,
  userInfo: null,
  userLogin: false,
  menuIndex: 0,
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* My Location Information
    /**************************/


    /**************************/
    /* Get API Token
    /**************************/
    case types.USER_SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        userInfo: null,
      };
    case types.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        userLogin: action.result.data.errors ? false : true,
        userInfo: action.result.data,
      }
    case types.USER_SIGN_IN_FAILED:
      return {
        ...state,
        loading: false,
        userInfo: null,
        error: action.error,
      };

    case types.USER_SIGN_OUT:
      return {
        ...state,
        userLogin: false,
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
import * as types from './actionTypes';

const initialState = {
  loading: false,
  error:null,
  menuIndex: 0,

  userInfo: null,
  userLogin: false,
  
  verifyPhoneInfo: null,
  verifyCodeInfo: null,
  
  userSignupInfo: null,
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Get API Token
    /**************************/
    case types.USER_SIGN_IN_REQUEST:
      return {
        ...initialState,
        loading: true,
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

    /**************************/
    /* Verify user phone number
    /**************************/
    case types.VERIFY_PHONE_REQUEST:
    return {
      ...initialState,
      loading: true,
    };
  case types.VERIFY_PHONE_SUCCESS:
    return {
      ...state,
      loading: false,
      verifyPhoneInfo: action.result.data
    }
  case types.VERIFY_PHONE_FAILED:
    return {
      ...state,
      loading: false,
      verifyPhoneInfo: null,
    };

    /**************************/
    /* Verify phone code
    /**************************/
    case types.VERIFY_CODE_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case types.VERIFY_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        verifyCodeInfo: action.result.data
      }
    case types.VERIFY_CODE_FAILED:
      return {
        ...state,
        loading: false,
        verifyCodeInfo: null,
      };
    
    /*
      User signup
    */
    case types.USER_SIGNUP_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case types.USER_SIGNUP_SUCCESS:
      console.log('RESULT', action.result.data);
      return {
        ...state,
        loading: false,
        userSignupInfo: action.result.data
      }
    case types.USER_SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        userSignupInfo: null,
      };
    
    /*
      Suer sign out
    */
    case types.USER_SIGN_OUT:
      return {
        ...state,
        userLogin: false,
      };

    /* 
      Menu status for selected item
    */
    case types.CHANGE_MENU:
      return {
        ...state,
        menuIndex: action.data
      }
    default:
      return state;
  }
}
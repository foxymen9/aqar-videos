import * as types from './actionTypes';

export function userSignOut() {
  //Save user's current location
  return {
    type: types.USER_SIGN_OUT,
  };
}

export function userSignIn() {
  //Save user's current location
  return {
    type: types.USER_SIGN_IN,
  };
}

export function userSignUp() {
  //Save user's current location
  return {
    type: types.USER_SIGN_UP,
  };
}
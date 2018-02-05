import * as types from './actionTypes';
import { API_URL } from '@common';
import axios from 'axios';

export function userSignOut() {
  //Save user's current location
  return {
    type: types.USER_SIGN_OUT,
  };
}

export function userSignIn(data, token) {
  //Save user's current location

  return {
    types: [types.USER_SIGN_IN_REQUEST, types.USER_SIGN_IN_SUCCESS, types.USER_SIGN_IN_FAILED],
    promise:
      axios({
          method: 'post',
          url: `${API_URL}?route=api/customer/login&api_token=${token}`,
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          data: data
      })  
  };
}

export function userSignUp() {
  //Save user's current location
  return {
    type: types.USER_SIGN_UP,
  };
}

export function changeMenu(index) {
  return {
    type: types.CHANGE_MENU,
    data: index,
  }
}
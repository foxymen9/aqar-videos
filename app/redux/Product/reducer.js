import * as types from './actionTypes';

const initialState = {
  loading: null,
  error:null,

  allProduct: null,
};

export default function products(state = initialState, action = {}) {
  switch (action.type) {
    /**************************/
    /* Add product
    /**************************/
    case types.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: types.ADD_PRODUCT_REQUEST,
      };
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: types.ADD_PRODUCT_SUCCESS,
      }
    case types.ADD_PRODUCT_FAILED:
      return {
        ...state,
        loading: types.ADD_PRODUCT_FAILED,
        error: action.error,
      };
    /**************************/
    /* Get product by category
    /**************************/
    case types.GET_PRODUCT_BY_CATEGORY_REQUEST:
      return {
        ...state,
        loading: types.GET_PRODUCT_BY_CATEGORY_REQUEST,
        allProduct: null,
      };
    case types.GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: types.GET_PRODUCT_BY_CATEGORY_SUCCESS,
        allProduct: action.result.data.product,
      }
    case types.GET_PRODUCT_BY_CATEGORY_FAILED:
      return {
        ...state,
        loading: types.GET_PRODUCT_BY_CATEGORY_FAILED,
        error: action.error,
      };
    default:
      return state;
  }
}
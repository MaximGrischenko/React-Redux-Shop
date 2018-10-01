import * as types from '../actions/action-types';

const initialState = {
  products: null,
  error: '',
  isLoading: false,
  isReady: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isReady: false,
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isReady: true,
        products: action.payload.response,
      };
    case types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.id),
      };
    case types.DELETE_PRODUCTS:
      return {
        ...initialState,
      };
    case types.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    default:
      return state;
  }
}
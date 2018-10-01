import * as types from '../actions/action-types';

const initialState = {
  user: null,
  error: '',
  isLoading: false,
  isLogin: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.response,
        isLogin: true
      };
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case types.CHANGE_USER_PERMISSION:
      return {
        ...state,
        user: {
          ...state.user,
          role: action.payload.role
        }
      };
    default:
      return state;
  }
}
import * as types from '../actions/action-types';

const initialState = {
  form: {
    title: '',
    price: '',
    image: '',
    description: ''
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.STORE_FORM_FIELDS:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.prop]: action.payload.value
        }
      };
    case types.CLEAR_FORM_FIELDS:
      return {
        ...state,
        form: {
          ...state.from,
          ...initialState.form,
        }
      };
    default:
      return state;
  }
}
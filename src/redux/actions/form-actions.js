import * as types from './action-types';

export const storeFormFields = (prop, value) => ({
  type: types.STORE_FORM_FIELDS,
  payload: { prop, value }
});

export const clearFormFields = () => ({
  type: types.CLEAR_FORM_FIELDS
});
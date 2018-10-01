import axios from 'axios';
import * as types from './action-types';

const fetchProductsRequest = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const fetchProductsSuccess = (response) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: { response }
});

const fetchProductsFailure = (error) => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const deleteProduct = (id) =>({
  type: types.DELETE_PRODUCT,
  payload: { id }
});

export const deleteProducts = () => ({
  type: types.DELETE_PRODUCTS
});

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  payload: { product }
});

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest());
  axios
    .get('/data-providers/products.json')
    .then(response => dispatch(fetchProductsSuccess(response.data)))
    .catch(error => dispatch(fetchProductsFailure(error.message)))
};
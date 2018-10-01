import axios from 'axios';
import * as types from './action-types';

const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST
});

const fetchUserSuccess = (response) => ({
  type: types.FETCH_USER_SUCCESS,
  payload: { response }
});

const fetchUserFailure = (error) => ({
  type: types.FETCH_USER_FAILURE,
  payload: { error }
});

export const fetchUser = () => (dispatch) => {
  dispatch(fetchUserRequest());
  axios
    .get('/data-providers/user.json')
    .then(response => dispatch(fetchUserSuccess(response.data)))
    .catch(error => dispatch(fetchUserFailure(error.message)))
};

export const setPermission = (role) => ({
  type: types.CHANGE_USER_PERMISSION,
  payload: { role }
});
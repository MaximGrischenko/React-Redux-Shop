import { combineReducers } from 'redux';

import userReducer from './user-reduser';
import productReducer from './product-reducer';
import formReducer from './form-reducer';

const reducers = combineReducers({
  auth: userReducer,
  catalog: productReducer,
  formData: formReducer,
});

export default reducers;
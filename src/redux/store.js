import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import BrowserHistory from '../utils/History';
import reducers from './reducers';

const middleware = routerMiddleware(BrowserHistory);

const store = createStore(
  connectRouter(BrowserHistory)(reducers),
    composeWithDevTools(applyMiddleware(thunk, logger, middleware))
);

export default store;
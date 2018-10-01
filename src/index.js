import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import BrowserHistory from './utils/History';

import store from './redux/store'

import './index.css';
import App from './containers/App.container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={ store }>
    <ConnectedRouter history={BrowserHistory}>
      <App />
    </ConnectedRouter>
  </Provider>
    ), document.getElementById('root'));
    registerServiceWorker();

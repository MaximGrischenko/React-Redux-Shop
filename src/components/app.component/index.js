import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { loadState } from "../../utils/LocalStorage";

import Header from '../../containers/header.container';
import Catalog from '../../containers/catalog.container';
import Editor from '../../containers/editor.container';
import Footer from '../../containers/footer.container';

import NotAllowedComponent from '../not-allowed.component';
import NotFoundComponent from '../not-found.component';

import styles from './app.style.css';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    loadState() === 'Administrator' ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/access-denied',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

const AppLayout = ({ error }) => {
  return (
    <main className={styles.root}>
      <Header />
      <Switch>
        <Route exact path='/' component={Catalog}/>;
        <ProtectedRoute path='/editor' component={Editor}/>
        <Route path='/access-denied' component={NotAllowedComponent}/>
        <Route path='*' component={NotFoundComponent}/>
      </Switch>
      <Footer />
    </main>
  );
};

export default AppLayout;
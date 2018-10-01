import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from './header.style.css';

import Logotype from './components/logotype';
import UserBar from './components/userbar';
import SignIn from './components/singin';

const HeaderComponent = ({ user, isLogin, isLoading, fetchUser, setPermission }) => {
  return (
    <header>
      <AppBar position="static" className={ styles.appBar }>
        <Toolbar className={ styles.row }>
          <Logotype />
          { isLogin ? (
            <UserBar user={ user } onSetPermission={ setPermission }/>
          ) : (
            <SignIn onFetchUser={ fetchUser }/>
          )}
        </Toolbar>
      </AppBar>
        { isLoading ? (
            <LinearProgress color="secondary"/>
          ) : (
          null
          )
        }
    </header>
  )
};

export default HeaderComponent;
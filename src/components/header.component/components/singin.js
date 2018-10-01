import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

import styles from '../header.style.css';

const SignIn = ({ onFetchUser }) => {
  return (
    <div className={styles.signIn}>
      <Typography variant="title" color="inherit">
        Click to SignIn
      </Typography>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => onFetchUser()}>
        <AccountCircle />
      </IconButton>
    </div>
  );
};

export default SignIn;
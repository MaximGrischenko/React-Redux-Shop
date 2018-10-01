import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconHome from '@material-ui/icons/Home';

import styles from '../editor.style.css';

const ProductMenu = ({onDeleteProducts}) => {
  return (
    <Card>
      <CardActions className={styles.editorActions}>
        <Link to='/'>
          <Button size="small" color="primary">
            Back &nbsp;
            <IconHome />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductMenu;
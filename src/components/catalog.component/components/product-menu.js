import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/NoteAdd';
import DeleteIcon from '@material-ui/icons/DeleteForever';

import styles from '../catalog.style.css';

const ProductMenu = ({onDeleteProducts}) => {
  return (
    <Card>
      <CardActions className={styles.productActions}>
        <Link to='/editor'>
          <Button size="small" color="primary">
            Add Product &nbsp;
            <AddIcon />
          </Button>
        </Link>
        <Button size="small" color="secondary"
          onClick={()=> onDeleteProducts()}>
          Clear All &nbsp;
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductMenu;
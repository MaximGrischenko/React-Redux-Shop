import React from 'react';
import Grid from '@material-ui/core/Grid';

import styles from '../catalog.style.css';
import ProductCard from './product-card';

const ProductsList = ({ products, isAdmin, onDeleteProduct }) => {
  return (
    <div className={styles.root}>
      <Grid container spacing={8}>
        {
          products.map(product => (
            <Grid item key={product.id} xs={12} md={3} sm={6} >
              <ProductCard {...product} isAdmin={isAdmin} onDeleteProduct={onDeleteProduct}/>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default ProductsList;
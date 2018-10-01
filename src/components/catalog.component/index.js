import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import ProductMenu from './components/product-menu';
import ProductList from './components/products-list';

import styles from './catalog.style.css';

class CatalogComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.isReady) {
      this.props.fetchProducts();
    }
  }

  render() {
    const { products, isReady, role, deleteProduct, deleteProducts } = this.props;
    const isAdmin = role === "Administrator";
    return (
      <section className={styles.root}>
        { isAdmin ? (
            <ProductMenu onDeleteProducts={ deleteProducts }/>
          ) : (
            null
          )
        }
        { isReady ? (
          <ProductList products={ products } isAdmin={ isAdmin } onDeleteProduct={ deleteProduct }/>
        ) : (
          <div className={styles.progress}>
            <CircularProgress color="secondary" size={60} />
          </div>
        )
      }
      </section>
    );
  }
}

export default CatalogComponent;
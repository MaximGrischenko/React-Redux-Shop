import { connect } from 'react-redux';
import FooterComponent from '../../components/footer.component';

const mapStateToProps = ({ catalog }) => ({
  count: catalog.isReady ? catalog.products.length : 0,
  totalPrice: catalog.isReady ? (
    catalog.products.reduce((total, product) => total + product.price, 0)
  ) : 0,
  averagePrice: catalog.isReady && catalog.products.length ? (
    (catalog.products.reduce((total, product) => total + product.price, 0) / catalog.products.length).toFixed(2)
  ): 0,
});

export default connect(mapStateToProps, null)(FooterComponent);
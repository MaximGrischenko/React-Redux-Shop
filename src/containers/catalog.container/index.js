import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productAction from "../../redux/actions/product-actions";

import CatalogComponent from "../../components/catalog.component";

const mapStateToProps = ({ catalog, auth }) => ({
  products: catalog.products,
  isReady: catalog.isReady,
  role: auth.isLogin ? auth.user.role : undefined,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(productAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogComponent);
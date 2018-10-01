import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as userAction from "../../redux/actions/user-actions";

import HeaderComponent from "../../components/header.component";

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  isLogin: auth.isLogin,
  isLoading: auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(userAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
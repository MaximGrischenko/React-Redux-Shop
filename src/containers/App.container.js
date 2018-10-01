import AppLayout from '../components/app.component';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = ({ auth, catalog }) => ({
  error: auth.error || catalog.error,
});

export default withRouter(connect(mapStateToProps, null)(AppLayout));

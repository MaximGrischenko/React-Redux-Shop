import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from '../../redux/actions/product-actions';
import * as formAction from '../../redux/actions/form-actions';
import EditorComponent from '../../components/editor.component';

const mapStateToProps = ({ formData }) => ({
  form: formData.form
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(productAction, dispatch),
  ...bindActionCreators(formAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorComponent);
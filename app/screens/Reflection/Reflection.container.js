import { connect } from 'react-redux';

import Reflection from './Reflection.component';
import { getReflectionList } from './../../actions/reflection.action';

const mapStateToProps = state => ({
  data: state.reflection.data,
  message: state.reflection.message,
  loading: state.reflection.loading,
  error: state.reflection.error,
  actionStatus: state.reflection.actionStatus
});

const mapDispatchToProps = dispatch => ({
  getReflectionList: month => getReflectionList({ dispatch, month })
});

export default connect(mapStateToProps, mapDispatchToProps)(Reflection);
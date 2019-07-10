import { connect } from 'react-redux';

import Devotional from './Devotional.component';

const mapStateToProps = state => ({
  data: state.devotional.data,
  message: state.devotional.message,
  loading: state.devotional.loading,
  error: state.devotional.error,
  actionStatus: state.devotional.actionStatus
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Devotional);
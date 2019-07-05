import { connect } from 'react-redux';

import Home from './Home.component';
import { getTodaySeed } from './../../actions/dashboard.action';

const mapStateToProps = state => ({
  data: state.dashboard.data,
  message: state.dashboard.message,
  loading: state.dashboard.loading,
  error: state.dashboard.error,
  actionStatus: state.dashboard.actionStatus
});

const mapDispatchToProps = dispatch => ({
  getTodaySeed: () => getTodaySeed({ dispatch })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import { connect } from 'react-redux';

import Home from './Home.component';
import { getTodaySeed } from './../../actions/dashboard';

const mapStateToProps = state => ({
  title: state.dashboardReducer.title,
  body: state.dashboardReducer.body,
  verse: state.dashboardReducer.verse,
  onRequestDashboard: state.dashboardReducer.onRequestDashboard
});

const mapDispatchToProps = dispatch => ({
  getTodaySeed: () => getTodaySeed({ dispatch })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
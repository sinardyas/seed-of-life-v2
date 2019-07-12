import { connect } from 'react-redux';

import Home from './Home.component';
import { getTodaySeed } from './../../actions/dashboard.action';
import { getDevotionalList } from './../../actions/devotional.action';
import { setFontSize } from './../../actions/setting.action';


const mapStateToProps = state => ({
  data: state.dashboard.data,
  message: state.dashboard.message,
  loading: state.dashboard.loading,
  error: state.dashboard.error,
  actionStatus: state.dashboard.actionStatus,
  setting: {
    fontSize: state.setting.fontSize
  }
});

const mapDispatchToProps = dispatch => ({
  getTodaySeed: () => getTodaySeed({ dispatch }),
  getDevotionalList: () => getDevotionalList({ dispatch }),
  setFontSize: size => setFontSize({ dispatch, size })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
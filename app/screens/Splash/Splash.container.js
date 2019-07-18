import { connect } from 'react-redux';
import Splash from './Splash.component';

import { getTodaySeed } from './../../actions/dashboard.action';
import { getDevotionalList } from './../../actions/devotional.action';
import { setFontSize, setFontFamily } from './../../actions/setting.action';

const mapStateToProps = state => ({
  data: state.dashboard.data,
  message: state.dashboard.message,
  loading: state.dashboard.loading,
  error: state.dashboard.error,
  actionStatus: state.dashboard.actionStatus,
  setting: {
    fontSize: state.setting.fontSize,
    fontFamily: state.setting.fontFamily
  }
});

const mapDispatchToProps = dispatch => ({
  getTodaySeed: () => getTodaySeed({ dispatch }),
  getDevotionalList: () => getDevotionalList({ dispatch }),
  setFontSize: size => setFontSize({ dispatch, size }),
  setFontFamily: font => setFontFamily({ dispatch, font })
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

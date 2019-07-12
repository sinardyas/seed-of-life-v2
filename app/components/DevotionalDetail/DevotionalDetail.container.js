import { connect } from 'react-redux';

import DevotionalDetail from './DevotionalDetail.component';

import { setFontSize } from './../../actions/setting.action';

const mapStateToProps = state => ({
  setting: {
    fontSize: state.setting.fontSize
  }
});

const mapDispatchToProps = dispatch => ({
  setFontSize: size => setFontSize({ dispatch, size })
});

export default connect(mapStateToProps, mapDispatchToProps)(DevotionalDetail);
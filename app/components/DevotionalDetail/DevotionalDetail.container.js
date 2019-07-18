import { connect } from 'react-redux';

import DevotionalDetail from './DevotionalDetail.component';

import { setFontSize } from './../../actions/setting.action';

const mapStateToProps = state => ({
  setting: {
    fontSize: state.setting.fontSize,
    fontFamily: state.setting.fontFamily
  }
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DevotionalDetail);
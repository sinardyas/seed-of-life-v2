import { connect } from 'react-redux';

import Setting from './Setting.component';
import { setFontSize, setFontFamily } from './../../actions/setting.action';


const mapStateToProps = state => ({
  setting: {
    fontSize: state.setting.fontSize,
    fontFamily: state.setting.fontFamily
  }
});

const mapDispatchToProps = dispatch => ({
  setFontSize: size => setFontSize({ dispatch, size }),
  setFontFamily: font => setFontFamily({ dispatch, font })
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
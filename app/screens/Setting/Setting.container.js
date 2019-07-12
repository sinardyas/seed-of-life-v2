import { connect } from 'react-redux';

import Setting from './Setting.component';
import { setFontSize } from './../../actions/setting.action';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  setFontSize: size => setFontSize({ dispatch, size })
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
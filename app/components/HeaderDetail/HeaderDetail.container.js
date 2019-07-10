import { connect } from 'react-redux';

import HeaderDetail from './HeaderDetail.component';

const mapStateToProps = state => ({
  data: state.devotional.data
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDetail);
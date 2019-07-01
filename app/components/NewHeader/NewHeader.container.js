import { connect } from 'react-redux';

import NewHeader from './NewHeader.component';

const mapStateToProps = state => ({
  publishDate: state.dashboardReducer.publishDate
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewHeader);
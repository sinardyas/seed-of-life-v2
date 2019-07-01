import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_FAILED } from './../utils/constant';

const initialState = {
  onRequestDashboard: false,
  onRequestDashboardFailed: false,
  onRequestDashboardSuccess: false,
  title: '',
  body: '',
  verse: {
    body: '',
    number: ''
  },
  author: '',
  publishDate: null,
  status: 0
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DASHBOARD: 
      return {
        ...state,
        onRequestDashboard: true
      }
    case REQUEST_DASHBOARD_SUCCESS:
        return {
          ...state,
          onRequestDashboard: false,
          onRequestDashboardFailed: false,
          onRequestDashboardSuccess: true,
          ...action.payload
        }
    case REQUEST_DASHBOARD_FAILED:
      return {
        ...state,
        onRequestDashboard: false,
        onRequestDashboardFailed: true,
        onRequestDashboardSuccess: false,
      }
    default:
      return state;
  }
};

export default dashboardReducer;
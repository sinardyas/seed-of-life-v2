import { statement } from "@babel/template";

const initialState = {
  onRequestDashboard: false,
  onRequestDashboardFailed: false,
  onRequestDashboardSuccess: false,
  title: null,
  verse: null,
  body: null,
  date: null
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_DASHBOARD': 
      return {
        ...state,
        onRequestDashboard: true
      }
    case 'REQUEST_DASHBOARD_FAILED':
      return {
        ...state,
        onRequestDashboard: false,
        onRequestDashboardFailed: true,
        onRequestDashboardSuccess: false,
      }
    case 'REQUEST_DASHBOARD_SUCCESS':
      return {
        ...state,
        onRequestDashboard: false,
        onRequestDashboardFailed: false,
        onRequestDashboardSuccess: true,
        ...action.payload
      }
    default:
      return state;
  }
};

export default dashboardReducer;
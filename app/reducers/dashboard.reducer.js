import { REQUEST_DASHBOARD, REQUEST_DASHBOARD_SUCCESS, REQUEST_DASHBOARD_FAILED } from '../utils/constant';

const data = {
    title: '',
    body: '',
    verse: {
      number: '',
      body: '',
    },
    author: '',
    publishDate: '',
    status: ''
  };

const initialState = {
  data,
  message: '',
  loading: false,
  error: '',
  actionStatus: ''
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DASHBOARD: 
      return {
        ...state,
        loading: true,
        actionStatus: REQUEST_DASHBOARD
      }
    case REQUEST_DASHBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        actionStatus: REQUEST_DASHBOARD_SUCCESS,
        data: action.payload
      }
    case REQUEST_DASHBOARD_FAILED:
      return {
        ...state,
        loading: false,
        actionStatus: REQUEST_DASHBOARD_FAILED,
        error: action.error
      }
    default:
      return state;
  }
};

export { dashboardReducer };
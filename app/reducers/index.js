import { combineReducers } from 'redux';

import { dashboardReducer } from './dashboard.reducer';
import { devotionalReducer } from './devotional.reducer';

export default combineReducers({
  dashboard: dashboardReducer,
  devotional: devotionalReducer
});
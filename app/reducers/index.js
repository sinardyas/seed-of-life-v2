import { combineReducers } from 'redux';

import { dashboardReducer } from './dashboard.reducer';
import { reflectionReducer } from './reflection.reducer';

export default combineReducers({
  dashboard: dashboardReducer,
  reflection: reflectionReducer
});
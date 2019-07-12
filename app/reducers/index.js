import { combineReducers } from 'redux';

import { dashboardReducer } from './dashboard.reducer';
import { devotionalReducer } from './devotional.reducer';
import { settingReducer } from './setting.reducer';

export default combineReducers({
  dashboard: dashboardReducer,
  devotional: devotionalReducer,
  setting: settingReducer
});
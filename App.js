import React, {Component} from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import AppNavigator from './app/routes/navigation';
import AppReducer from './app/reducers';

const store = createStore(AppReducer, applyMiddleware(logger));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

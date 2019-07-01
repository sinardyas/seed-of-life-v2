import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const HEADER = {
  WIDTH: width,
  HEIGHT: 56
};

export const REQUEST_DASHBOARD = 'REQUEST_DASHBOARD';
export const REQUEST_DASHBOARD_SUCCESS = 'REQUEST_DASHBOARD_SUCCESS';
export const REQUEST_DASHBOARD_FAILED = 'REQUEST_DASHBOARD_FAILED';
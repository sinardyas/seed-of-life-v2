import { StyleSheet } from 'react-native';

import Color from '../../utils/color';
import { HEADER } from './../../utils/constant';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: HEADER.WIDTH,
    height: HEADER.HEIGHT,
    backgroundColor: Color.pomegranate,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerLeftMenu: {
    height: HEADER.HEIGHT,
    width: HEADER.HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconLeftMenu: {
    fontSize: 26,
    color: Color.white
  }
});

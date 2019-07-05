import { StyleSheet } from 'react-native';

import Color from '../../utils/color';
import { HEADER } from './../../utils/constant';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: HEADER.WIDTH,
    backgroundColor: Color.maroon,
    alignItems: 'center',
    paddingTop: 10
  },
  containerLeftMenu: {
    justifyContent: 'center',
    padding: 15
  },
  burgerMenu: {
    fontSize: 30,
    color: Color.white
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.white
  }
});

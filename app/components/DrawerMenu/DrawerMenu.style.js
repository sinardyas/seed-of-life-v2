import { StyleSheet } from 'react-native';

import Color from './../../utils/color';

export const DRAWER_FONT_SIZE = 24;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Color.maroonBlack
  },
  containerHeader: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: Color.mineShaft,
    alignItems: 'center',
    padding: 15
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Color.mineShaft,
    padding: 16,
    alignItems: 'center',
  },
  rightIcon: {
    color: Color.white
  },
  leftTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.white
  },
  titleProfile: {
    color: Color.white,
    fontSize: 16,
    marginLeft: 8
  },
  imageProfile: {
    width: 150,
    height: 150
  }
});

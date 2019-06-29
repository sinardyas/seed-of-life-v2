import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import { Icon } from 'native-base';

import Color from '../../utils/color';
import { HEADER } from '../../utils/constant';

import styles from './Header.style';
import { DrawerActions } from 'react-navigation';

const { width } = Dimensions.get('window');

const HeaderDashboard = ({ navigation }) => {
  const toggleDrawer = () => () => navigation.dispatch(DrawerActions.toggleDrawer());
  return (
    <BoxShadow setting={{
      width,
      height: HEADER.HEIGHT,
      color: Color.black,
      border: 2,
      radius: 5,
      opacity: 0,
      x: 0,
      y: 4
    }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={toggleDrawer()}
          style={styles.containerLeftMenu}
        >
          <Icon name="md-menu" style={styles.iconLeftMenu} />
        </TouchableOpacity>
      </View>
    </BoxShadow>
  );
};

export default HeaderDashboard;

import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  DatePickerIOS,
  Text
} from 'react-native';
import { Icon } from 'native-base';
import { DrawerActions } from 'react-navigation';

import styles from './NewHeader.style';
import moment from 'moment';

const Header = ({ navigation, title }) => {
  toggleDrawer = () => () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.toggleDrawer()} style={styles.containerLeftMenu}>
        <Icon name="md-menu" style={styles.burgerMenu} />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.screenTitle}>{title}</Text>
      </View>
    </View>
  );
}

export default Header;

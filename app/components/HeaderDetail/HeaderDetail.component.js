import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Icon } from 'native-base';

import styles from './HeaderDetail.style';

const HeaderDetail = ({ navigation, title }) => {
  goBack = () => () => {
    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={this.goBack()} style={styles.containerLeftMenu}>
        <Icon name="md-arrow-back" style={styles.burgerMenu} />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.screenTitle}>{title}</Text>
      </View>
    </View>
  );
}

export default HeaderDetail;

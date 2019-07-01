import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';
import { Icon } from 'native-base';

import styles from './NewHeader.style';
import { DrawerActions } from 'react-navigation';

const { width } = Dimensions.get('window');

class NewHeader extends Component {
  toggleDrawer = () => () => {
    const { navigation } = this.props
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  render() {
    const { title } = this.props;

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
}

export default NewHeader;

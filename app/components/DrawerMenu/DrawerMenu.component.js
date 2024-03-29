import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native'

import styles from './DrawerMenu.style'
import solIcon from './../../assets/icon/sol-trans.png';

export default DrawerMenu = ({ navigation }) => {
  const onPressitem = routeName => () => navigation.navigate(routeName);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image style={styles.imageProfile} source={solIcon} />
      </View>
      <TouchableOpacity
        onPress={onPressitem('Home')}
        style={styles.containerItem}
      >
        <Text style={styles.leftTitle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressitem('Devotional')}
        style={styles.containerItem}
      >
        <Text style={styles.leftTitle}>Devotional</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressitem('Setting')}
        style={styles.containerItem}
      >
        <Text style={styles.leftTitle}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
}
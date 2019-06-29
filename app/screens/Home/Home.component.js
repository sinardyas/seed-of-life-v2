import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './Home.style';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

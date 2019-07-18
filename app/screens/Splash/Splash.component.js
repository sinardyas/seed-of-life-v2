import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { APP_SETTING } from './../../utils/constant';
import styles from './Splash.style';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.onNavigate(props.navigation);
  }

  componentDidMount() {
    this.getDataFromLocalStorage();
  }

  onNavigate = async (navigation) => {
    navigation.navigate('AppStack');
  }

  getDataFromLocalStorage = async () => {
    const { setFontSize, setFontFamily } = this.props;
    try {
      const result = await AsyncStorage.getItem(APP_SETTING);

      setFontSize(JSON.parse(result).fontSize);
      setFontFamily(JSON.parse(result).fontFamily);
    } catch (error) {
      setFontSize(15);
      setFontFamily('Roboto-Regular');
    }
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}
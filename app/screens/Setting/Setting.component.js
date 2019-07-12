import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';

import style from './Setting.style';
import Color from './../../utils/color';
import { HEADER } from './../../utils/constant';


export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 15,
    }
  }

  onChangeFontSize = () => (age) => {
    const { setFontSize } = this.props;
    setFontSize(age);
    this.setState({ fontSize: age })
  }

  render() {
    return (
      <View style={style.container}>
        <View style={{ height: 100 }}>
          <ScrollView>
            <Text style={this.state}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </ScrollView>
        </View>
        <View style={style.settingWrapper}>
          <Text style={style.title}>
            Font Size
          </Text>
          <Slider
            style={{ width: HEADER.WIDTH - 50, height: 40 }}
            minimumValue={15}
            maximumValue={25}
            minimumTrackTintColor={Color.maroon}
            value={15}
            onValueChange={this.onChangeFontSize()}
          />
        </View>
      </View>
    )
  }
} 
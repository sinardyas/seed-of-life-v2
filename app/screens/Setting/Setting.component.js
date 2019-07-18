import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from 'native-base';

import style from './Setting.style';
import Color from './../../utils/color';
import { HEADER, APP_SETTING } from './../../utils/constant';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: parseInt(props.setting.fontSize),
      fontFamily: props.setting.fontFamily,
      initSlider: parseInt(props.setting.fontSize)
    }
  }

  componentDidUpdate() {
    const { fontSize, fontFamily } = this.state;
    this.storeDataToLocalStorage({ fontSize, fontFamily });
  }

  onChangeFontSize = () => (size) => {
    const { setFontSize } = this.props;
    setFontSize(size);
    this.setState({ fontSize: size });
  }

  onChangeFontFamily = () => (font) => {
    const { setFontFamily } = this.props;
    setFontFamily(font);
    this.setState({ fontFamily: font });
  }

  storeDataToLocalStorage = async (data) => {
    try {
      await AsyncStorage.setItem(APP_SETTING, JSON.stringify(data));
    } catch (error) {

    }
  }

  render() {
    const { fontSize, fontFamily } = this.state;

    return (
      <View style={style.container}>
        <View style={{ height: 100 }}>
          <ScrollView>
            <Text style={{ fontSize, fontFamily }}>
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
            value={this.state.initSlider}
            minimumTrackTintColor={Color.maroon}
            onValueChange={this.onChangeFontSize()}
          />
        </View>
        <View style={style.settingWrapper}>
          <Text style={style.title}>
            Font Style
          </Text>
          <Picker
            mode="dropdown"
            enabled
            placeholder="Select your Font"
            onValueChange={this.onChangeFontFamily()}
            selectedValue={this.state.fontFamily}
          >
            <Picker.Item label="Serif" value="DMSerifDisplay-Regular" />
            <Picker.Item label="San-Serif" value="Roboto-Regular" />
            <Picker.Item label="Monospace" value="OverpassMono-Regular" />
          </Picker>
        </View>
      </View>
    )
  }
} 
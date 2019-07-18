import React, { Component, Fragment } from 'react';
import { Text, View, ActivityIndicator, ScrollView, RefreshControl, Image } from 'react-native';
import Html from 'react-native-render-html';
import SplashScreen from 'react-native-splash-screen';

import styles from './Home.style';
import color from './../../utils/color';

export default class Home extends Component {
  componentDidMount() {
    const { getTodaySeed, getDevotionalList } = this.props;
    getTodaySeed();
    getDevotionalList();
    SplashScreen.hide();
  }

  onRefresh = () => {
    const { getTodaySeed } = this.props;
    getTodaySeed();
  }

  onEmptyData = () => {
    const { loading } = this.props;
    return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={loading} onRefresh={this.onRefresh}></RefreshControl>}
        contentContainerStyle={{opacity: 0.7, justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'row'}}
      >
        <Image source={require('../../assets/icon/sol-trans.png')} style={{width: 150, height: 150}}></Image>
      </ScrollView>
    )
  }

  render() {
    const { data, loading } = this.props;
    const { title, verse } = data;
    const { fontSize, fontFamily } = this.props.setting;

    const body = data.body || '<br>';

    if (!data.body) {
      return this.onEmptyData();
    }

    return (
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={this.onRefresh}></RefreshControl>}>
        <View style={styles.titleWrapper}>
        {loading ? (<ActivityIndicator color={color.maroon}/>) : (<Text style={{ fontSize: fontSize + 5, fontWeight: 'bold', fontFamily }}>{title}</Text>)}
        </View>
        <View style={styles.verseWrapper}>
        {
          loading ? (<ActivityIndicator color={color.maroon}/>) :
          (<View>
            <Text style={{ fontSize, fontFamily }}>{verse.body}</Text>
            <Text style={{ fontSize, fontWeight: 'bold', fontFamily }}>{verse.number}</Text>
          </View>)
        }
        </View>
        <View style={styles.body}>
          {loading ? (<ActivityIndicator color={color.maroon}/>) : (<Html baseFontStyle={{ fontSize, fontFamily }} html={body}/>)}
        </View>
      </ScrollView>
    );
  };
}

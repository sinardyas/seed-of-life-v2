import React, { Component } from 'react';
import { Text, View, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import Html from 'react-native-render-html';

import styles from './Home.style';
import color from './../../utils/color';

export default class Home extends Component {
  componentDidMount() {
    const { getTodaySeed } = this.props;
    getTodaySeed();
  }

  _onRefresh = () => {
    const { getTodaySeed } = this.props;
    getTodaySeed();
  }

  render() {
    const { title, body, verse, onRequestDashboard } = this.props;
    return (
      <ScrollView refreshControl={<RefreshControl refreshing={onRequestDashboard} onRefresh={this._onRefresh}></RefreshControl>}>
        <View style={styles.titleWrapper}>
        {title ? (<Text style={styles.title}>{title}</Text>) : <ActivityIndicator color={color.maroon}/>}
        </View>
        <View style={styles.verseWrapper}>
          {verse.body ? (<Text>{verse.body}</Text>) : <ActivityIndicator color={color.maroon}/>}
          <Text>{verse.number}</Text>
        </View>
        <View style={styles.body}>
          {body ? (<Html html={body}/>) : <ActivityIndicator color={color.maroon}/>}
        </View>
      </ScrollView>
    );
  };
}

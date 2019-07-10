import React, { Component } from 'react';
import { Text, View, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import Html from 'react-native-render-html';

import styles from './Home.style';
import color from './../../utils/color';

export default class Home extends Component {
  componentDidMount() {
    const { getTodaySeed, getDevotionalList } = this.props;
    getTodaySeed();
    getDevotionalList();
  }

  _onRefresh = () => {
    const { getTodaySeed } = this.props;
    getTodaySeed();
  }

  render() {
    const { data, loading } = this.props;
    const { title, body, verse } = data;
    return (
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={this._onRefresh}></RefreshControl>}>
        <View style={styles.titleWrapper}>
        {loading ? (<ActivityIndicator color={color.maroon}/>) : (<Text style={styles.title}>{title}</Text>)}
        </View>
        <View style={styles.verseWrapper}>
        {
          loading ? (<ActivityIndicator color={color.maroon}/>) :
          (<View>
            <Text>{verse.body}</Text>
            <Text style={styles.verseNumber}>{verse.number}</Text>
          </View>)
        }
        </View>
        <View style={styles.body}>
          {loading ? (<ActivityIndicator color={color.maroon}/>) : (<Html html={body}/>)}
        </View>
      </ScrollView>
    );
  };
}

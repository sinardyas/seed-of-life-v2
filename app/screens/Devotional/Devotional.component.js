import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import moment from 'moment'
import { ScrollableTab, Tab, Tabs } from 'native-base'

import styles from './Devotional.style';
import color from '../../utils/color';
import { listMonth } from '../../utils/constant';

const arrayOfMonth = listMonth();

export default class Devotional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 0,
      changeTabValue: 0,
      data: []
    }
  }

  componentWillMount() {
    this.mapsPropsToState();
  }

  mapsPropsToState = () => {
    const { docs = [] } = this.props.data;
    const month = moment().month() + 1;

    this.setState({
      month,
      data: this.getListPerMonth(docs, month)
    });
  };

  getListPerMonth = (docs = [], month) => {
   return docs.filter((data) => (moment(data.publishDate).get('month') + 1) === month);
  }

  keyExtractor = (item, index) => item._id;

  onRefresh = () => {
    const { getDevotionalList } = this.props;
    const { changeTabValue } = this.state;
    getDevotionalList(changeTabValue);
  }

  onChangeTab = (month) => {
    const indexMonth = arrayOfMonth.indexOf(month) + 1;

    this.setState({
      data: this.getListPerMonth(this.props.data.docs, indexMonth)
    });
  }

  onPressItem = data => () => {
    this.props.navigation.navigate({
      routeName: 'DevotionalDetail',
      params: {
        data,
        title: moment(data.publishDate).format('MMMM YYYY, DD')
      }
    });
  }
  
  renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.dateWrapper}>
          <Text style={styles.date}>
              {moment(item.publishDate).get('date')}
          </Text>
        </View>
        <TouchableOpacity style={styles.titleWrapper} onPress={this.onPressItem(item)}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderList = () => {
    return (
      <View style={styles.container}>
        <FlatList
        style={styles.list}
        data={this.state.data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        />
      </View>
    )
  }

  renderLoading = () => {
    return (
      <View style={styles.container}>
        <View style={styles.loading}>
          <ActivityIndicator color={color.white}/>
        </View>
      </View>
    )
  }

  renderTabs = (month, index) => {
    return (
      <Tab
        key={index}
        heading={month}
        tabStyle={styles.tab}
        activeTabStyle={styles.tabActive}
        textStyle={styles.tabText}
        activeTextStyle={styles.tabActiveText}>
        {this.renderList()}
      </Tab>
    );
  }

  render() {
    const indexTab = this.state.month - 1;

    if (!this.state.data) {
      return this.renderLoading();
    }

    return (
      <View style={styles.container}>
        <Tabs
        renderTabBar={()=> <ScrollableTab />}
        initialPage={indexTab}
        onChangeTab={({ ref }) => this.onChangeTab(ref.props.heading)}
        tabBarUnderlineStyle={styles.tabBar}>
          {arrayOfMonth.map((month, index) => this.renderTabs(month, index))}
        </Tabs>
      </View>
    )
  }
}
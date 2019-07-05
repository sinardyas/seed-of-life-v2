import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import moment from 'moment'
import { ScrollableTab, Tab, Tabs } from 'native-base'

import styles from './Reflection.style';
import color from './../../utils/color';
import { REQUEST_REFLECTION_LIST, listMonth } from './../../utils/constant';

const arrayOfMonth = listMonth();

export default class Reflection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 0
    }
  }

  componentDidMount() {
    const { getReflectionList } = this.props;
    const month = moment().month() + 1;
    getReflectionList(month);
    this.setState({
      month
    })
  }

  parsedDate = (date) => moment(date).get('date');

  keyExtractor = (item, index) => item._id;

  onRefresh = () => {
    const { getReflectionList } = this.props;
    const month = moment().month() + 1;
    getReflectionList(month);
  }

  onChangeTab = (month) => {
    const indexMonth = arrayOfMonth.indexOf(month) + 1;
    const { getReflectionList } = this.props;
    getReflectionList(indexMonth);
  }

  onPressItem = data => () => {
    this.props.navigation.navigate({
      routeName: 'ReflectionDetail',
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
              {this.parsedDate(item.publishDate)}
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
    const { actionStatus } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
        style={styles.list}
        data={this.props.data.docs}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        refreshControl={<RefreshControl refreshing={actionStatus === REQUEST_REFLECTION_LIST} onRefresh={this.onRefresh}/>}
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
    const { actionStatus } = this.props;
    return (
      <Tab
        key={index}
        heading={month}
        tabStyle={styles.tabs}
        activeTabStyle={styles.tabsActive}
        textStyle={styles.tabText}
        activeTextStyle={styles.tabActiveText}>
        {actionStatus === REQUEST_REFLECTION_LIST ? this.renderLoading() : this.renderList()}
      </Tab>
    );
  }

  render() {
    const { docs } = this.props.data;
    if (!docs) {
      return this.renderLoading();
    }
    return (
      <View style={styles.container}>
        <Tabs
        renderTabBar={()=> <ScrollableTab />}
        initialPage={this.state.month - 1}
        onChangeTab={({ ref }) => this.onChangeTab(ref.props.heading)}
        tabBarUnderlineStyle={styles.tabBar}>
          {arrayOfMonth.map((month, index) => this.renderTabs(month, index))}
        </Tabs>
      </View>
    )
  }
}
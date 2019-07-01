import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, addNavigationHelpers } from 'react-navigation';

import HomeScreen from '../screens/Home/Home.container';
import Header from '../components/NewHeader/NewHeader.container';

const SideMenu = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: SideMenu,
      navigationOptions: ({ navigation }) => ({
        header: props => <Header {...props} title='Today Seed'/>
      })
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(HomeStack);

export default AppNavigator;
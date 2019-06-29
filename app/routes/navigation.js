import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, addNavigationHelpers } from 'react-navigation';

import HomeScreen from '../screens/Home/Home.component';
// import ItemDetailScreen from '../screens/ItemDetail/ItemDetail.component';
// import ItemListScreen from '../screens/ItemList/ItemList.component';
import Header from '../components/Header/Header.component';

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
        title: 'Home',
        header: props => <Header {...props} />
      })
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(HomeStack);

export default AppNavigator;
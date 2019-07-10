import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home.container';
import DevotionalList from '../screens/Devotional/Devotional.container';

import Header from '../components/NewHeader/NewHeader.component';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail.container';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu.component';
import DevotionalDetail from '../components/DevotionalDetail/DevotionalDetail.container';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: props => <Header {...props} title='Today Seed'/>
      })
    },
  },
  {
    headerMode: 'float'
  }
);

const DevotionalStack = createStackNavigator(
  {
    Devotional: {
      screen: DevotionalList,
      navigationOptions: ({ navigation }) => ({
        header: props => <Header {...props}/>
      })
    },
    DevotionalDetail: {
      screen: DevotionalDetail,
      navigationOptions: ({ navigation }) => ({
        header: props => <HeaderDetail {...props} title={navigation.getParam('title')}/>
      })
    }
  },
  {
    headerMode: 'float'
  }
);

const SideMenu = createDrawerNavigator(
  {
    HomeStack,
    DevotionalStack
  },
  {
    contentComponent: props => <DrawerMenu {...props}/>
  }
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: SideMenu,
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(AppStack);

export default AppNavigator;
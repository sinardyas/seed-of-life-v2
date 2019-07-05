import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home.container';
import ReflectionList from '../screens/Reflection/Reflection.container';

import Header from '../components/NewHeader/NewHeader.component';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail.container';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu.component';
import ReflectionDetail from '../components/ReflectionDetail/ReflectionDetail.container';

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

const ReflectionStack = createStackNavigator(
  {
    Reflection: {
      screen: ReflectionList,
      navigationOptions: ({ navigation }) => ({
        header: props => <Header {...props}/>
      })
    },
    ReflectionDetail: {
      screen: ReflectionDetail,
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
    ReflectionStack
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
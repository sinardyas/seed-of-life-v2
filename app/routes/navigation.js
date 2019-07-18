import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home.container';
import DevotionalList from '../screens/Devotional/Devotional.container';

import Header from '../components/NewHeader/NewHeader.component';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail.container';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu.component';
import DevotionalDetail from '../components/DevotionalDetail/DevotionalDetail.container';
import Setting from '../screens/Setting/Setting.container';
import Splash from '../screens/Splash/Splash.container';

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

const SettingStack = createStackNavigator(
  {
    Setting: {
      screen: Setting,
      navigationOptions: ({ navigation }) => ({
        header: props => <Header {...props}/>
      })
    }
  },
  {
    headerMode: 'float'
  }
)

const SideMenu = createDrawerNavigator(
  {
    HomeStack,
    DevotionalStack,
    SettingStack
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

const SplashStack = createStackNavigator(
  {
    Splash: {
      screen: Splash
    }
  },
  {
    headerMode: 'none'
  }
)

const RootNavigation = createSwitchNavigator(
  {
    SplashStack,
    AppStack
  }
)

const AppNavigator = createAppContainer(RootNavigation);

export default AppNavigator;
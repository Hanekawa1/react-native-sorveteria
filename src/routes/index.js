import React from 'react';

import Login from '../pages/login';
import Main from '../pages/main';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

const LoginPage = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
      headerShown: false,
    }),
  },
});

const MainPage = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: 'Main',
    }),
  },
});

const DrawerNavigatorMenu = createDrawerNavigator(
  {
    Login: LoginPage,
    Main: MainPage,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(DrawerNavigatorMenu);

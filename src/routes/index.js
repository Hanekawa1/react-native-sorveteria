import React from 'react';

import Login from '../pages/login';
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

const DrawerNavigatorMenu = createDrawerNavigator(
  {
    Login: LoginPage,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(DrawerNavigatorMenu);

import React from 'react';

import Login from '../pages/login';
import Main from '../pages/main';
import Lista from '../pages/lista';
import Cadastro from '../pages/cadastro';
import Carrinho from '../pages/carrinho';
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
      headerShown: false,
    }),
  },
});

const CarrinhoPage = createStackNavigator({
  Carrinho: {
    screen: Carrinho,
    navigationOptions: ({ navigation }) => ({
      title: 'Carrinho',
      headerShown: false,
    }),
  },
});

const CadastroPage = createStackNavigator({
  Cadastro: {
    screen: Cadastro,
    navigationOptions: ({ navigation }) => ({
      title: 'Cadastro',
      headerShown: false,
    }),
  },
});

const ListaPage = createStackNavigator({
  Lista: {
    screen: Lista,
    navigationOptions: ({ navigation }) => ({
      title: 'Lista',
      headerShown: false,
    }),
  },
});

const DrawerNavigatorMenu = createDrawerNavigator(
  {
    Login: LoginPage,
    Main: MainPage,
    Lista: ListaPage,
    Cadastro: CadastroPage,
    Carrinho: CarrinhoPage,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(DrawerNavigatorMenu);

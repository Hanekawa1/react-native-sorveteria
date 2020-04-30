import React from 'react';
import Wallpaper from '../../components/wallpaper';
import Logo from '../../components/logo';
import UserImage from '../../assets/images/username.png';
import PassImage from '../../assets/images/password.png';

import { View, Text, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from './styles';

function Login() {
  return (
    <Wallpaper
      children={
        <>
          <Logo />

          <View style={Styles.inputWrapper}>
            <Image source={UserImage} style={Styles.inlineImg} />
            <TextInput
              style={Styles.input}
              placeholder="Insira o usuário"
              placeholderTextColor="white"
            />
          </View>

          <View style={Styles.inputWrapper}>
            <Image source={PassImage} style={Styles.inlineImg} />
            <TextInput
              style={Styles.input}
              placeholder="Insira a senha"
              placeholderTextColor="white"
            />
          </View>

          <View style={Styles.container}>
            <TouchableOpacity style={Styles.button}>
              <Text style={Styles.text}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.containerSignup}>
            <Text style={Styles.text}>
              <Image source={UserImage} style={Styles.inlineImg} />
              Entrar como usuário convidado
            </Text>
          </View>
        </>
      }
    />
  );
}

export default Login;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wallpaper from '../../components/wallpaper';
import Logo from '../../components/logo';
import UserImage from '../../assets/images/username.png';
import PassImage from '../../assets/images/password.png';
import bgLogin from '../../assets/images/wallpaper.png';

import { View, Text, Image, BackHandler } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import Styles from './styles';

function Login({ navigation }) {
  const [ideUsuario, setIdeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    inicializar();
  }, []);

  useEffect(() => {
    if (auth.navegar === true) {
      navigation.navigate('Main');
      dispatch({ type: 'SIGN_IN_INICIAL' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.navegar]);

  useEffect(() => {
    if (auth.navegarGuest === true) {
      navigation.navigate('Lista');
    }
  }, [auth.navegarGuest, navigation]);

  useEffect(() => {
    const backAction = () => {
      dispatch({ type: 'LOGOFF_GUEST' });
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  async function inicializar() {
    setIdeUsuario('');
    setSenha('');
  }

  function autenticar() {
    var user = {
      ideUsuario: ideUsuario,
      senhaUsuario: senha,
    };
    dispatch({ type: 'SIGN_IN_REQUEST', user });
  }

  function navegarGuest() {
    dispatch({ type: 'NAVEGAR_GUEST' });
  }

  return (
    <Wallpaper
      image={bgLogin}
      children={
        <>
          <Logo />

          <View style={Styles.inputWrapper}>
            <Image source={UserImage} style={Styles.inlineImg} />
            <TextInput
              style={Styles.input}
              placeholder="Insira o usuário"
              placeholderTextColor="white"
              value={ideUsuario}
              onChangeText={(text) => setIdeUsuario(text)}
            />
          </View>

          <View style={Styles.inputWrapper}>
            <Image source={PassImage} style={Styles.inlineImg} />
            <TextInput
              style={Styles.input}
              placeholder="Insira a senha"
              placeholderTextColor="white"
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
          </View>

          <View style={Styles.container}>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => autenticar()}>
              <Text style={Styles.text}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.containerSignup}>
            <TouchableOpacity onPress={() => navegarGuest()}>
              <Text style={Styles.text}>
                <Image source={UserImage} style={Styles.inlineImg} />
                Entrar como usuário convidado
              </Text>
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
}

export default Login;

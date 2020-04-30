import React from 'react';
import { View, Image, Text } from 'react-native';
import logoImg from '../../assets/images/logo.png';

import Styles from './styles';

function Logo() {
  return (
    <View style={Styles.container}>
      <Image source={logoImg} style={Styles.image} />
      <Text style={Styles.text}>Sorveteria Mordekaiser</Text>
    </View>
  );
}

export default Logo;

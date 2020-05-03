import React from 'react';
import Wallpaper from '../../components/wallpaper';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import bgAdmin from '../../assets/images/wallpaperAdmin.png';

import Styles from './styles';

function Main({ navigation }) {
  return (
    <Wallpaper
      image={bgAdmin}
      children={
        <View style={Styles.container}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={Styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
}

export default Main;

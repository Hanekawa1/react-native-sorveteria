import React from 'react';
import Wallpaper from '../../components/wallpaper';
import { View, Text } from 'react-native';
import bgAdmin from '../../assets/images/wallpaperAdmin.png';

function Main({ navigation }) {
  return (
    <Wallpaper
      image={bgAdmin}
      children={
        <View>
          <Text>Teste</Text>
        </View>
      }
    />
  );
}

export default Main;
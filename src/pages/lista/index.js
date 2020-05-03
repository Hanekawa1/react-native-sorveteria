import React from 'react';
import Wallpaper from '../../components/wallpaper';
import bgGuest from '../../assets/images/wallpaperGuest.png';
import { View, Text } from 'react-native';

function Main({ navigation }) {
  return (
    <Wallpaper
      image={bgGuest}
      children={
        <View>
          <Text>Lista</Text>
        </View>
      }
    />
  );
}

export default Main;

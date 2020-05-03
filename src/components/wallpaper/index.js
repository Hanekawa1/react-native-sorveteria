import React from 'react';
import Styles from './styles';
import { ImageBackground } from 'react-native';

function Wallpaper({ children, image }) {
  return (
    <ImageBackground style={Styles.pictured} source={image}>
      {children}
    </ImageBackground>
  );
}

export default Wallpaper;

import React from 'react';

import bgLogin from '../../assets/images/wallpaper.png';

import Styles from './styles';
import { ImageBackground } from 'react-native';

function Wallpaper({ children }) {
  return (
    <ImageBackground style={Styles.pictured} source={bgLogin}>
      {children}
    </ImageBackground>
  );
}

export default Wallpaper;

import {DefaultTheme} from '@react-navigation/native';

//Light Theme
export const light_colors = {
  ...DefaultTheme,
  colors: {
    black: '#1A1D27',
    blue_text: '#5D6D8C',
    gray_text: '#86888D',
    gray_bg: '#E7EAEB',
    green: '#54E8B2',

    primary: 'green',
  },
};

//Dark theme..
export const dark_colors = {
  ...DefaultTheme,
  colors: {
    black: '#fff',
    primary: 'blue',
  },
};

export const fonts = {
  bold: {
    fontFamily: 'Campton-Bold',
  },
  light: {
    fontFamily: 'Campton-Light',
  },
};

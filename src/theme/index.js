import {DefaultTheme} from '@react-navigation/native';

//Light Theme
export const light_colors = {
  ...DefaultTheme,
  colors: {
    background: '#fff',
    black: '#1A1D27',
    black_line: '#464B6D',
    blue_text: '#5D6D8C',
    gray_text: '#86888D',
    gray_text2: '#969AA8',
    gray_bg: '#E7EAEB',
    green: '#54E8B2',
    gray_input: '#E7EAEB',

    primary: 'green',
  },
};

//Dark theme..
export const dark_colors = {
  ...DefaultTheme,
  colors: {
    background: '#fff',
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

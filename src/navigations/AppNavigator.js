import {useTheme} from '@react-navigation/native';
import LoggedOutNavigation from './LoggedOutNavigation';
import {useColorScheme} from 'react-native';
import {dark_colors, light_colors} from '../theme/';
import {useEffect} from 'react';

import i18n from 'i18next';
import {setSelectedLang} from '../store/languages';
import {useDispatch, useSelector} from 'react-redux';
export const AppNavigator = () => {
  //Navigation Settings
  const colorScheme = useColorScheme();
  const navigationDefaultOptions = {
    headerMode: 'screen',
    headerShown: false,
  };
  const themeColor = colorScheme == 'dark' ? dark_colors : light_colors;

  //redux
  const dispatch = useDispatch();
  //language
  const selectedLanguage = useSelector(state => state.languages.selectedLang);

  useEffect(() => {
    setTimeout(() => {
      if (i18n.language != selectedLanguage.key) {
        dispatch(setSelectedLang(selectedLanguage));
        i18n.changeLanguage(selectedLanguage.key);
      }
    }, 10);
  }, []);
  return (
    <LoggedOutNavigation
      navigationDefaultOptions={navigationDefaultOptions}
      theme={themeColor}
    />
  );
};

export default AppNavigator;

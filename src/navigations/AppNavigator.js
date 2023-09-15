import {useTheme} from '@react-navigation/native';
import LoggedOutNavigation from './LoggedOutNavigation';
import {useColorScheme} from 'react-native';
import {dark_colors, light_colors} from '../theme/';
export const AppNavigator = () => {
  const colorScheme = useColorScheme();
  const navigationDefaultOptions = {
    headerMode: 'screen',
    headerShown: false,
  };
  const themeColor = colorScheme == 'dark' ? dark_colors : light_colors;

  return (
    <LoggedOutNavigation
      navigationDefaultOptions={navigationDefaultOptions}
      theme={themeColor}
    />
  );
};

export default AppNavigator;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import {Welcome} from '../screens';

const Stack = createNativeStackNavigator();
const LoggedOutNavigation = ({navigationDefaultOptions, theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={routes.Welcome}
        screenOptions={navigationDefaultOptions}>
        <Stack.Screen component={Welcome} name={routes.Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoggedOutNavigation;

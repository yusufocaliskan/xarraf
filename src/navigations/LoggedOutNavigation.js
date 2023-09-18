import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../routes';
import {Welcome} from '../screens';
import Login from '../screens/Auth/Login';
import LoginWithVerificationCode from '../screens/Auth/Login/LoginWithVerificationCode';

const Stack = createNativeStackNavigator();
const LoggedOutNavigation = ({navigationDefaultOptions, theme}) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={routes.Welcome}
        screenOptions={navigationDefaultOptions}>
        <Stack.Screen name={routes.common.Welcome} component={Welcome} />
        <Stack.Screen name={routes.auth.Login} component={Login} />
        <Stack.Screen
          name={routes.auth.LoginWithVerificationCode}
          component={LoginWithVerificationCode}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoggedOutNavigation;

import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import ScreenCard from '../../../components/ScreenCard';
import ScreenTitle from '../../../components/ScreenCard/ScreenTitle';
import FormTextInput from '../../../components/Form/FromTextInput';
import {useState} from 'react';

const Login = ({test}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();
  return (
    <ScreenCard
      headerContainerStyle={{
        marginTop: 20,
        marginBottom: 20,
      }}>
      <ScreenTitle title="Login To Your Account" description="Wellcome Back!" />
      <View style={styles.inputGroups}>
        <View style={styles.inputElement}>
          <FormTextInput
            placeholder="Enter your name here"
            name="Email"
            value={getEmail}
            setValue={setEmail}
          />
        </View>
        <View style={styles.inputElement}>
          <FormTextInput
            secure={true}
            placeholder="Enter password name here"
            name="Password"
            value={getPassword}
            setValue={setPassword}
          />
        </View>
        <View style={[styles.inputElement, styles.forgotPasswordButtonView]}>
          <CustomButton
            text="Forgot Password?"
            //onPress={() => navigation.push(routes.Login)}
            disabled={false}
            isTextButton={true}
            textStyle={{
              textDecorationLine: true,
              fontSize: 13,
            }}
          />
        </View>

        <View style={[styles.inputElement, styles.loginButtonView]}>
          <CustomButton
            text="Login"
            //onPress={() => navigation.push(routes.Login)}
            disabled={false}
          />
        </View>

        <View style={[styles.inputElement, styles.registerButtonView]}>
          <Text style={[styles.registerButtonText, {color: colors.gray_text}]}>
            Don't have an account?
          </Text>
          <CustomButton
            text="Register"
            //onPress={() => navigation.push(routes.Login)}
            disabled={false}
            isTextButton={true}
          />
        </View>
      </View>
    </ScreenCard>
  );
};

const styles = StyleSheet.create({
  greedingView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  greedingHeaderTitleText: {
    fontSize: 24,
  },
  greedingHeaderDescriptionText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  inputGroups: {
    marginTop: '10%',
  },
  forgotPasswordButtonView: {
    marginTop: 5,
    alignItems: 'flex-end',
    fontSize: 12,
  },
  registerButtonView: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerButtonText: {
    marginHorizontal: 10,
  },
  loginButtonView: {
    marginVertical: 20,
  },
});

export default Login;

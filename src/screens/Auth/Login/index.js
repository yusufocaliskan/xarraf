import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import ScreenCard from '../../../components/ScreenCard';
import ScreenTitle from '../../../components/ScreenCard/ScreenTitle';
import FormTextInput from '../../../components/Form/FromTextInput';
import {useEffect, useState} from 'react';
import DiverderWithText from '../../../components/Divider/DiverderWithText';
import GoogleIcon from '../../../components/Icons/GoogleIcon';
import FacebookIcon from '../../../components/Icons/FacebookIcon';
import GitHub from '../../../components/Icons/GitHub';
import routes from '../../../routes';

const Login = ({test}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [getEmail, setEmail] = useState();
  const [getPassword, setPassword] = useState();
  const [isDisabled, setIsDisabled] = useState();

  useEffect(() => {
    if (getEmail && getPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [getEmail, getPassword]);
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
              textDecorationLine: 'underline',
              fontSize: 13,
            }}
          />
        </View>

        <View style={[styles.inputElement, styles.loginButtonView]}>
          <CustomButton
            text="Login"
            onPress={() =>
              navigation.push(routes.auth.LoginWithVerificationCode)
            }
            disabled={isDisabled}
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
      <View style={[styles.divider]}>
        <DiverderWithText text="Or Sign up with" />
      </View>
      <View style={styles.socialAuthButtonsWrapper}>
        <View style={styles.socialAuthButtons}>
          <CustomButton
            //onPress={() => navigation.push(routes.Login)}
            disabled={false}
            isIconButton={true}
            iconButtonStyle={{backgroundColor: colors.black}}
            Icon={() => <GoogleIcon width={45} height={45} color="white" />}
          />
          <CustomButton
            //onPress={() => navigation.push(routes.Login)}
            disabled={false}
            isIconButton={true}
            iconButtonStyle={{backgroundColor: colors.black}}
            Icon={() => <FacebookIcon width={39} height={39} color="white" />}
          />
          <CustomButton
            //onPress={() => navigation.push(routes.Login)}
            disabled={false}
            isIconButton={true}
            iconButtonStyle={{backgroundColor: colors.black}}
            Icon={() => <GitHub width={45} height={45} color="white" />}
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
  socialAuthButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialAuthButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  divider: {
    marginVertical: 20,
  },
});

export default Login;

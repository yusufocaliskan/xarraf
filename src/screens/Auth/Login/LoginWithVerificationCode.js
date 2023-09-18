import {useNavigation, useTheme} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import ScreenCard from '../../../components/ScreenCard';
import {useEffect, useRef, useState} from 'react';
import Verification from '../../../components/Verification';
import ScreenTitle from '../../../components/ScreenCard/ScreenTitle';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

const LoginWithVerificationCode = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [getCode, setCode] = useState([]);
  const [isDisabled, setIsDisabled] = useState();
  const {t} = useTranslation();
  const safeAreaRef = useRef();

  useEffect(() => {
    if (getCode.length >= 6) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [getCode]);

  return (
    <ScreenCard
      safeAreaRef={safeAreaRef}
      headerContainerStyle={{
        marginTop: 20,
        marginBottom: 20,
      }}>
      <ScreenTitle
        title={t('verification_screen_title')}
        description={t('verification_screen_description')}
        containerStyle={{marginBottom: 30}}
      />
      <Verification
        code={getCode}
        setCode={setCode}
        numberOfInputs={6}
        setIsDisabled={setIsDisabled}
        isDisabled={isDisabled}
        onPressCountinue={() => console.log('HO')}
        onPressResentCodeButton={() => console.log('HO!')}
        whenTimeOut={() => console.log('HO!')}
      />
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

export default LoginWithVerificationCode;

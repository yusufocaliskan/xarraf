import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import {colors, fonts} from '../../theme';
import CustomButton from '../CustomButton';
//import {useTranslation} from 'react-i18next';

//import FeatureImage from '../FeatureImage';
import ProgressCircle from '../ProgressCircle/ProgressCircle';

//import {useDispatch, useSelector} from 'react-redux';
// import {
//   setCurrentVerificationScreenParams,
//   setCurrentVerificationScreenStatus,
// } from '../../store/app';
import {countDownTime} from '../../constants';
// import {useNavigation, useTheme} from '@react-navigation/native';

import VerificationInputGroups from '../Form/VerificationInputs/VerificationInputGroups';
import {useNavigation, useTheme} from '@react-navigation/native';
import routes from '../../routes';

//import {checkIfVerificationCodeIsCorrect} from '../../store/customers/Thunks';

//Verication center
const Verification = ({
  onPressCountinue,
  onPressResentCodeButton,
  code,
  setCode,
  whenTimeOut,
  setIsDisabled,
  isDisabled,
  noContinueButton,
  noProcressBar = false,
  noCancelButton = false,
  showPassword,
  numberOfInputs = 6,
  isSetMargin,
  keyboardType,
}) => {
  //const {t} = useTranslation();
  const progressRef = useRef();
  // const appStore = useSelector(state => state.app);
  // const dispatch = useDispatch();
  const navigation = useNavigation();
  const {colors} = useTheme();
  useEffect(() => {
    if (code.length >= 6) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [code]);

  // useEffect(() => {
  //   //stop the count down when the app is inactive or in the background
  //   if (progressRef?.current) {
  //     if (
  //       appStore.appState == 'background' ||
  //       appStore.appState == 'inactive'
  //     ) {
  //       progressRef?.current.pause();
  //     } else {
  //       progressRef?.current.play();
  //     }
  //   }
  // }, [appStore.appState]);

  const handleWhenTimeOut = () => {
    // dispatch(setCurrentVerificationScreenStatus(false));
    // dispatch(setCurrentVerificationScreenParams({}));
    whenTimeOut();
  };
  const handleOnPressCancel = () => {
    // dispatch(setCurrentVerificationScreenParams({}));
    navigation.reset({index: 0, routes: [{name: routes.common.Welcome}]});
  };
  return (
    <>
      <View style={styles.verificationInputsGroup}>
        <VerificationInputGroups
          setIsDisabled={setIsDisabled}
          code={code}
          setCode={setCode}
          showPassword={showPassword}
          numberOfInputs={numberOfInputs}
          isSetMargin={isSetMargin}
          keyboardType={keyboardType}
        />
      </View>

      {onPressResentCodeButton && (
        <View>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={onPressResentCodeButton}>
            {/* <Text>{t('didnt_get_the_code')}</Text> */}
            <Text style={{color: colors.gray_text, fontSize: 16}}>
              Didn't get the code?
            </Text>
            <Text
              style={[styles.forgotPasswordButtonText, {color: colors.green}]}>
              {/* {t('resend_now')} */}
              Reset Now
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {!noCancelButton && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <CustomButton
            onPress={handleOnPressCancel}
            //text={t('cancel')}
            text={'Cancel'}
            textColor={colors.dark_gray}
            isTextButton={true}
          />
        </View>
      )}
      {!noProcressBar && (
        <View style={styles.progresBar}>
          <ProgressCircle
            radius="100"
            initialValue={countDownTime.time}
            isCountDown={true}
            step={2}
            totalSteps={4}
            whenTimeOut={handleWhenTimeOut && handleWhenTimeOut}
            progressRef={progressRef}
          />
        </View>
      )}

      {!noContinueButton && (
        <View style={styles.submitButtonView}>
          <CustomButton
            onPress={onPressCountinue}
            text={'Continue'}
            //text={t('continue')}
            // Icon={CheckIcon}
            color={colors.red}
            textColor="white"
            gradient={!isDisabled}
            disabled={isDisabled}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  progresBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitButtonView: {
    justifyContent: 'flex-end',
    marginTop: '20%',
  },

  verificationInputsGroup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  forgotPasswordButton: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  forgotPasswordButtonText: {},
});

export default Verification;

import React, {useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// import Header from '../components/Header/Header';
// import {useDispatch, useSelector} from 'react-redux';
// import {BlurView} from '@react-native-community/blur';
import {hp, wp} from '../utils/scaler';
// import ErrorModal from '../components/Error/ErrorModal';
// import TwcLoading from '../components/TwcCard/TwcLoading';

// import useInActivityTimer from '../hooks/useInActivityTimer';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {customerLogout, setIsApplicationLocked} from '../store/customers';
import routes from '../routes/';
// import ApplicationVersionDetails from '../components/AppVersionDisplayer/ApplicationVersionDetails';
// import AppVersionDisplayer from '../components/AppVersionDisplayer';

const ScreenCard = ({
  showUserAvatar,
  children,
  noHeader,
  displayProgressBar,
  step,
  totalSteps,
  displayLangSelector,
  noPadding,
  style,
  isCountDown,
  menuBar,
  noScrollView,
  scrollViewStyle,
  displayNotification,
  displayLogo,
  dontShowGoBackIcon,
  FooterRender,
  displayPremiumIcons,

  errors,
  setErrors,
  isLoading,
  notificationIconColor,
  displayVersionText = false,
}) => {
  // const setting = useSelector(state => state.setting);
  // const dispatch = useDispatch();
  // const {resetInActivityTimer, isInActivityTimeout} = useInActivityTimer();
  // const customer = useSelector(state => state.customers);
  // const appStore = useSelector(state => state.app);
  // const navigation = useNavigation();

  //Reset the timer every action of the navigation
  // useFocusEffect(
  //   React.useCallback(() => {
  //     checkIfTheTokenExpireTimeIsFinished();
  //     resetInActivityTimer();
  //     return () => {};
  //   }, []),
  // );

  //Lock the screen when the time out.
  // useEffect(() => {
  //   if (isInActivityTimeout) {
  //     dispatch(setIsApplicationLocked(true));
  //   }
  // }, [isInActivityTimeout]);

  /**
   * if the token-expire of the TARGET has finished,
   * customer must reloggin to take new token.
   */
  // const checkIfTheTokenExpireTimeIsFinished = () => {
  //   if (
  //     customer.targetTokenExpireTime != null &&
  //     customer.lastLoggedInTime != null
  //   ) {
  //     const tokenExpireTime = customer.targetTokenExpireTime * 1000; //second to milliseconds.
  //     const lastLoggedInTime = new Date(customer.lastLoggedInTime);
  //     const currentTime = new Date();
  //     const timeDifference = currentTime.getTime() - lastLoggedInTime.getTime();

  //     if (timeDifference > tokenExpireTime) {
  //       navigation.reset({index: 0, routes: [{name: routes.Logout}]});
  //     }
  //   }
  // };

  return (
    <>
      {isLoading && <TwcLoading />}

      <SafeAreaView style={[{flex: 1}, style]}>
        {!noHeader && (
          <View
            style={[
              {position: 'relative', zIndex: 777},
              noScrollView && {paddingBottom: 25},
            ]}>
            {/* <Header
              dontShowGoBackIcon={dontShowGoBackIcon}
              displayLogo={displayLogo}
              displayNotification={displayNotification}
              notificationIconColor={notificationIconColor}
              showUserAvatar={showUserAvatar}
              displayLangSelector={displayLangSelector}
              displayProgressBar={displayProgressBar}
              step={step}
              totalSteps={totalSteps}
              isCountDown={isCountDown}
              menuBar={menuBar}
              displayPremiumIcons={displayPremiumIcons}
            /> */}
          </View>
        )}

        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          {!noScrollView && (
            <>
              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={[
                  scrollViewStyle,
                  {
                    flexGrow: 1,
                  },
                  !noPadding && {paddingHorizontal: 15},
                ]}>
                {children}
                {/* <View style={styles.version}>
                  <AppVersionDisplayer
                    displayVersionText={displayVersionText}
                  />
                </View> */}
              </ScrollView>
            </>
          )}
          {/* //if no scrool */}
          {noScrollView && (
            <>
              {children}
              {/* <View style={styles.version}>
                <AppVersionDisplayer displayVersionText={displayVersionText} />
              </View> */}
            </>
          )}

          {FooterRender && (
            <View style={!noPadding && {paddingHorizontal: 15}}>
              <FooterRender />
            </View>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>

      {/* {errors && <ErrorModal errors={errors} setErrors={setErrors} />} */}
    </>
  );
};

const styles = StyleSheet.create({
  blurOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: wp(100),
    height: hp(100),
    zIndex: 999,
  },
  version: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    marginBottom: 10,
  },
  version: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
export default ScreenCard;
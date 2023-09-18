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
import {hp, wp} from '../../utils/scaler';
// import ErrorModal from '../components/Error/ErrorModal';
// import TwcLoading from '../components/TwcCard/TwcLoading';

// import useInActivityTimer from '../hooks/useInActivityTimer';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {customerLogout, setIsApplicationLocked} from '../store/customers';
import routes from '../../routes';
import ScreenHeader from './ScreenHeader';
// import ApplicationVersionDetails from '../components/AppVersionDisplayer/ApplicationVersionDetails';
// import AppVersionDisplayer from '../components/AppVersionDisplayer';

const ScreenCard = ({
  children,
  noPadding,
  noScrollView,
  scrollViewStyle,
  FooterRender,
  headerContainerStyle,
  displayHeeader = true,
  safeAreaRef,
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
      {/* {isLoading && <TwcLoading />} */}

      <SafeAreaView style={{flex: 1}} ref={safeAreaRef}>
        {displayHeeader && (
          <ScreenHeader containerStyle={headerContainerStyle} />
        )}
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
                  !noPadding && {paddingHorizontal: 25},
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

const styles = StyleSheet.create({});
export default ScreenCard;

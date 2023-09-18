import {useNavigation, useRoute, useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

import ScreenCard from '../../components/ScreenCard';
import Logo from '../../components/Logo';
import {themeColor} from '../../navigations/AppNavigator';
import CustomButton from '../../components/CustomButton';
import ScreenTitle from '../../components/ScreenCard/ScreenTitle';
import {useTranslation} from 'react-i18next';

const Welcome = ({test}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <ScreenCard displayHeeader={false}>
      <View style={styles.logoView}>
        <Logo />
      </View>
      <ScreenTitle
        title={t('welcome_screen_title')}
        description={t('welcome_screen_description')}
        containerStyle={{marginTop: '10%'}}
      />

      <View style={styles.buttonGroup}>
        <View style={styles.buttonView}>
          <CustomButton
            text={t('get_started')}
            onPress={() => console.log("'hi")}
          />
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            text={t('i_have_already_an_account')}
            onPress={() => navigation.push(routes.auth.Login)}
            isPlain={true}
          />
        </View>
      </View>
    </ScreenCard>
  );
};

const styles = StyleSheet.create({
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
    marginBottom: '20px',
  },
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
    fontSize: 18,
    textAlign: 'center',
  },
  buttonGroup: {marginTop: '10%'},
  buttonView: {marginBottom: '2%'},
});

export default Welcome;

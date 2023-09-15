import {useRoute, useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

import ScreenCard from '../ScreenCard';
import Logo from '../../components/Logo';
import {themeColor} from '../../navigations/AppNavigator';
import CustomButton from '../../components/CustomButton';

const Welcome = ({test}) => {
  const {colors} = useTheme();

  return (
    <ScreenCard>
      <View style={styles.logoView}>
        <Logo />
      </View>
      <View style={styles.greedingView}>
        <Text style={[styles.greedingHeaderTitleText, {color: colors.black}]}>
          Welcome to the Xarraf
        </Text>
        <Text
          style={[
            styles.greedingHeaderDescriptionText,
            {color: colors.blue_text},
          ]}>
          Join the future of xarraf crypto trading for corporates.
        </Text>
      </View>
      <View style={styles.buttonGroup}>
        <View style={styles.buttonView}>
          <CustomButton text="Get Started" onPress={() => console.log("'hi")} />
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            text="I already have account"
            onPress={() => console.log("'hi")}
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

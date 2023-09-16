import {Image, StyleSheet, View} from 'react-native';
import StaticImages from '../../constants/StaticImages';
export const LogoWhiteText = () => {
  return (
    <View style={styles.logoView}>
      <Image
        resizeMode="contain"
        style={styles.logoImage}
        source={StaticImages.appication.logo_white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoView: {
    width: 150,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
});

export default LogoWhiteText;

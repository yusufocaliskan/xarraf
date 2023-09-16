import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import LogoWhiteText from '../Logo/LogoWhiteText';
const ScreenHeader = ({containerStyle}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.headerView, containerStyle]}>
      <View>
        <LogoWhiteText />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',

    flexDirection: 'row',
  },
});

export default ScreenHeader;

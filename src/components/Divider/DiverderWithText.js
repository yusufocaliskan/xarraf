import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

export const DiverderWithText = ({text}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.dividerView}>
      <View style={[styles.line, {backgroundColor: colors.black_line}]}></View>
      <View style={styles.textView}>
        <Text style={[styles.text, {color: colors.gray_text2}]}>{text}</Text>
      </View>
      <View style={[styles.line, {backgroundColor: colors.black_line}]}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  dividerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  textView: {
    paddingHorizontal: 20,
  },
  line: {
    height: 1,
    width: '33%',
  },
});

export default DiverderWithText;

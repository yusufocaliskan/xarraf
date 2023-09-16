import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

const ScreenTitle = ({
  title,
  description,
  containerStyle,
  titleStyle,
  descriptionStyle,
}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.greedingView, containerStyle]}>
      <Text
        style={[
          styles.greedingHeaderTitleText,
          {color: colors.black},
          titleStyle,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.greedingHeaderDescriptionText,
          {color: colors.blue_text},
          descriptionStyle,
        ]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greedingView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  greedingHeaderTitleText: {
    fontSize: 24,
  },
  greedingHeaderDescriptionText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ScreenTitle;

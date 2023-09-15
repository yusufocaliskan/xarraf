import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Platform} from 'react-native';
import {hp, wp} from '../../utils/scaler';
//import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

const CustomButton = ({
  Icon,
  text,
  color,
  textColor,
  onPress,
  style,
  disabled,
  gradient,
  textStyle,
  isTextButton,
  textButtonTextStyle,
  isPlain,
}) => {
  //  const appStore = useSelector(state => state.app);
  const {colors} = useTheme();

  if (isTextButton) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.textButtonTextView]}>
        <Text
          style={[
            styles.textButtonTextStyle,
            textColor && {color: textColor},
            textStyle,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
  if (isPlain) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          {
            display: 'flex',
            width: '100%',
            height: Platform.OS == 'android' ? hp(8) : hp(7.5),
            borderRadius: 10,
            backgroundColor: disabled
              ? colors.gray_bg
              : color
              ? color
              : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: 10,
            borderWidth: !disabled && 1,
            borderColor: !disabled && colors.black,
          },
          styles.buttonView,
          style,
        ]}>
        <View style={[styles.textView]}>
          <View style={styles.buttonIcon}>{Icon && <Icon />}</View>
          <Text
            style={[
              styles.buttonText,
              {color: colors.black},

              textColor && {color: textColor},
              textStyle,
              disabled && {color: colors.gray_text},
            ]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          display: 'flex',
          width: '100%',
          height: Platform.OS == 'android' ? hp(8) : hp(7.5),
          borderRadius: 15,
          backgroundColor: disabled
            ? colors.gray_bg
            : color
            ? color
            : colors.green,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: 10,
        },
        styles.buttonView,
        style,
      ]}>
      <View style={[styles.textView]}>
        <View style={styles.buttonIcon}>{Icon && <Icon />}</View>
        <Text
          style={[
            styles.buttonText,
            {color: colors.black},
            textColor && {color: textColor},
            textStyle,
            disabled && {color: colors.gray_text},
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {},
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonIcon: {
    width: 23,
  },
  buttonText: {
    fontSize: hp(2.3),
    textAlign: 'center',
    //...fonts.bold,
  },
  textButtonTextStyle: {
    fontSize: hp(1.9),
    //...fonts.medium,
  },
  textButtonTextView: {
    alignContent: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});

export default CustomButton;

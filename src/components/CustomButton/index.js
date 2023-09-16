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
  textStyle,
  isTextButton,
  isIconButton,
  isPlain,
  iconButtonStyle,
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
            {color: colors.green},
            textColor && {color: textColor},
            textStyle,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
  if (isIconButton) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.iconButtonView, iconButtonStyle]}>
        <Icon />
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
            height: Platform.OS == 'android' ? hp(7) : hp(6.5),
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
          height: Platform.OS == 'android' ? hp(7) : hp(6.5),
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
    fontSize: hp(2),
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
  iconButtonView: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default CustomButton;

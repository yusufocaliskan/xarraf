import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import EyeIcon from '../../components/Icons/EyeIcon';
// import {colors, fonts} from '../../theme';
import EyeOnIcon from '../Icons/EyeOnIcon';
import CloseIcon from '../Icons/CloseIcon';
import {useTheme} from '@react-navigation/native';
// import useThemeDirection from '../../hooks/useThemeDirection';
// import {useTranslation} from 'react-i18next';
const FormTextInput = ({
  value,
  setValue,
  Icon,
  name,
  placeholder,
  secure,
  isFocused,
  editable = true,
  copyable,
  style,
  optional,
  inputStyle,
  numberOfLines,
  multiline,
  height,
}) => {
  const [isSecure, setSecure] = useState(secure);
  //   const {t} = useTranslation();
  //   const {getThemeDirection, isRTL} = useThemeDirection();
  const [getStyle, setStyle] = useState(style);
  const {colors} = useTheme();
  const [getInputTextColor, setInputTextColor] = useState(colors.gray_text);
  const inputRef = useRef();

  const handleOnChange = text => {
    setStyle({borderColor: colors.turquoise});
    setValue(text);
  };

  //focus it
  const handleOnPressCard = () => {
    inputRef?.current?.focus();
  };

  useEffect(() => {
    if (isFocused) {
      inputRef?.current?.focus();
    }
  }, [isFocused, inputRef]);

  const handleOnFocus = () => {
    if (value) {
      setInputTextColor({color: colors.black});
    }
  };
  const handleOnBlur = () => {
    if (value) {
      setInputTextColor({color: colors.gray_text});
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleOnPressCard}
      style={{width: '100%'}}>
      <View
        style={[
          styles.formInputView,
          {backgroundColor: colors.gray_input},
          value && getStyle,
        ]}>
        <View style={[styles.inputInformation]}>
          {/* <Icon /> */}
          <Text style={[{color: colors.gray_text}, styles.inputName]}>
            {name}
          </Text>
          {optional && (
            <Text style={{fontSize: 16, color: colors.red_light2}}>
              Optional
            </Text>
          )}
        </View>
        <TextInput
          //textAlign={isRTL ? 'right' : 'left'}
          onChangeText={editable ? text => handleOnChange(text) : null}
          value={value}
          style={[
            styles.formInput,
            {color: value ? colors.black : colors.gray_text},
            getInputTextColor,
            inputStyle,
          ]}
          placeholderTextColor={colors.dark_arrow}
          placeholder={placeholder}
          secureTextEntry={isSecure}
          ref={inputRef}
          editable={editable}
          textAlignVertical="top"
          numberOfLines={numberOfLines}
          multiline={multiline}
          height={height}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />

        {!secure && value && (
          <TouchableOpacity style={[styles.eyeIcon]} onPress={() => setValue()}>
            <CloseIcon />
          </TouchableOpacity>
        )}
        {secure && value && (
          <TouchableOpacity
            style={[styles.eyeIcon]}
            onPress={() => setSecure(!isSecure)}>
            {isSecure && (
              <EyeIcon color={colors.dark_gray} style={{fontSize: 20}} />
            )}
            {!isSecure && (
              <EyeOnIcon color={colors.dark_gray} style={{fontSize: 20}} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eyeIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  formInputView: {
    padding: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  inputInformation: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
  inputName: {
    // ...fonts.medium
    fontWeight: '400',
  },
  formInput: {
    paddingVertical: 5,
    width: '100%',
    color: '#000',
    fontWeight: '500',
  },
});

export default FormTextInput;

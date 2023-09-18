import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';
import {hp, wp} from '../../../utils/scaler';
import {useTheme} from '@react-navigation/native';

const VerificationInput = ({
  val,
  setVal,
  handlePressKey,
  style,
  force2Focus,
  disabled,
  borderState,
  borderColorState,
  inputContainerStyle,
  showPassword,
  numberOfInputs,
  keyboardType = 'numeric',
}) => {
  const [showCaret, setShowCaret] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const intervalRef = useRef(null);
  const inputRef = useRef(null);
  const {colors} = useTheme();

  // Get the screen width and height
  const screenWidth = Dimensions.get('window').width;

  // Define a maximum width for each input
  const maxInputWidth = screenWidth / numberOfInputs - 15;

  useEffect(() => {
    if (isFocused) {
      intervalRef.current = setInterval(() => {
        setShowCaret(!showCaret);
      }, 500);
    } else {
      setShowCaret(false);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [showCaret, isFocused]);

  //   useEffect(() => {
  //     if (!val) setIsFocused(false);
  //     if (val) setIsFocused(true);
  //   }, [val]);

  useEffect(() => {
    setIsFocused(force2Focus);
  }, [force2Focus]);

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <View
      style={[
        styles.verificationInputView,
        inputContainerStyle,
        // {marginRight: numberOfInputs},
      ]}>
      <TextInput
        maxLength={1}
        caretHidden={true}
        keyboardType={keyboardType}
        secureTextEntry={showPassword}
        onKeyPress={handlePressKey}
        ref={inputRef}
        value={val}
        onChangeText={setVal}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.verificationInput,
          {backgroundColor: colors.gray_bg},
          style,
          borderState && {borderColor: borderColorState},
          {
            width: maxInputWidth,
            height: hp(50) / numberOfInputs,
          },
        ]}
      />
      {showCaret && (
        <View
          style={[
            styles.customInpuCaret,
            {backgroundColor: colors.green, width: maxInputWidth - 14},
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  verificationInput: {
    textAlign: 'center',
    fontSize: wp(10),
    borderRadius: 10,

    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  verificationInputView: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customInpuCaret: {
    height: 3,

    position: 'absolute',
    bottom: 7,
  },
});

export default VerificationInput;

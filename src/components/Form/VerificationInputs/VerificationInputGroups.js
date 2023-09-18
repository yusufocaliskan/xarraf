import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

// import useThemeDirection from '../../../hooks/useThemeDirection';
import VerificationInput from './VerificationInput';
import {useTheme} from '@react-navigation/native';
const VerificationInputGroups = ({
  code,
  setCode,
  setIsDisabled,
  numberOfInputs,
  showPassword,
  isSetMargin = true,
  verificationInputsGroupStyle,
  keyboardType,
}) => {
  const [borderState, setBorderState] = useState(false);
  const [borderColorState, setBorderColorState] = useState(false);
  const {colors} = useTheme();
  // const {getThemeDirection, isRTL} = useThemeDirection();
  useEffect(() => {
    if (code.length >= numberOfInputs) {
      setBorderColorState(colors.turquoise_light);
      setIsDisabled(false);
    } else {
      setBorderColorState(colors.turquoise);
      setIsDisabled(true);
    }
  }, [code]);

  const handlePressKey = useCallback(
    e => {
      e.persist();
      setBorderState(true);
      //push each number to the array
      if (e?.nativeEvent?.key != 'Backspace') {
        {
          if (code.length < numberOfInputs) {
            setCode(prev => [...prev, e.nativeEvent?.key]);
          } else {
          }
        }
      }

      //if its backspace, delete by one by
      if (e?.nativeEvent?.key == 'Backspace') {
        setCode(prev => prev.slice(0, -1));
      }
    },
    [code],
  );

  return (
    <>
      <View
        style={[
          styles.verificationInputsGroup,
          verificationInputsGroupStyle,
          // getThemeDirection?.view,
        ]}>
        {new Array(numberOfInputs).fill().map((item, index) => {
          return (
            <VerificationInput
              numberOfInputs={numberOfInputs}
              key={index}
              val={code[index]}
              force2Focus={index == code.length}
              focus={index == 0}
              handlePressKey={handlePressKey}
              borderState={borderState}
              borderColorState={borderColorState}
              keyboardType={keyboardType}
              // inputContainerStyle={
              //   isSetMargin && index == numberOfInputs / 2 && {marginRight: 19}
              // }
              showPassword={showPassword}
            />
          );
        })}
      </View>
    </>
  );
};

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  progresBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 25,
    // ...fonts.bold,
  },

  submitButtonView: {
    flex: 1,

    justifyContent: 'flex-end',
  },

  verificationInputsGroup: {
    flexDirection: 'row',
    gap: height < 750 ? 6 : 8,
    marginTop: 10,
  },
});

export default VerificationInputGroups;

import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View, Animated} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
//import {colors, fonts} from '../../theme';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useTheme} from '@react-navigation/native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {countDownTime} from '../../constants';
//import useThemeDirection from '../../hooks/useThemeDirection';

const {width, height} = Dimensions.get('window');
const circle_length = 125;
const R = circle_length / (2 * Math.PI);
console.log('R', R);

const ProgressCircle = ({
  whenTimeOut,
  step,
  totalSteps,
  isCountDown,
  progressRef,
  initialValue,
}) => {
  const circumference = 2 * Math.PI * R;
  const dashOffset = circumference / 2;
  const progressFraction = `${step}/${totalSteps}`;

  const {colors} = useTheme();
  const [getCount, setCount] = useState(countDownTime);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const animatedStrokeDashoffset = animatedValue.interpolate({
    inputRange: [0, totalSteps],
    outputRange: [dashOffset, -circumference],
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: step,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [step]);

  if (isCountDown) {
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (getCount > 0) {
          setCount(getCount - 1);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }, [getCount]);

    useEffect(() => {
      if (getCount <= 0) {
        whenTimeOut();
      }
    }, [getCount]);

    return (
      <AnimatedCircularProgress
        size={height / 6}
        width={15}
        fill={((countDownTime - getCount) / countDownTime) * 100}
        tintColor={colors.green}
        rotation={360}
        backgroundColor={colors.gray_bg}>
        {fill => (
          <Text style={{color: colors.green, fontSize: 50}}>
            {Math.floor(getCount)}
          </Text>
        )}
      </AnimatedCircularProgress>
    );
  }
  console.log('circle_length / 4', circle_length / 4);
  return (
    <View style={[styles.container]}>
      <Svg width={100} height={54} fill="white">
        {/* <Circle
          cx={circle_length / 4}
          cy={circle_length / 4}
          r={R}
          stroke={colors.green}
          strokeWidth={4}
        /> */}

        <Circle
          cx={circle_length / 4}
          cy={circle_length / 4}
          r={R}
          stroke={colors.green}
          strokeWidth={5}
        />
        <AnimatedCircle
          cx={circle_length / 4}
          cy={circle_length / 4}
          stroke={colors.gray_bg}
          strokeWidth={4}
          r={R}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={animatedStrokeDashoffset}
        />
      </Svg>
      <Text style={[styles.text, {color: colors.green}]}>
        {progressFraction}
      </Text>
    </View>
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const styles = StyleSheet.create({
  container: {position: 'relative', width: 50, marginTop: -12},
  text: {
    position: 'absolute',
    fontSize: 18,
    top: 20,
    left: 19,
  },
});

export default ProgressCircle;

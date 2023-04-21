import { Colors } from "assets";
import React, { useState } from "react";
import {
  Animated,
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { AnimationProps, AnimationDefault } from "animations";

export function BoxButton({
  style,
  disabled = false,
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
  } = AnimationDefault,
  backgroundColorAnimation = [Colors.gray0, Colors.gray10],
  borderColorAnimation = [Colors.gray40, Colors.gray90],
  ...props
}: PressableProps & {
  animation?: AnimationProps;
  backgroundColorAnimation?: string[];
  borderColorAnimation?: string[];
}) {
  const [pressAnimation] = useState(new Animated.Value(0));
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  const animatePress = () => {
    Animated.timing(pressAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(pressAnimation, {
        toValue: 0,
        duration: 100,
        delay: 300,
        useNativeDriver: false,
      }).start();
    });
  };

  const backgroundColorScale = pressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: backgroundColorAnimation,
  });

  const borderColorScale = pressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: borderColorAnimation,
  });

  return (
    <AnimatedPressable
      onPressIn={animatePress}
      style={[
        disabled ? styles.boxDisabled : styles.box,
        {
          backgroundColor: disabled ? Colors.gray10 : backgroundColorScale,
          borderColor: borderColorScale,
          opacity: opacity,
          transform: [
            { scale: scale },
            { translateX: translate.x },
            { translateY: translate.y },
          ],
        }, // animations
        style as ViewStyle,
      ]}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minHeight: 125,
    minWidth: 125,
    borderWidth: 1,
  },
  boxDisabled: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minHeight: 125,
    minWidth: 125,
    backgroundColor: Colors.gray20,
    borderColor: Colors.gray20,
  },
});

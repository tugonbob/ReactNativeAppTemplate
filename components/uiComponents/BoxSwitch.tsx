import { Colors } from "assets";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Pressable,
  PressableProps,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { AnimationProps, AnimationDefault } from "animations";

type BoxSwtichProps = PressableProps & { pressed: boolean };

export function BoxSwitch({
  style,
  pressed,
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
  } = AnimationDefault,
  ...props
}: BoxSwtichProps & { animation?: AnimationProps }) {
  const [pressAnimation] = useState(new Animated.Value(0));
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  useEffect(() => {
    if (pressed)
      Animated.timing(pressAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    else
      Animated.timing(pressAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
  }, [pressed]);

  const backgroundColorScale = pressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.gray0, Colors.gray10],
  });

  const borderWidthScale = pressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  const borderColorScale = pressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.gray40, Colors.gray70],
  });

  const paddingScale = pressAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 15],
  });

  return (
    <AnimatedPressable
      style={[
        styles.box,
        {
          backgroundColor: backgroundColorScale,
          borderWidth: borderWidthScale,
          borderColor: borderColorScale,
          padding: paddingScale,
          opacity: opacity,
          transform: [
            { scale: scale },
            { translateX: translate.x },
            { translateY: translate.y },
          ],
        }, // animations
        style as ViewStyle,
      ]}
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
    borderRadius: 12,
    minHeight: 125,
    minWidth: 125,
    borderColor: Colors.gray40,
  },
});

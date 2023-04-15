import {
  View,
  Text,
  PressableProps,
  Pressable,
  Animated,
  TextStyle,
  StyleSheet,
  ViewStyle,
} from "react-native";
import React from "react";
import { AnimationProps, AnimationDefault } from "animations";
import { Colors } from "assets";
import { B1 } from "../textComponents";

export function ColorButton({
  text,
  textStyle,
  style,
  disabled,
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
    fontSize = new Animated.Value(16),
  } = AnimationDefault,
  ...props
}: PressableProps & {
  text?: string;
  textStyle?: TextStyle;
  animation?: AnimationProps;
}) {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  return (
    <AnimatedPressable
      style={[
        disabled ? styles.containerDisabled : styles.container,
        {
          opacity: opacity,
          transform: [
            { scale: scale },
            {
              translateX: translate.x,
            },
            { translateY: translate.y },
          ],
        }, // animation
        style as ViewStyle,
      ]}
      disabled={disabled}
      {...props}
    >
      <B1
        style={[{ color: Colors.gray0 }, textStyle]}
        animation={{
          fontSize: fontSize,
        }}
      >
        {text}
      </B1>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 9,
    paddingVertical: 9,
    paddingHorizontal: 12,
  },
  containerDisabled: {
    backgroundColor: Colors.gray40,
    borderRadius: 9,
    paddingVertical: 9,
    paddingHorizontal: 12,
  },
});

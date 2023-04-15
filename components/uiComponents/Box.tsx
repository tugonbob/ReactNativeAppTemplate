import { Colors } from "assets";
import React, { useState } from "react";
import {
  Animated,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { AnimationProps, AnimationDefault } from "animations";

export function Box({
  style,
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
  } = AnimationDefault,
  ...props
}: ViewProps & { animation?: AnimationProps }) {
  return (
    <Animated.View
      style={[
        styles.box,
        {
          opacity: opacity,
          transform: [
            { scale: scale },
            { translateX: translate.x },
            { translateY: translate.y },
          ],
        }, // animations
        style as ViewStyle,
      ]}
    >
      {props.children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    minHeight: 125,
    minWidth: 125,
    padding: 16,
    borderColor: Colors.gray40,
  },
});

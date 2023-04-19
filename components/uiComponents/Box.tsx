import { AnimationDefault, AnimationProps } from "animations";
import { Colors } from "assets";
import React from "react";
import { Animated, StyleSheet, ViewProps, ViewStyle } from "react-native";

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

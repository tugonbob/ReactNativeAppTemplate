import { View, Text, ViewProps, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { AnimationProps, AnimationDefault } from "animations";

export function Row({
  style,
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
  } = AnimationDefault,
  ...props
}: ViewProps & { animation?: AnimationProps }) {
  return (
    <View style={[styles.defaultStyle, style as ViewStyle]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

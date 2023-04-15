import { View, Text, TextProps, StyleSheet } from "react-native";
import React from "react";
import { Animated } from "react-native";
import { AnimationDefault, AnimationProps } from "animations";
import { useFonts } from "expo-font";
import { Lato, Colors } from "assets";
import { Icon } from "../commonComponents";

export function Err({
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
    fontSize = new Animated.Value(12),
  } = {
    opacity: AnimationDefault.opacity,
    scale: AnimationDefault.scale,
    translate: AnimationDefault.translate,
    fontSize: new Animated.Value(12),
  },
  ...props
}: TextProps & { animation?: AnimationProps }) {
  const [fontsLoaded] = useFonts(Lato);

  if (!fontsLoaded) return null;

  return (
    <Animated.Text
      style={[
        styles.defaultStyle,
        {
          opacity: opacity,
          transform: [
            { scale: scale },
            { translateX: translate.x },
            { translateY: translate.y },
          ],
          fontSize: fontSize,
        }, // animations
        props.style,
      ]}
    >
      {props.children}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "LatoRegular",
    fontSize: 14,
    color: Colors.primary,
    marginBottom: 7,
  },
});

import { Colors } from "assets";
import React from "react";
import { Animated, StyleSheet, Text, TextProps } from "react-native";
import { AnimationProps, AnimationDefault } from "animations";
import { useFonts } from "expo-font";
import { Lato } from "assets";

export function B2({
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
    fontFamily: "LatoBold",
    fontSize: 14,
    color: Colors.gray90,
    marginBottom: 7,
  },
});

import { Colors } from "assets";
import React from "react";
import { StyleSheet, Text, TextProps, Animated } from "react-native";
import { AnimationProps, AnimationDefault } from "animations";
import { useFonts } from "expo-font";
import { Lato } from "assets";

export function H1({
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
    fontSize = new Animated.Value(32),
  } = {
    opacity: AnimationDefault.opacity,
    scale: AnimationDefault.scale,
    translate: AnimationDefault.translate,
    fontSize: new Animated.Value(32),
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
    fontSize: 32,
    color: Colors.gray90,
    marginBottom: 16,
  },
});

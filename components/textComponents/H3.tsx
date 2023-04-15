import { Colors, Lato } from "assets";
import { useFonts } from "expo-font";
import React from "react";
import { Animated, StyleSheet, TextProps } from "react-native";
import { AnimationDefault, AnimationProps } from "animations";

export function H3({
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
    fontSize = new Animated.Value(22),
  } = {
    opacity: AnimationDefault.opacity,
    scale: AnimationDefault.scale,
    translate: AnimationDefault.translate,
    fontSize: new Animated.Value(22),
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
    fontSize: 22,
    color: Colors.gray90,
    marginBottom: 11,
  },
});

import { Colors } from "assets";
import React from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { AnimationDefault, AnimationProps } from "animations";
import { H0, H1 } from "components/textComponents";
import { Icon } from "components/commonComponents/Icon";

export function Logo({
  mode = "full",
  size = 42,
  fixToTopLeft = false,
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
  } = AnimationDefault,
  containerStyle = {},
}: {
  mode?: "full" | "reduced" | "full-vertical";
  size?: number;
  fixToTopLeft?: boolean;
  containerStyle?: ViewStyle;
} & { animation?: AnimationProps }) {
  // set logo container style
  let logoContainerStyle: ViewStyle;
  if (mode === "full") {
    logoContainerStyle = styles.fullLogoContainer;
  } else if (mode === "full-vertical") {
    logoContainerStyle = styles.fullVerticalLogoContainer;
  } else {
    logoContainerStyle = styles.reducedLogoContainer;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        { flexDirection: mode === "full" ? "row" : "column" },
        fixToTopLeft ? { position: "absolute", top: 0, left: 0 } : undefined,
        {
          opacity,
          transform: [
            { scale },
            { translateX: translate.x },
            { translateY: translate.y },
          ],
        }, // animations
        containerStyle,
      ]}
    >
      <Icon
        nameAntDesign="codepen-circle"
        size={size}
        containerStyle={logoContainerStyle}
        color="white"
      />
      {mode === "reduced" ? null : mode === "full-vertical" ? (
        <H0>Chat Ai</H0>
      ) : (
        <H1>Chat Ai</H1>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
  fullLogoContainer: {
    marginRight: 8,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 9,
  },
  fullVerticalLogoContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  reducedLogoContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 9,
  },
});

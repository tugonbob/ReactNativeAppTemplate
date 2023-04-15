import { Animated } from "react-native";

export type AnimationProps = {
  opacity?: Animated.Value;
  scale?: Animated.Value;
  translate?: Animated.ValueXY;
  fontSize?: Animated.Value;
};

export const AnimationDefault = {
  opacity: new Animated.Value(1),
  scale: new Animated.Value(1),
  translate: new Animated.ValueXY({ x: 0, y: 0 }),
  fontSize: new Animated.Value(16),
};

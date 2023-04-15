import { Animated } from "react-native";

export function fillArrayWithAnimatedValue(length: number, initialValue = 0) {
  return Array.from(Array(length)).map(() => new Animated.Value(initialValue));
}

export function fillArrayWithAnimatedValueXY(
  length: number,
  initialValue = { x: 0, y: 0 }
) {
  return Array.from(Array(length)).map(
    () => new Animated.ValueXY(initialValue)
  );
}

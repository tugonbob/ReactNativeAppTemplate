import React from "react";
import { View } from "react-native";

export function Spacer({
  size = 24,
  horizontal,
}: {
  size?: number;
  horizontal?: boolean;
}) {
  const defaultValue = "auto";
  return (
    <View
      style={{
        height: !horizontal ? size : defaultValue,
        width: horizontal ? size : defaultValue,
      }}
    />
  );
}

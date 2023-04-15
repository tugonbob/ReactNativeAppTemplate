import { Colors } from "assets";
import React, { useEffect, useState } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { Row } from "components/commonComponents";

const { width, height } = Dimensions.get("screen");

export function ProgressBar({
  progressLength,
  progress,
}: {
  progressLength: number;
  progress: number;
}) {
  const [widthAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(widthAnimation, {
      toValue: 1,
      duration: 500,
      delay: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Row style={{ flex: 0, height: 5 }}>
      {/* Unanimated progress sections */}
      {Array(progress)
        .fill(undefined)
        .map((_, i) => (
          <View key={i} style={styles.finishedProgress} />
        ))}

      {/* Animated progress section */}
      <Animated.View
        style={{
          flex: widthAnimation,
          height: 5,
          backgroundColor: Colors.primary,
          borderBottomRightRadius: 5,
          borderTopRightRadius: 5,
        }}
      />

      {/* Unfinished progress sections */}
      {Array(progressLength - progress)
        .fill(undefined)
        .map((_, i) => (
          <View key={i} style={styles.unfinishedProgress} />
        ))}
    </Row>
  );
}

const styles = StyleSheet.create({
  finishedProgress: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: 5,
  },
  unfinishedProgress: {
    flex: 1,
    backgroundColor: Colors.gray20,
    height: 5,
  },
});

import { Colors } from "assets";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Row } from "components/commonComponents";

export function SwipeDots({ state }: { state?: any }) {
  return (
    <Row style={[styles.container]}>
      {state.routes.map((route: any, i: number) => {
        const isFocused = state.index === i;
        return (
          <View key={i} style={isFocused ? styles.selectedDot : styles.dot} />
        );
      })}
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10000,
    backgroundColor: Colors.gray30,
    marginHorizontal: 4,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 10000,
    backgroundColor: Colors.gray60,
    marginHorizontal: 4,
  },
});

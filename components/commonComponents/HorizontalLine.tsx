import { Colors } from "assets";
import { Row } from "components/commonComponents/Row";
import { P1 } from "components/textComponents";
import React from "react";
import { StyleSheet, TextStyle, View, ViewProps } from "react-native";

export function HorizontalLine({
  text = "",
  textStyle = {},
  style = {},
  ...props
}: ViewProps & { text?: string; textStyle?: TextStyle }) {
  if (text !== "")
    return (
      <Row>
        <View
          style={[styles.horizontalLine, { marginRight: 16 }, style]}
          {...props}
        />
        <P1 style={[{ color: Colors.gray50 }, textStyle]}>{text}</P1>
        <View
          style={[styles.horizontalLine, { marginLeft: 16 }, style]}
          {...props}
        />
      </Row>
    );

  return <View style={[styles.horizontalLine, style]} {...props} />;
}

const styles = StyleSheet.create({
  horizontalLine: {
    flex: 1,
    height: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray50,
    marginVertical: 32,
  },
});

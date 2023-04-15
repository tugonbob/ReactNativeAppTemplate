import { Colors } from "assets";
import { Row } from "components/commonComponents";
import React, { ReactElement, useEffect, useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { P1 } from "components/textComponents";

export function BoxInput({
  placeholder = "",
  placeholderTextColor = Colors.gray70,
  value = "",
  contentContainerStyle = {},
  style = {},
  leftIcon,
  rightIcon,
  onRightIconPress = () => {},
  leftPadding = 32,
  onChangeText = () => {},
  ...props
}: TextInputProps & {
  contentContainerStyle?: ViewStyle;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  onRightIconPress?: () => void;
  leftPadding?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [labelTranslateAnimation] = useState(
    new Animated.ValueXY({ x: 0, y: 0 })
  );
  const [fontSizeAnimation] = useState(new Animated.Value(16));

  useEffect(() => {
    if (value.length > 0) return focusAnimation();
    else unFocusAnimation();
  }, [placeholder]);

  const focusAnimation = () => {
    Animated.parallel([
      Animated.timing(labelTranslateAnimation, {
        toValue: Platform.OS === "ios" ? { x: 2, y: -8 } : { x: 0, y: -9 },
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(fontSizeAnimation, {
        toValue: 12,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const unFocusAnimation = () => {
    if (value.length !== 0) return;

    Animated.parallel([
      Animated.timing(labelTranslateAnimation, {
        toValue: { x: 0, y: 0 },
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(fontSizeAnimation, {
        toValue: 16,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={[styles.container, contentContainerStyle]}>
      <P1
        style={[styles.floatingLabel, { left: leftIcon ? leftPadding : 16 }]}
        animation={{
          translate: labelTranslateAnimation,
          fontSize: fontSizeAnimation,
        }}
      >
        {placeholder}
      </P1>
      <Row style={{ flex: 1, alignItems: "center" }}>
        {leftIcon ? <View style={{ marginLeft: 8 }}>{leftIcon}</View> : null}
        <TextInput
          style={[
            styles.box,
            { paddingLeft: leftIcon ? leftPadding : 16 },
            style,
          ]}
          onFocus={() => {
            setFocused(true);
            focusAnimation();
          }}
          onEndEditing={() => {
            setFocused(false);
            unFocusAnimation();
          }}
          value={value}
          onChangeText={(str: string) => onChangeText(str)}
          {...props}
        />
        {rightIcon ? (
          <Pressable
            style={{ position: "absolute", right: 8 }}
            onPress={() => onRightIconPress()}
          >
            {rightIcon}
          </Pressable>
        ) : null}
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 48,
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.gray40,
  },

  box: {
    flex: 1,
    position: "absolute",
    left: 0,
    width: "100%",
    paddingTop: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.gray90,
  },
  floatingLabel: {
    position: "absolute",
    textAlignVertical: "center",
    top: Platform.OS === "ios" ? 14 : 0,
    bottom: 0,
    padding: 0,
    left: 32,
    color: Colors.gray70,
  },
});

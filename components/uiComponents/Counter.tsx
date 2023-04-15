import { Colors } from "assets";
import React from "react";
import {
  Animated,
  ColorValue,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { AnimationDefault, AnimationProps } from "animations";
import { Icon } from "components/commonComponents";

export function Counter({
  value,
  onChangeText,
  containerStyle,
  textInputStyle,
  iconSize = 32,
  iconColor = Colors.gray70,
  initialValue = 0,
  min = 0,
  max = 99,
  increment = 1,
  disabled = false,
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
  } = AnimationDefault,
  ...props
}: TextInputProps & {
  value: string;
  onChangeText: (str: string) => void;
  containerStyle?: ViewStyle;
  textInputStyle?: ViewStyle & TextStyle;
  iconSize?: number;
  iconColor?: ColorValue;
  initialValue?: number;
  min?: number;
  max?: number;
  increment?: number;
  disabled?: boolean;
  animation?: AnimationProps;
}) {
  const onSubtract = () => {
    if (parseInt(value) - increment < min) return;
    onChangeText(parseInt(value) - increment + "");
  };

  const onAdd = () => {
    if (parseInt(value) + increment > max) return;
    onChangeText(parseInt(value) + increment + "");
  };

  const changeText = (num: string) => {
    if (parseInt(num) > max || parseInt(num) < min)
      return onChangeText(num.slice(0, -1));
    onChangeText(num);
  };

  return (
    <Animated.View
      style={[
        styles.containerDefaultStyle,
        {
          opacity: opacity,
          transform: [
            { scale: scale },
            { translateX: translate.x },
            { translateY: translate.y },
          ],
        },
        containerStyle,
      ]}
    >
      <Pressable onPress={onSubtract} disabled={disabled}>
        <Icon
          nameIonicons="remove-circle-outline"
          size={iconSize}
          containerStyle={styles.icon}
          color={disabled ? Colors.gray30 : iconColor}
        />
      </Pressable>
      <TextInput
        style={[
          styles.textInput,
          textInputStyle,
          disabled ? { color: Colors.gray30 } : null,
        ]}
        value={value}
        onChangeText={(num: string) => changeText(num)}
        keyboardType="numeric"
        editable={!disabled}
        {...props}
      />
      <Pressable onPress={onAdd} disabled={disabled}>
        <Icon
          nameIonicons="add-circle-outline"
          size={iconSize}
          containerStyle={styles.icon}
          color={disabled ? Colors.gray30 : iconColor}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  containerDefaultStyle: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    textAlign: "center",
    fontFamily: "LatoRegular",
    fontSize: 16,
    color: Colors.gray90,
    paddingHorizontal: 8,
    width: 36,
  },
  icon: {
    padding: 0,
    paddingLeft: 2,
    paddingTop: 2,
  },
});

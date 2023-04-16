import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "LoginPasswordScreen"
>;

export function LoginPasswordScreen({ navigation, route }: ScreenProps) {
  return (
    <View>
      <Text>LoginPasswordScreen</Text>
    </View>
  );
}

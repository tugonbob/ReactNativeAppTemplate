import { BoxButton, P1 } from "components";
import React from "react";
import { Text, View } from "react-native";
import { auth } from "../firebaseConfig";

export function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <BoxButton onPress={() => auth.signOut()}>
        <P1>Logout</P1>
      </BoxButton>
    </View>
  );
}

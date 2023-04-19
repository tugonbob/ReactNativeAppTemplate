import { BoxButton, H1, P1, ScrollableView } from "components";
import { auth } from "../firebaseConfig";
import React from "react";
import { Text, View } from "react-native";

export function HomeScreen() {
  return (
    <ScrollableView>
      <H1>Home Screen</H1>
      <BoxButton onPress={() => auth.signOut()}>
        <P1>Log out</P1>
      </BoxButton>
    </ScrollableView>
  );
}

import { BoxButton, H1, P1, ScrollableView } from "components";
import React from "react";
import { auth } from "../firebaseConfig";

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

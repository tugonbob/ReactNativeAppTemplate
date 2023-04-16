import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { H1, Link, Logo, P1, ScrollableView, Spacer } from "components";
import React from "react";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUpEmailVerificationScreen"
>;

export function SignUpVerificationScreen({ route }: ScreenProps) {
  return (
    <ScrollableView>
      <Logo mode="reduced" />
      <Spacer size={64} />
      <H1 style={{ textAlign: "center" }}>Verify email</H1>
      <P1 style={{ textAlign: "center" }}>
        We sent an email to {route.params.email}. Click the link inside to get
        started.
      </P1>
      <Spacer />
      <Link style={{ textAlign: "center" }}>Resend email</Link>
    </ScrollableView>
  );
}

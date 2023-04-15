import { View, Text } from "react-native";
import React from "react";
import {
  B1,
  BoxButton,
  BoxInput,
  H1,
  HorizontalLine,
  Logo,
  P1,
  P2,
  Row,
  ScrollableView,
  Spacer,
} from "components";
import { Colors } from "assets";
import GoogleAuthButton from "components/otherComponents/GoogleAuthButton";

export default function SignUpScreen() {
  return (
    <ScrollableView>
      <Logo mode="reduced" />
      <Spacer size={64} />
      <H1 style={{ textAlign: "center" }}>Create your account</H1>
      <P1 style={{ textAlign: "center" }}>
        Please note that phone verification is required for signup. Your number
        will only be used to verify your identity for security purposes.
      </P1>
      <Spacer />
      <BoxInput placeholder="Email address" />
      <Spacer />
      <BoxButton
        style={{
          minHeight: 48,
          padding: 0,
          backgroundColor: Colors.confirm,
          borderColor: Colors.confirm,
        }}
      >
        <B1 style={{ marginBottom: 0, color: Colors.gray0 }}>Continue</B1>
      </BoxButton>
      <Spacer />
      <Row style={{ justifyContent: "center" }}>
        <P1>Already have any account?</P1>
        <Spacer horizontal size={8} />
        <P1 style={{ color: Colors.primary }}>Login in</P1>
      </Row>
      <Row>
        <HorizontalLine style={{ marginRight: 8 }} />
        <P2 style={{ marginBottom: 0 }}>OR</P2>
        <HorizontalLine style={{ marginLeft: 8 }} />
      </Row>
      <GoogleAuthButton style={{ minHeight: 48 }} />
    </ScrollableView>
  );
}

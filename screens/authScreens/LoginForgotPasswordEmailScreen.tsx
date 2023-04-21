import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  BoxButton,
  H1,
  Icon,
  Link,
  Logo,
  P1,
  ScrollableView,
  Spacer,
} from "components";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import React, { useEffect } from "react";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "LoginForgotPasswordEmailScreen"
>;

export function LoginForgotPasswordEmailScreen({
  navigation,
  route,
}: ScreenProps) {
  useEffect(() => {
    sendRecoverEmail();
  }, []);

  function sendRecoverEmail() {
    sendPasswordResetEmail(auth, route.params.email);
  }

  return (
    <ScrollableView>
      <Logo mode="reduced" />
      <Spacer size={64} />
      <Icon
        nameFontisto="email"
        size="l"
        color={Colors.accent}
        containerStyle={{ alignItems: "center" }}
      />
      <H1 style={{ textAlign: "center" }}>Check your email</H1>
      <P1 style={{ textAlign: "center" }}>
        Please check the email address {route.params.email} for instructions to
        reset your password.
      </P1>
      <Spacer />
      <BoxButton
        onPress={() => {
          alert("Reset password email sent");
          sendRecoverEmail();
        }}
        style={{ minHeight: 48 }}
      >
        <P1 style={{ marginBottom: 0 }}>Resend email</P1>
      </BoxButton>
      <Spacer />
      <Link
        onPress={() =>
          navigation.navigate("LoginScreen", { email: route.params.email })
        }
        style={{ textAlign: "center" }}
      >
        Back to log in
      </Link>
    </ScrollableView>
  );
}

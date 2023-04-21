import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  B1,
  BoxButton,
  H1,
  H2,
  Link,
  Logo,
  P1,
  ScrollableView,
  Spacer,
} from "components";
import { sendEmailVerification } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../../firebaseConfig";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUpEmailVerificationScreen"
>;

export function SignUpVerificationScreen({ route, navigation }: ScreenProps) {
  useEffect(() => {
    sendVerifyEmail();
  }, [auth.currentUser?.emailVerified]);

  function sendVerifyEmail() {
    if (!auth.currentUser) return;
    sendEmailVerification(auth.currentUser);
  }

  return (
    <ScrollableView>
      <Logo mode="reduced" />
      <Spacer size={64} />
      <H1 style={{ textAlign: "center" }}>Verify your email</H1>
      <P1 style={{ textAlign: "center" }}>
        We sent an email to {route.params.email}. Click the link inside to get
        started.
      </P1>
      <Spacer />
      <Link
        onPress={() => {
          alert("Resent verification email");
          sendVerifyEmail();
        }}
        style={{ textAlign: "center" }}
      >
        Resend email
      </Link>
      <Spacer size={64} />
      <H2 style={{ textAlign: "center" }}>Done verifying?</H2>
      <P1 style={{ textAlign: "center" }}>
        Login in after you are done verifiying
      </P1>
      <Spacer />
      <BoxButton
        onPress={() =>
          navigation.navigate("LoginPasswordScreen", {
            email: route.params.email,
          })
        }
        style={{
          minHeight: 48,
          backgroundColor: Colors.primary,
          borderColor: Colors.primary,
        }}
      >
        <B1 style={{ color: Colors.gray0, marginBottom: 0 }}>Back to login</B1>
      </BoxButton>
    </ScrollableView>
  );
}

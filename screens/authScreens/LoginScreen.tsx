import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  B1,
  BoxButton,
  BoxInput,
  Err,
  H1,
  HorizontalLine,
  Link,
  Logo,
  P1,
  P2,
  Row,
  ScrollableView,
  Spacer,
} from "components";
import GoogleAuthButton from "components/otherComponents/GoogleAuthButton";
import React, { useState } from "react";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

export function LoginScreen({ navigation, route }: ScreenProps) {
  const [email, setEmail] = useState(route.params.email);
  const [emailColor, setEmailColor] = useState(Colors.gray40);
  const [emailError, setEmailError] = useState("");

  function submitEmail() {
    // Regular expression to check for valid email addresses
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Return true if the string matches the regular expression
    const isValidEmail = regex.test(email);

    if (!isValidEmail) {
      setEmailColor(Colors.cancel);
      return setEmailError("Please provide a valid email");
    }

    navigation.navigate("LoginPasswordScreen", { email });
  }

  return (
    <ScrollableView>
      <Logo mode="reduced" />
      <Spacer size={64} />
      <H1 style={{ textAlign: "center" }}>Welcome back</H1>
      <BoxInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholderStyle={{ color: emailColor }}
        contentContainerStyle={{ borderColor: emailColor }}
        onFocus={() => setEmailColor(Colors.primary)}
      />
      {emailError ? <Err style={{ marginBottom: 0 }}>{emailError}</Err> : null}
      <Spacer />
      <BoxButton
        onPress={submitEmail}
        style={{
          minHeight: 48,
          borderColor: Colors.primary,
          backgroundColor: Colors.primary,
        }}
      >
        <B1 style={{ marginBottom: 0, color: Colors.gray0 }}>Continue</B1>
      </BoxButton>
      <Spacer />
      <Row style={{ justifyContent: "center" }}>
        <P1>Don't have an account?</P1>
        <Spacer horizontal size={8} />
        <Link
          onPress={() => navigation.navigate("SignUpScreen", { email: email })}
        >
          Sign up
        </Link>
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

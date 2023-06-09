import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  B1,
  BoxButton,
  BoxInput,
  Err,
  H1,
  Link,
  Logo,
  P1,
  Row,
  ScrollableView,
  Spacer,
} from "components";
import React, { useState } from "react";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "SignUpScreen">;

export function SignUpScreen({ navigation, route }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailColor, setEmailColor] = useState(Colors.gray40);

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

    navigation.navigate("SignUpPasswordScreen", { email });
  }

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
      <BoxInput
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        placeholderStyle={{ color: emailColor }}
        contentContainerStyle={{ borderColor: emailColor }}
        onFocus={() => setEmailColor(Colors.primary)}
      />
      {emailError ? <Err>{emailError}</Err> : null}
      <Spacer />
      <BoxButton
        onPress={submitEmail}
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
        <Link onPress={() => navigation.navigate("LoginScreen", { email })}>
          Log in
        </Link>
      </Row>
    </ScrollableView>
  );
}

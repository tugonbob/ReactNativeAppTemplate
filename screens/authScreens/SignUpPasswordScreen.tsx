import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  B1,
  Box,
  BoxButton,
  BoxInput,
  H1,
  Icon,
  Link,
  Logo,
  P1,
  Row,
  ScrollableView,
  Spacer,
} from "components";
import React, { useState } from "react";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUpPasswordScreen"
>;

export function SignUpPasswordScreen({ navigation, route }: ScreenProps) {
  const [password, setPassword] = useState("");
  const [showPassRequirements, setShowPassRequirements] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordColor, setPasswordColor] = useState(Colors.gray40);

  function submitPassword() {
    if (!isValidPassword()) return setPasswordColor(Colors.cancel);

    navigation.navigate("SignUpEmailVerificationScreen", {
      email: route.params.email,
    });
  }

  function isValidPassword() {
    if (password.length < 8) return false;
    if (password.includes(" ")) return false;
    return true;
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
        placeholder="Email"
        value={route.params.email}
        rightIcon={
          <Link
            onPress={() =>
              navigation.navigate("SignUpScreen", { email: route.params.email })
            }
            style={{ marginBottom: 0 }}
          >
            Edit
          </Link>
        }
      />

      <Spacer size={8} />
      <BoxInput
        placeholder="Password"
        secureTextEntry={hidePassword}
        placeholderStyle={{
          color: passwordColor,
        }}
        value={password}
        onChangeText={(pass) => {
          setPassword(pass);
          setShowPassRequirements(true);
        }}
        rightIcon={
          hidePassword ? (
            <Icon nameIonicons="eye-outline" size="x5" />
          ) : (
            <Icon nameIonicons="eye-off-outline" size="x5" />
          )
        }
        onRightIconPress={() => {
          setHidePassword(!hidePassword);
        }}
        contentContainerStyle={{
          maxHeight: 48,
          borderColor: passwordColor,
        }}
        onFocus={() => {
          setPasswordColor(Colors.primary);
        }}
      />
      <Spacer size={8} />
      {showPassRequirements ? (
        <Box
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minHeight: 0,
          }}
        >
          <P1>Your password must contain:</P1>
          {password.length < 8 ? (
            <P1>{"  \u2022\t"} At least 8 characters</P1>
          ) : (
            <P1 style={{ color: "green" }}>
              {"  \u2713\t"}At least 8 characters
            </P1>
          )}
          {password.includes(" ") ? (
            <P1>{"  \u2022\t"} Cannot contain spaces</P1>
          ) : (
            <P1 style={{ color: "green" }}>
              {"  \u2713\t"} Cannot contain spaces
            </P1>
          )}
        </Box>
      ) : null}
      <Spacer />
      <BoxButton
        onPress={submitPassword}
        style={{
          minHeight: 48,
          backgroundColor: Colors.confirm,
          borderColor: Colors.confirm,
        }}
      >
        <B1 style={{ color: Colors.gray0, marginBottom: 0 }}>Continue</B1>
      </BoxButton>
      <Spacer />
      <Row style={{ justifyContent: "center" }}>
        <P1>Already have an account?</P1>
        <Spacer horizontal size={4} />
        <Link onPress={() => {}}>Log in</Link>
      </Row>
    </ScrollableView>
  );
}

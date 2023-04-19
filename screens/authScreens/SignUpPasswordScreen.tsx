import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  B1,
  Box,
  BoxButton,
  BoxInput,
  Err,
  H1,
  Icon,
  Link,
  Logo,
  P1,
  Row,
  ScrollableView,
  Spacer,
} from "components";
import { AuthError, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebaseConfig";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "SignUpPasswordScreen"
>;

export function SignUpPasswordScreen({ navigation, route }: ScreenProps) {
  const [password, setPassword] = useState("");
  const [showPassRequirements, setShowPassRequirements] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordColor, setPasswordColor] = useState(Colors.gray40);
  const [passwordError, setPasswordError] = useState("");
  const [emailColor, setEmailColor] = useState(Colors.gray40);
  const [emailError, setEmailError] = useState("");

  async function submitPassword() {
    if (!isValidPassword()) {
      setShowPassRequirements(true);
      return setPasswordColor(Colors.cancel);
    }

    await createUserWithEmailAndPassword(auth, route.params.email, password)
      .then(() => {
        navigation.navigate("SignUpEmailVerificationScreen", {
          email: route.params.email,
        });
      })
      .catch((e: AuthError) => {
        if (e.code === "auth/email-already-in-use") {
          setEmailError("Email already in use. Please log in");
          setEmailColor(Colors.cancel);
        } else if (
          e.code === "auth/invalid-email" ||
          e.code === "auth/invalid-email"
        ) {
          setEmailError("Invalid email");
          setEmailColor(Colors.cancel);
        } else {
          setPasswordError(
            "An internal error occured. Please try again in a moment"
          );
          setPasswordColor(Colors.cancel);
        }
      });
  }

  function isValidPassword() {
    if (password.length < 8) return false;
    if (password.includes(" ")) return false;
    return true;
  }

  return (
    <ScrollableView bottomSpacer>
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
        editable={false}
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
        contentContainerStyle={{ borderColor: emailColor }}
        placeholderStyle={{ color: emailColor }}
      />
      {emailError ? <Err>{emailError}</Err> : null}
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
          if (isValidPassword()) setPasswordColor(Colors.primary);
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
      {passwordError ? <Err>{passwordError}</Err> : null}

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
        <Link
          onPress={() =>
            navigation.navigate("LoginScreen", { email: route.params.email })
          }
        >
          Log in
        </Link>
      </Row>
    </ScrollableView>
  );
}

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  B1,
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
import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebaseConfig";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "LoginPasswordScreen"
>;

export function LoginPasswordScreen({ navigation, route }: ScreenProps) {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordColor, setPasswordColor] = useState(Colors.gray40);
  const [passwordError, setPasswordError] = useState("");

  async function submitPassword() {
    await signInWithEmailAndPassword(auth, route.params.email, password)
      .then(() => {
        navigation.replace("HomeTabs");
      })
      .catch((e: AuthError) => {
        setPasswordColor(Colors.cancel);
        if (
          e.code === "auth/invalid-password" ||
          e.code === "auth/user-not-found" ||
          e.code === "auth/wrong-password"
        ) {
          setPasswordError("Invalid password or email");
        } else {
          setPasswordError(
            "An internal error occured. Please try again in a moment"
          );
        }
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
      <H1 style={{ textAlign: "center" }}>Enter your password</H1>
      <Spacer />
      <BoxInput
        placeholder="Email"
        value={route.params.email}
        rightIcon={
          <Link
            onPress={() =>
              navigation.navigate("LoginScreen", { email: route.params.email })
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
      <Link
        onPress={() =>
          navigation.navigate("LoginForgotPasswordScreen", {
            email: route.params.email,
          })
        }
      >
        Forgot password?
      </Link>
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
        <P1>Don't have an account?</P1>
        <Spacer horizontal size={4} />
        <Link
          onPress={() =>
            navigation.navigate("SignUpScreen", { email: route.params.email })
          }
        >
          Sign up
        </Link>
      </Row>
    </ScrollableView>
  );
}

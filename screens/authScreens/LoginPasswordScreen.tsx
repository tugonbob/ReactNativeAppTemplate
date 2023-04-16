import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  B1,
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
  "LoginPasswordScreen"
>;

export function LoginPasswordScreen({ navigation, route }: ScreenProps) {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [passwordColor, setPasswordColor] = useState(Colors.gray40);

  function submitPassword() {
    if (!isValidPassword()) {
      return setPasswordColor(Colors.cancel);
    }

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
      <H1 style={{ textAlign: "center" }}>Enter your password</H1>
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
        autoFocus
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

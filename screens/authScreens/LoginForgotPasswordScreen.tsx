import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import {
  B1,
  BoxButton,
  BoxInput,
  H1,
  Link,
  Logo,
  P1,
  ScrollableView,
  Spacer,
} from "components";
import React, { useState } from "react";

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "LoginForgotPasswordScreen"
>;

export function LoginForgotPasswordScreen({ navigation, route }: ScreenProps) {
  const [email, setEmail] = useState(route.params.email);
  const [emailColor, setEmailColor] = useState(Colors.gray40);

  return (
    <ScrollableView>
      <Logo mode="reduced" />
      <Spacer size={64} />
      <H1>Reset your password</H1>
      <P1>
        Enter your email address and we will send you instructions to reset your
        password.
      </P1>
      <Spacer />
      <BoxInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        onFocus={() => setEmailColor(Colors.primary)}
        placeholderStyle={{
          color: emailColor,
        }}
        contentContainerStyle={{ borderColor: emailColor }}
      />
      <Spacer size={16} />
      <BoxButton
        onPress={() =>
          navigation.navigate("LoginForgotPasswordEmailScreen", {
            email: email,
          })
        }
        style={{
          minHeight: 48,
          backgroundColor: Colors.primary,
          borderColor: Colors.primary,
        }}
      >
        <B1 style={{ marginBottom: 0, color: Colors.gray0 }}>Continue</B1>
      </BoxButton>
      <Spacer />
      <Link
        onPress={() => navigation.navigate("LoginScreen", { email: email })}
        style={{ textAlign: "center" }}
      >
        Back to log in
      </Link>
    </ScrollableView>
  );
}

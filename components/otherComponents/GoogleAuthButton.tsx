import { BoxButton } from "components/uiComponents";
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, googleAuth } from "../../firebaseConfig";
import { PressableProps } from "react-native";
import { Icon, Row, Spacer } from "components/commonComponents";
import { P1 } from "components/textComponents";

export default function GoogleAuthButton({
  errorMsg,
  ...props
}: {
  errorMsg?: string;
} & PressableProps) {
  async function googleSignIn() {
    await signInWithPopup(auth, googleAuth)
      .then(() => console.log("success"))
      .catch((e) => console.log("sjdfi", e));
  }

  return (
    <BoxButton onPress={googleSignIn} {...props}>
      <Row>
        <Icon png={require("assets/customIcons/googleLogo.png")} size={24} />
        <Spacer horizontal size={8} />
        <P1 style={{ marginBottom: 0 }}>Continue with Google</P1>
      </Row>
    </BoxButton>
  );
}

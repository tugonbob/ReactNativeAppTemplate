import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { Colors } from "assets";
import { Logo } from "components";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { auth } from "../../firebaseConfig";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "SplashScreen">;

export function SplashScreen({ navigation }: ScreenProps) {
  const [opacityAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, (user) => {
        if (user && user.emailVerified) {
          navigation.replace("HomeScreen");
        } else if (user) {
          navigation.navigate("SignUpEmailVerificationScreen", {
            email: "" + user.email,
          });
        } else {
          navigation.replace("SignUpScreen", { email: "" });
        }
      });
    }, 1000);
  }, []);

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Logo mode="full-vertical" animation={{ opacity: opacityAnimation }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gray0,
  },
});

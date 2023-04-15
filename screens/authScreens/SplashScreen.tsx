import { Colors } from "assets";
import { H1, Logo } from "components";
import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { auth, db } from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export function SplashScreen({ navigation }: { navigation: any }) {
  const [opacityAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigation.replace("HomeScreen");
        } else {
          navigation.replace("SignUpScreen");
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

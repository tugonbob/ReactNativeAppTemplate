import { Colors } from "assets";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from "react-native";
import { Spacer } from "components/commonComponents";
import { useHeaderHeight } from "@react-navigation/elements";

export function ScrollableView({
  bottomSpacer = false,
  ...props
}: ScrollViewProps & { bottomSpacer?: boolean }) {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewDefaultStyle}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={
          Platform.OS === "ios" ? headerHeight : undefined
        }
      >
        <ScrollView
          style={[styles.scrollViewDefaultStyle, props.style]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          {...props}
        >
          {props.children}
          {bottomSpacer ? <Spacer size={200} /> : null}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingViewDefaultStyle: {
    flex: 1,
    backgroundColor: Colors.gray0,
  },
  scrollViewDefaultStyle: {
    flex: 1,
    padding: 32,
  },
});

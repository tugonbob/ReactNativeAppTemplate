import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "assets";
import { Spacer } from "components/commonComponents";
import React, { forwardRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from "react-native";

export const ScrollableView = forwardRef(
  (
    {
      bottomSpacer = false,
      ...props
    }: ScrollViewProps & {
      bottomSpacer?: boolean;
    },
    ref: any
  ) => {
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
            ref={ref}
            style={[styles.scrollViewDefaultStyle, props.style]}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            {...props}
          >
            {props.children}
            {bottomSpacer ? <Spacer size={100} /> : null}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
);

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

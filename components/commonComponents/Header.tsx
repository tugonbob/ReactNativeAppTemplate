import { Colors } from "assets";
import Constants from "expo-constants";
import React from "react";
import { ColorValue, Pressable, StyleSheet, View } from "react-native";
import { ColorButton } from "components/uiComponents/ColorButton";
import { B1 } from "components/textComponents/B1";
import { Icon } from "components/commonComponents/Icon";

export function Header({
  hidden = false,
  onBackButtonPress,
  onCloseButtonPress,
  onNextButtonPress,
  nextButtonDisabled = false,
  onSaveButtonPress,
  saveButtonDisabled = false,
  onDeleteButtonPress,
  height = 84 + Constants.statusBarHeight,
  backgroundColor = Colors.gray0,
  title = "",
}: {
  hidden?: boolean;
  onBackButtonPress?: () => void;
  onCloseButtonPress?: () => void;
  onNextButtonPress?: () => void;
  nextButtonDisabled?: boolean;
  onSaveButtonPress?: () => void;
  saveButtonDisabled?: boolean;
  onDeleteButtonPress?: () => void;
  height?: number;
  backgroundColor?: ColorValue;
  title?: string;
}) {
  if (hidden) height = Constants.statusBarHeight + 20; // ios header heigth is 20

  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        height: height,
        backgroundColor: backgroundColor,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.leftButtonsContainer}>
          {onBackButtonPress ? (
            <Pressable
              onPress={() => onBackButtonPress()}
              style={styles.leftButtons}
            >
              <Icon nameIonicons="arrow-back" size={24} />
            </Pressable>
          ) : null}
          {onCloseButtonPress ? (
            <Pressable
              onPress={() => onCloseButtonPress()}
              style={styles.leftButtons}
            >
              <Icon nameIonicons="close" size={24} />
            </Pressable>
          ) : null}
        </View>

        <View style={styles.centerContainer}>
          {title !== "" ? <B1>{title}</B1> : null}
        </View>

        <View style={styles.rightButtonsContainer}>
          {onDeleteButtonPress ? (
            <Pressable
              onPress={() => onDeleteButtonPress()}
              style={[styles.rightButtons]}
            >
              <Icon
                nameIonicons="trash-outline"
                size={24}
                color={Colors.primary}
              />
            </Pressable>
          ) : null}
          {onSaveButtonPress ? (
            <ColorButton
              onPress={() => onSaveButtonPress()}
              style={[
                styles.rightButtons,
                saveButtonDisabled
                  ? styles.fullButtonContainerDisabled
                  : styles.fullButtonContainer,
              ]}
              text="Save"
              disabled={saveButtonDisabled}
            />
          ) : null}
          {onNextButtonPress ? (
            <ColorButton
              onPress={() => onNextButtonPress()}
              style={[
                styles.rightButtons,
                nextButtonDisabled
                  ? styles.fullButtonContainerDisabled
                  : styles.fullButtonContainer,
              ]}
              text="Next"
              disabled={nextButtonDisabled}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
    height: 84,
  },
  leftButtonsContainer: {
    position: "absolute",
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 84,
    zIndex: 1,
  },
  leftButtons: {
    marginRight: 16,
  },
  rightButtonsContainer: {
    position: "absolute",
    right: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 84,
    zIndex: 1,
  },
  rightButtons: {
    marginLeft: 16,
  },
  fullButtonContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 9,
    paddingVertical: 9,
    paddingHorizontal: 12,
  },
  fullButtonContainerDisabled: {
    backgroundColor: Colors.gray40,
    borderRadius: 9,
    paddingVertical: 9,
    paddingHorizontal: 12,
  },
});

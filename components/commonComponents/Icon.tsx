import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import { Colors, Sizes } from "assets";
import React from "react";
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextProps,
  View,
  ViewStyle,
} from "react-native";
import { AnimationDefault, AnimationProps } from "animations";
import { SizeType } from "assets";

type IconProps = TextProps & {
  size?: SizeType | number;
  color?: ColorValue;
  containerStyle?: ViewStyle;
  iconStyle?: ViewStyle;
  backdrop?: boolean;
  nameAntDesign?: keyof typeof AntDesign.glyphMap;
  nameEntypo?: keyof typeof Entypo.glyphMap;
  nameEvilIcons?: keyof typeof EvilIcons.glyphMap;
  nameFeather?: keyof typeof Feather.glyphMap;
  nameFontAwesome?: keyof typeof FontAwesome.glyphMap;
  nameFontAwesome5?: keyof typeof FontAwesome5.glyphMap;
  nameFontisto?: keyof typeof Fontisto.glyphMap;
  nameFoundation?: keyof typeof Foundation.glyphMap;
  nameIonicons?: keyof typeof Ionicons.glyphMap;
  nameMaterialCommunityIcons?: keyof typeof MaterialCommunityIcons.glyphMap;
  nameMaterialIcons?: keyof typeof MaterialIcons.glyphMap;
  nameOcticons?: keyof typeof Octicons.glyphMap;
  nameSimpleLineIcons?: keyof typeof SimpleLineIcons.glyphMap;
  nameZocial?: keyof typeof Zocial.glyphMap;
  png?: ImageSourcePropType;
};

export function Icon({
  size = 32,
  color = Colors.gray90,
  style,
  containerStyle,
  iconStyle,
  backdrop,
  nameAntDesign,
  nameEntypo,
  nameEvilIcons,
  nameFeather,
  nameFontAwesome,
  nameFontAwesome5,
  nameFontisto,
  nameFoundation,
  nameIonicons,
  nameMaterialCommunityIcons,
  nameMaterialIcons,
  nameOcticons,
  nameSimpleLineIcons,
  nameZocial,
  png,
  animation: {
    opacity = AnimationDefault.opacity,
    scale = AnimationDefault.scale,
    translate = AnimationDefault.translate,
  } = AnimationDefault,
  ...props
}: IconProps & { animation?: AnimationProps }) {
  if (typeof size === "string") size = Sizes[size];

  return (
    <View
      style={[
        styles.defaultContainerStyle,
        backdrop ? styles.backdrop : undefined,
        containerStyle as ViewStyle,
      ]}
    >
      {png ? (
        <Image style={{ height: size, width: size }} source={png} {...props} />
      ) : nameAntDesign ? (
        <AntDesign
          style={iconStyle}
          name={nameAntDesign}
          size={size}
          color={color}
          {...props}
        />
      ) : nameEntypo ? (
        <Entypo
          style={iconStyle}
          name={nameEntypo}
          size={size}
          color={color}
          {...props}
        />
      ) : nameEvilIcons ? (
        <EvilIcons
          style={iconStyle}
          name={nameEvilIcons}
          size={size}
          color={color}
          {...props}
        />
      ) : nameFeather ? (
        <Feather
          style={iconStyle}
          name={nameFeather}
          size={size}
          color={color}
          {...props}
        />
      ) : nameFontAwesome ? (
        <FontAwesome
          style={iconStyle}
          name={nameFontAwesome}
          size={size}
          color={color}
          {...props}
        />
      ) : nameFontAwesome5 ? (
        <FontAwesome5
          style={iconStyle}
          name={nameFontAwesome5}
          size={size}
          color={color}
          {...props}
        />
      ) : nameFontisto ? (
        <Fontisto
          style={iconStyle}
          name={nameFontisto}
          size={size}
          color={color}
          {...props}
        />
      ) : nameFoundation ? (
        <Foundation
          style={iconStyle}
          name={nameFoundation}
          size={size}
          color={color}
          {...props}
        />
      ) : nameIonicons ? (
        <Ionicons
          style={iconStyle}
          name={nameIonicons}
          size={size}
          color={color}
          {...props}
        />
      ) : nameMaterialCommunityIcons ? (
        <MaterialCommunityIcons
          style={iconStyle}
          name={nameMaterialCommunityIcons}
          size={size}
          color={color}
          {...props}
        />
      ) : nameMaterialIcons ? (
        <MaterialIcons
          style={iconStyle}
          name={nameMaterialIcons}
          size={size}
          color={color}
          {...props}
        />
      ) : nameOcticons ? (
        <Octicons
          style={iconStyle}
          name={nameOcticons}
          size={size}
          color={color}
          {...props}
        />
      ) : nameSimpleLineIcons ? (
        <SimpleLineIcons
          style={iconStyle}
          name={nameSimpleLineIcons}
          size={size}
          color={color}
          {...props}
        />
      ) : nameZocial ? (
        <Zocial
          style={iconStyle}
          name={nameZocial}
          size={size}
          color={color}
          {...props}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  defaultContainerStyle: {
    padding: 4,
  },
  backdrop: {
    backgroundColor: Colors.gray20,
    borderRadius: 8,
    padding: 8,
  },
});

/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../assets/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const textInput = ({
  placeholder,
  text,
  value,
  onChangeText,
  height,
  textAlignVertical,
  backgroundColor,
  borderWidth,
  borderRadius,
  keyboardType,
  padding,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.lightText}
        style={[
          styles.textInput,
          { height: height ? height : hp("7%") },
          {
            backgroundColor: backgroundColor
              ? backgroundColor
              : Colors.background,
          },
          { borderWidth: borderWidth ? borderWidth : null },
          { borderRadius: borderRadius ? borderRadius : 7 },
          { padding: padding ? padding : 0 },
        ]}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        textAlignVertical={textAlignVertical}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default textInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: Colors.transparent,
  },
  secondView: {
    bottom: hp("1%"),
  },
  textInput: {
    paddingLeft: wp("5%"),
    width: wp("82%"),
    borderColor: Colors.secondary,
    backgroundColor: Colors.secondary,
    borderRadius: 7,
  },
  textStyle: {
    fontSize: 15,
    color: Colors.titleColor,
    fontWeight: "bold",
  },
});

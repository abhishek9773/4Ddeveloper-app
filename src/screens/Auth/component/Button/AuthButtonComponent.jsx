import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import authButtonStyle from "./authButtonStyle";

export default function AuthButtonComponent({
  title,
  buttonColor,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[authButtonStyle.button, { backgroundColor: buttonColor }]}
    >
      <Text style={authButtonStyle.text}>{title}</Text>
    </TouchableOpacity>
  );
}

import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import password_input_field_style from "./password_input_field_style";
import UserInputFieldComponent from "../user-input/UserInputFieldComponent";

export default function PasswordInputFieldComponent() {
  const { lableStyle } = password_input_field_style;
  return (
    <View>
      <View style={lableStyle}>{label}</View>
      <View>
        {/* password field */}
        <UserInputFieldComponent />

        {/* icon field */}
      </View>
    </View>
  );
}

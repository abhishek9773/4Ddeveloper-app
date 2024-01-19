import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import inputFieldStyle from "./userinputFieldStyle";

export default function UserInputFieldComponent({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}) {
  const { containerStyle, lableStyle, inputStyle } = inputFieldStyle;

  return (
    <View style={containerStyle}>
      <Text style={lableStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

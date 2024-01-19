import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import password_input_field_style from "./password_input_field_style";
import Icon from "react-native-vector-icons/Ionicons";
import UseTogglePasswordVisiblity from "./hook/UseTogglePasswordVisiblity";

export default function PasswordInputFieldComponent({
  label,
  value,
  placeholder,
  onChangeText,
}) {
  // general syntex resulabitation .
  const { passwordVisibility, rightIcon, handlePasswordVisiblity } =
    UseTogglePasswordVisiblity();

  const { lableStyle, passwordStyle, inputStyle, iconStyle } =
    password_input_field_style;

  // This class hooks .

  return (
    <View>
      <Text style={lableStyle}>{label}</Text>
      <View style={passwordStyle}>
        {/* password field */}
        <TextInput
          style={inputStyle}
          name="password"
          value={value}
          placeholder={placeholder}
          secureTextEntry={passwordVisibility}
          autoCorrect={false}
          autoCapitalize="none"
          enablesReturnKeyAutomatically
          onChangeText={onChangeText}
        />
        {/* icon field */}
        <TouchableOpacity style={iconStyle} onPress={handlePasswordVisiblity}>
          <Icon name={rightIcon} size={38} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

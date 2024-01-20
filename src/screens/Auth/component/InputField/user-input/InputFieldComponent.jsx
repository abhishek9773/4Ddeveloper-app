import { View, Text, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import InputFieldComponentStyle from "./InputFieldComponentStyle";

export default function InputFieldComponent({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) {
  const { lableStyle, inputContainer } = InputFieldComponentStyle;

  // Propes area
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={lableStyle}>{label}</Text>
      <View
        style={[
          inputContainer,
          { borderColor: error ? "red" : isFocused ? "blue" : "white" },
        ]}
      >
        <Icon
          name={iconName}
          style={{ color: "dark", fontSize: 42, marginRight: 10 }}
        />
        {/*--------------- Text input area ----------------*/}
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: "'dark", flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: "dark", fontSize: 42 }}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: "red", fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
}

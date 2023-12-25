import React, { useState } from "react";
import { view, Text, Button, StyleSheet, View, TextInput } from "react-native";
import Styles from "./LoginStyle";
import inputStyle from "../../components/common/styles/input/InputTextStyle";

function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (username === "example" && password === "password") {
      navigation.navigate("home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 46, marginLeft: 8, marginRight: 8 }}>
      <Image
      <Text>Login</Text>
      <TextInput
        style={inputStyle.input}
        placeholder="Username/email"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={inputStyle.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        style={Styles.button}
        title="Lgoin"
        onPress={() => navigation.navigate("home")}
      />
      <Button
        style={Styles.button}
        title="MayBe Latter"
        onPress={() => navigation.navigate("home")}
      />
    </View>
  );
}
export default SignupScreen;

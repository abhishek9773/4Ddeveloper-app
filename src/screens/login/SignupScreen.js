import React, { useState } from "react";
import { view, Text, Button, StyleSheet, View, TextInput } from "react-native";

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
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username/email"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Lgoin" onPress={home} />
    </View>
  );
}

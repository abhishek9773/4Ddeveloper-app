import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { LoadingScreen } from "./src/screens/Loading";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <LoadingScreen />
    </SafeAreaView>
  );
}

import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { LoadingScreen } from "./src/screens/Loading";
import { OnBoardings3 } from "./src/screens/OnBoardings";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <LoadingScreen /> */}
      <OnBoardings3 />
    </SafeAreaView>
  );
}

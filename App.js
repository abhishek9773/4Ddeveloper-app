import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { LoadingScreen } from "./src/screens/Loading";
import { OnBoardings2 } from "./src/screens/OnBoardings";
import AuthButtonComponent from "./src/screens/Auth/component/Button/AuthButtonComponent";
import InputFieldComponent from "./src/screens/Auth/component/InputField/user-input/UserInputFieldComponent";
import PasswordInputFieldComponent from "./src/screens/Auth/component/InputField/password-input/PasswordInputFieldComponent";
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <LoadingScreen /> */}
      {/* <OnBoardings2 /> */}

      <PasswordInputFieldComponent />
    </SafeAreaView>
  );
}

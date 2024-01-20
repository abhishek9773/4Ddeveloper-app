import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import { LoadingScreen } from "./src/screens/Loading";
import { OnBoardings2 } from "./src/screens/OnBoardings";
import AuthButtonComponent from "./src/screens/Auth/component/Button/AuthButtonComponent";
import InputFieldComponent from "./src/screens/Auth/component/InputField/user-input/UserInputFieldComponent";
import PasswordInputFieldComponent from "./src/screens/Auth/component/InputField/password-input/PasswordInputFieldComponent";
import SignInScreen from "./src/screens/Auth/SignInScreen";
import RegistrationScreen from "./src/screens/Auth/RegistrationScreen";
import LoginScreen from "./src/screens/Auth/LoginScreen";
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <LoadingScreen /> */}
      {/* <OnBoardings2 /> */}
      {/* <SignInScreen /> */}
      {/* <RegistrationScreen /> */}
      <LoginScreen />

      {/* <PasswordInputFieldComponent /> */}
    </SafeAreaView>
  );
}

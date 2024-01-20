import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SiginImg } from "../../../assets/Images";
import SigninScreenStyle from "./SigninScreenStyle";
import {
  PasswordInputFieldComponent,
  UserInputFieldComponent,
} from "./component/InputField";
import InputFieldComponent from "./component/InputField/user-input/InputFieldComponent";

export default function SignInScreen() {
  const { container } = SigninScreenStyle;
  return (
    <SafeAreaView>
      <Image source={SiginImg} />

      <InputFieldComponent label={"Email"} />
    </SafeAreaView>
  );

  {
    /*      <UserInputFieldComponent
        label={" gmail/username"}
        placeholder={"Enter gmail/username"}
      />
      <PasswordInputFieldComponent
        label={"Password"}
        placeholder={"Enter you password"}
        value={}
      
      /> */
  }
}

const styles = StyleSheet.create({});

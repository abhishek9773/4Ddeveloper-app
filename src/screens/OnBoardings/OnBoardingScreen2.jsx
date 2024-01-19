import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { OnBoardingScreen } from "./component/OnBoarding";
import { onBoardingImg2 } from "../../../assets/Images";
import { string } from "../../utils/constants";

export default function OnBoardingScreen2() {
  return (
    <OnBoardingScreen
      img={onBoardingImg2}
      heading={string.onBoarding.heading.onBoarding2}
      body={string.onBoarding.body.onBoarding2}
      previous={true}
    />
  );
}

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { OnBoardingScreen } from "../../component/OnBoarding";
import { onBoardingImg1 } from "../../../assets/Images";
import { string } from "../../utils/constants";

export default function OnBoardingScreen1() {
  return (
    <OnBoardingScreen
      img={onBoardingImg1}
      heading={string.onBoarding.heading.onBoarding1}
      body={string.onBoarding.body.onBoarding1}
    />
  );
}

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { OnBoardingScreen } from "./component/OnBoarding";
import { onBoardingImg3 } from "../../../assets/Images";
import { string } from "../../utils/constants";

export default function OnBoardingScreen3() {
  return (
    <View>
      <OnBoardingScreen
        img={onBoardingImg3}
        heading={string.onBoarding.heading.onBoarding3}
        body={string.onBoarding.body.onBoarding3}
        previous={true}
      />
    </View>
  );
}

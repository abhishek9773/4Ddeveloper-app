import React from "react";
import { Button, View } from "react-native";
import OnBoarding from "../../components/on_boarding/OnBoarding";

function OnBoardingScreen3({ navigation }) {
  return (
    <View>
      <OnBoarding
        url="../../../assets/images/on_boarding_assets/onBoarding-3_assets/on-boarding-3-image.png"
        heading="Collage Tools"
        normalText="boost you efficiency of collage/university with some imaging tools"
      />
      <Button title="Previous" onPress={() => navigation.goBack()} />
      <Button title="Login" onPress={() => navigation.navigate("login")} />
    </View>
  );
}

export default OnBoardingScreen3;

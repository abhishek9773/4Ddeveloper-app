import React from "react";
import { Button, View } from "react-native";
import OnBoarding from "../../components/on_boarding/OnBoarding";

function OnBoardingScreen2({ navigation }) {
  return (
    <View>
      <OnBoarding
        url="../../../assets/images/on_boarding_assets/on_boarding-2_assets/on-boarding-2-image.png"
        heading="Strtup"
        nomralText="Let’s understand startup or company tech problems and build project accordingly ..."
      />
      <Button title="Previous" onPress={() => navigation.goBack()} />
      <Button
        title="Next"
        onPress={() => navigation.navigate("OnBoardingScreen3")}
      />
    </View>
  );
}

export default OnBoardingScreen2;

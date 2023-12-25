import React from "react";
import OnBoarding from "../../components/on_boarding/OnBoarding";
import { Button, View } from "react-native";

function OnBoardingScreen1({ navigation }) {
  return (
    <View>
      <OnBoarding
        url="../../../assets/images/on_boarding_assets/on_boarding-1-assets/onBoarding_image.png"
        heading=" Welcom to 4Ddeveloper!!"
        normalText=" explore your community or competition and lot more ."
      />
      <Button
        title="Next"
        onPress={() => navigation.navigate("OnBoardingScreen2")}
      />
    </View>
  );
}

export default OnBoardingScreen1;

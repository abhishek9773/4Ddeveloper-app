import Rreact from "react";
import { View, Text, Image } from "react-native";
import OnBoardingText from "./OnBoardingText";

function OnBoarding() {
  return (
    <View>
      <Image source={require()} />
      <View>
        <Text> {OnBoardingText.Heading}</Text>
        <Text></Text>
      </View>
    </View>
  );
}

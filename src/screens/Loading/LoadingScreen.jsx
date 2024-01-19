import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { getDimensionScreen } from "../../utils/devices/GetDimensionScreen";
import { Logo } from "../../../assets/logos";
import { OnBoardingScreen } from "../OnBoardings/component/OnBoarding";

const { width, height } = getDimensionScreen();
export default function LoadingScreen() {
  return (
    <View style={styles.component}>
      <Image source={Logo} />
      <Text>4Ddeveloper</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
});

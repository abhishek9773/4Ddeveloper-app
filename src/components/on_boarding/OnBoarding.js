import Rreact from "react";
import { View, Text, Image } from "react-native";
import OnBoardingText from "./OnBoardingText";
import Styles from "./OnBoardingStyle";
import PropTypes from "prop-types";

function OnBoarding(url, heading, normalText) {
  if (!url && !heading && !normalText) {
    console.error("Placed enter url, and heading and normalText");
    return null;
  }

  return (
    <View>
      <Image source={require(url)} />
      <View>
        <Text style={Styles.HeadingText}> {heading}</Text>
        <Text> {normalText}</Text>
      </View>
    </View>
  );
}
OnBoarding.PropTypes = {
  url: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  normalText: PropTypes.string.isRequired,
};
export default OnBoarding;

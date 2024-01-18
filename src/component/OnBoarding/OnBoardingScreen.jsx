import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import onboardingStyles from "./onboardingStyles";

export default function OnBoardingScreen({
  img,
  heading,
  body,
  previous = false,
}) {
  return (
    <SafeAreaView style={onboardingStyles.container}>
      <StatusBar />
      <Image source={img} />
      <Text style={onboardingStyles.heading}>{heading}</Text>
      <Text style={onboardingStyles.body}>{body}</Text>

      <View style={onboardingStyles.containerButton}>
        {previous ? (
          <TouchableOpacity style={onboardingStyles.button}>
            <Text style={onboardingStyles.buttonText}>previous</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity style={onboardingStyles.button}>
          <Text style={onboardingStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

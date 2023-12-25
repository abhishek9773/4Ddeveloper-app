import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen1 from "../../screens/on_boarding_screen/OnBoardingScreen1";
import OnBoardingScreen2 from "../../screens/on_boarding_screen/OnBoardingScreen2";
import OnBoardingScreen3 from "../../screens/on_boarding_screen/OnBoardingScreen3";

const Stack = createStackNavigator();

const OnBoardingNaivgation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding1" headerMode="none">
        <Stack.Screen name="OnBoardignScreen1" component={OnBoardingScreen1} />
        <Stack.Screen name="OnBoardingScreen2" component={OnBoardingScreen2} />
        <Stack.Screen name="OnBoardingScreen3" component={OnBoardingScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default OnBoardingNaivgation;

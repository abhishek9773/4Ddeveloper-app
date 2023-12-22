import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import Styles from "./Styles";

function LoadingScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const featchData = async () => {
      try {
        // some time api call
        // Simulate a delay for demonstration purposes.
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
        navigation.replace("HomeScreen");
      }
    };
    featchData();
  }, [navigation]);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={Styles.loadingStyle}>
          <Image source={require("../../../assets/logos/logo.png")} />
        </View>
      ) : (
        <Text> after loading screen</Text>
      )}
    </SafeAreaView>
  );
}

export default LoadingScreen;

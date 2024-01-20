import { View, Text } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import Loader from "../screens/Auth/component/InputField/user-input/Loader";
import LoginScreen from "../screens/Auth/LoginScreen";

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  const [initialRouteName, setInitialRouteName] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("useData");

      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName("HomeScreen");
        } else {
          setInitialRouteName("LoginScreen");
        }
      } else {
        setInitialRouteName("RegistrationScreen");
      }
    } catch (error) {
      setInitialRouteName("RegistrationScreen");
    }
  };
  return (
    <NavigationContainer>
      {!initialRouteName ? (
        <Loader visible={true} />
      ) : (
        <>
          <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOpations={{ headerShow: false }}
          >
            <Stack.screen name="RegistationScreen" />
          </Stack.Navigator>
          <Stack.screen name="LoginScreen" component={LoginScreen} />
          <Stack.screen name="HomeScreen" component={HomeScreen} />
        </>
      )}
    </NavigationContainer>
  );
};
export default MainNavigation;

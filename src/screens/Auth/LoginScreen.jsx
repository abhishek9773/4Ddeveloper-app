import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, SafeAreaView, Keyboard, Alert } from "react-native";
import Loader from "./component/InputField/user-input/Loader";
import InputFieldComponent from "./component/InputField/user-input/InputFieldComponent";
import AuthButtonComponent from "./component/Button/AuthButtonComponent";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Place input email", "email");
      isValid == false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          // navigation.navigate("HomeScreen");

          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loginIn: true })
          );
        } else {
          Alert.alert(
            "Error",
            " Invalid Details",
            [{ text: "OK", onPress: () => {} }],
            { cancelable: true }
          );
        }
      } else {
        // Alert take (header , content, [{text:"ok", onpress:()},],{canceable:true})

        Alert.alert(
          "Error",
          "User does not Exit",
          [{ text: "OK", onPress: () => {} }],
          { cancelable: true }
        );
      }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 3 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
          Log in
        </Text>
        <Text style={{ color: "grey", fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Login
        </Text>
        <InputFieldComponent
          onChangeText={(text) => handleOnChange(text, "email")}
          onFocus={() => handleError(null, "emails")}
          iconName={"email-outline"}
          label={"Email"}
          placeholder="Enter your email address"
          error={errors.email}
          a
        />
        <InputFieldComponent
          onChangeText={(text) => handleOnChange(text, "password")}
          onFocus={() => handleError(null, "password")}
          iconName={"lock-outline"}
          label={"password"}
          placeholder="Enter Your password"
          error={errors.password}
          password
        />
        <AuthButtonComponent
          title={"Log In"}
          onPress={validate}
          buttonColor={"green"}
        />
        <Text onPress={() => navigaton.navigate("RegisterScreen")}>
          Dont' have accround ?Register
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

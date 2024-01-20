import {
  View,
  Text,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "./component/InputField/user-input/Loader";
import InputFieldComponent from "./component/InputField/user-input/InputFieldComponent";

export default function RegistrationScreen() {
  const [inputs, setInputs] = React.useState({
    email: "",
    fullName: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("please input a vlid email", "email");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Pleasee Input phone number ", "phone");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please inptu Password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("useData", JSON.stringify(inputs));
        // put navigation here.
        // navigation.navigate("loginScreen");
      } catch (error) {
        Alert.alert("Error", "Something want wrong");
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
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 10 }}
      >
        <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
          Register
        </Text>
        <Text style={{ color: "black", fontWeight: 18, marginVertical: 10 }}>
          Enter Your Details to register
        </Text>
        <View style={{ marginVertical: 20 }}>
          <InputFieldComponent
            onChangeText={(text) => handleOnChange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label={"Email"}
            placeholder="Enter your email address"
            error={errors.email}
          />
          <InputFieldComponent
            onChangeText={(text) => handleOnChange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="account-outline"
            label={"Full Name"}
            placeholder="Enter your full name"
            error={errors.fullname}
          />
          <InputFieldComponent
            onChangeText={(text) => handleOnChange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label={"Password"}
            placeholder="Enter your Password"
            error={errors.password}
            password
          />
          <InputFieldComponent
            onChangeText={(text) => handleOnChange(text, "phone")}
            onFocus={() => handleError(null, "phone")}
            iconName="phone-outline"
            label={"Phone Number"}
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Button title="Register" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("LoadingScreen")}
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Already have account ? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

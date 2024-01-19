import { StyleSheet } from "react-native";
import { getDimensionScreen } from "../../../../utils/devices/GetDimensionScreen";

const { width, height } = getDimensionScreen();
const onboardingStyles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  body: {
    marginTop: 10,
  },
  containerButton: {
    width: width,
    alignContent: "space-around",

    padding: 25,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#bfa594",
    borderRadius: 15,
    height: 42,
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  buttonText: {},
});
export default onboardingStyles;

import { StyleSheet } from "react-native";
import { getDeviceDimenstion } from "../../../../../utils";
getDeviceDimenstion;

const userinputFieldStyle = StyleSheet.create({
  containerStyle: {
    margin: 12,
  },
  lableStyle: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  inputStyle: {
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
  },
});

export default userinputFieldStyle;

import { StyleSheet } from "react-native";

const password_input_field_style = StyleSheet.create({
  passwordStyle: {
    margin: 16,
    borderRadius: 14,
    borderWidth: 1.4,
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 4,
  },
  inputStyle: {
    flex: 1,
  },
  iconStyle: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default password_input_field_style;

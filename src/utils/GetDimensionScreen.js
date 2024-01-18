import { Dimensions } from "react-native";

export const getDimensionScreen = () => {
  const { width, height } = Dimensions.get("window");
  return { width, height };
};

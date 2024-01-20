import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { getDeviceDimenstion } from "../../../../../utils";
import InputFieldComponentStyle from "./InputFieldComponentStyle";
import LoaderStyle from "./LoaderStyle";

export default function Loader({ visible = false }) {
  const { width, height } = getDeviceDimenstion();
  return (
    visible && (
      <View style={[LoaderStyle.container, height, width]}>
        <View style={LoaderStyle.loader}>
          <ActivityIndicator size="large" color={"blue"} />
          <Text style={{ marginLeft: 10, fontSize: 16 }}>Loading...</Text>
        </View>
      </View>
    )
  );
}

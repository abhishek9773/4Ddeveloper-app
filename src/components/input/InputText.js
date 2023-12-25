import { TextInput } from "react-native";

function Input() {
  return (
    <View>
      <TextInput
        editable
        multiline
        numberOfLines={(text) => onChagneText(text)}
      />
    </View>
  );
}

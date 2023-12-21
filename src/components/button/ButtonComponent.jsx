import { Button } from "react-native";
import Texts from "../../utils/common/texts/Texts";

function ButtonComponent() {
  return (
    <View>
      <Button
        title={Texts.login}
        onPress={() => console.warn("you are pressing login button")}
      />
    </View>
  );
}

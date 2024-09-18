import { Pressable, View, Text } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import { colors } from "../../constants/colors";
function OutlineButton({ onPress, icon, children }) {
  return (
   <Pressable onPress={onPress} style={(pressed) => [styles.button, pressed && styles.pressed]}>
<Ionicons name={icon} size={20} color={colors.primary500} style={styles.icon} />
<Text style={styles.buttonText}>{children}</Text>
   </Pressable>
  );
}
export default OutlineButton;

const styles = {
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary500,
  },
  pressed: {
    opacity: 0.5,
  },
  icon:{
    marginRight: 10,
  },
  buttonText: {
    color: colors.primary500,
  },
};
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const InstructionText = ({ children,style }) => {
console.log('InstructionText' +JSON.stringify(style));
  return <Text style={[styles.enterText, style.instructionTextStyle]}>{children}</Text>;
};

export default InstructionText;
const styles = StyleSheet.create({
  enterText: {
    fontFamily:'open-sans-bold',
    margin: 5,
    color: Colors.secondary600,
    fontSize: 20,
      },
});

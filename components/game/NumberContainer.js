import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ currentGuess }) => {
  console.log("Guess " + currentGuess);
  return <Text style={styles.title}>{currentGuess}</Text>;
};

export default NumberContainer;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: 300,
    color: Colors.white,
    borderColor: Colors.white,
    borderWidth: 5,
    padding: 10,
    margin: 10,
    textAlign: "center",
  },
});

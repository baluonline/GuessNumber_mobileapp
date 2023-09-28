import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/inStuctionText";

const StartGameScreen = ({ onPicked }) => {
  const [enterNumber, setEnterNumber] = useState("");

  const onChangeEnterNumber = (enterNumber) => {
    setEnterNumber(enterNumber);
  };
  const confirmButton = () => {
    const choseNumber = parseInt(enterNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      
      Alert.alert(
        "Invalid number",
        "Number has to be number between 1 and 100",
        [{ text: "Okay", style: "destructive", onPress: setEnterNumber("") }]
      );
      return;
    }
    onPicked(choseNumber);
  };
  const resetNumber = () => {
    setEnterNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText style={styles.instructionTextStyle}>
          Enter a Number
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={onChangeEnterNumber}
          value={enterNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmButton}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "stretch",
  },

  instructionTextStyle: {
    marginBottom: 10,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary600,
    marginTop: 26,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 26,

    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

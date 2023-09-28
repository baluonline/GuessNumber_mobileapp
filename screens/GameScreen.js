import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Alert,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";

import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/inStuctionText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandom = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum == exclude) {
    return generateRandom(min, max, exclude);
  }
  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

function Gamescreen({ userNumber, gameOver }) {
  const initialGuess = generateRandom(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOver(guessRounds);
    }
  }, [currentGuess, userNumber, gameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const nextGuessHandler = (direcion) => {
    if (
      (direcion == "lower" && currentGuess < userNumber) ||
      (direcion == "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Lower", "Can not guess more", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direcion == "lower") {
      maxBoundary = currentGuess;
    } else if ((direcion = "greater")) {
      minBoundary = currentGuess + 1;
    }
    let newRandNmber = generateRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandNmber);
    setGuessRounds((prevGuessRounds) => [newRandNmber, ...prevGuessRounds]);
  };

  const guessRoundsLength = guessRounds.length;
  return (
    <View style={styles.gameSreenContainer}>
      <StatusBar animated="slide" />
      <Title>Opponent's Guess</Title>
      <NumberContainer currentGuess={currentGuess} />
      <Card>
        <InstructionText style={styles.instructionTextStyle}>
          Higner or lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.guessLogContainer}>
        <FlatList
          data={guessRounds}
          renderItem={( itemData ) => <GuessLogItem roundNumber={guessRoundsLength-itemData.index} guess={itemData.item}/> }
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}

export default Gamescreen;

const styles = StyleSheet.create({
  gameSreenContainer: {
    flex: 1,
    marginHorizontal: 10,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionTextStyle: {
    margin: 10,
  },
  guessLogContainer:{
    flex:1,
    padding:16
  }
});

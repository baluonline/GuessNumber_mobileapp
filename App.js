import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Gamescreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handlePickedNumber = (enteredNumber) => {
    setPickedNumber(enteredNumber);
    setGameOver(false);
  };

  const gameOverHandler = (numberofRounds) => {
    setGameOver(true);
   setGuessRounds(numberofRounds.length);
  };

  let screen = <StartGameScreen onPicked={handlePickedNumber} />;

  if (pickedNumber) {
    screen = (
      <Gamescreen userNumber={pickedNumber} gameOver={gameOverHandler} />
    );
  }
  

  function newGameStart() {
    setPickedNumber("");
    setGameOver(false);
    setGuessRounds(0);
  }

  if (gameOver) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={pickedNumber}
        onStartNewGame={newGameStart}
      />
    );
  }

  return (
    <LinearGradient colors={["#2b0216", "#2fdd4f"]} style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/check.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backGroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});

import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItems}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
    itemText: {
        fontFamily:'open-sans',
        marginBottom:10
    },
    listItems : {
    borderColor: Colors.primary600,
    borderWidth: 5,
    borderRadius: 5,
    padding: 5,
    backgroundColor: Colors.secondary500,
    flexDirection: "row",
    justifyContent: 'space-evenly',
    width:'100%',
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.25,
    shadowRadius:5
  },
});

import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "rgb(250, 250, 246)",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
    margin: 10,
    textAlign: "center",
  },
});

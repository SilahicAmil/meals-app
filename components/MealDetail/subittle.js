import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1.5,
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 6,
  },
});

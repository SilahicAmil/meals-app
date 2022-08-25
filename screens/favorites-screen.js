import { StyleSheet, Text, View } from "react-native";

const FavoritesScreen = () => {
  return (
    <View style={styles.test}>
      <Text>This is a dummy test screen!</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: "red",
    padding: 50,
  },
});

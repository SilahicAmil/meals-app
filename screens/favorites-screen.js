import { StyleSheet, Text, View } from "react-native";
import { createContext, useState } from "react";

const FavoritesScreen = () => {
  return (
    <View style={styles.test}>
      <Text>This is the favorites screen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  test: {
    flex: 1,
    backgroundColor: "white",
    padding: 50,
  },
});

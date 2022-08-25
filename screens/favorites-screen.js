import { StyleSheet, Text, View } from "react-native";

import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/meals-list";
import { useContext } from "react";

const FavoritesScreen = () => {
  const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealContext.ids.includes(meal.id)
  );

  if (favoriteMeals.length == 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Favorite Meals Added :(</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

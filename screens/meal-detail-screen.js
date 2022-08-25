import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useContext, useLayoutEffect } from "react";

import { FavoritesContext } from "../store/context/favorites-context";
import IconButton from "../components/icon-button";
import List from "../components/MealDetail/list";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/meal-details";
import Subtitle from "../components/MealDetail/subittle";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealContext = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealContext.ids.includes(mealId);

  const changeFavoriteStatus = () => {
    if (mealIsFavorite) {
      favoriteMealContext.removeFavorite(mealId);
    } else {
      favoriteMealContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onTap={changeFavoriteStatus}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatus]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingridients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "black",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});

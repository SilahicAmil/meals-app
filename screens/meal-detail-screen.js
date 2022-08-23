import { Image, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/meal-details";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails />
      <Text>Ingridients:</Text>
      <Text>Steps:</Text>
    </View>
  );
};

export default MealDetailScreen;

import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/category-grid-tile";

let numColumns = 2;

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={numColumns}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    paddingBottom: 16,
  },
});

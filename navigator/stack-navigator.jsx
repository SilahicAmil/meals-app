import DrawerNavigator from "../navigator/drawer-navigator";
import MealDetailScreen from "../screens/meal-detail-screen";
import MealsOverviewScreen from "../screens/meals-overview-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MealsCategories"
        screenOptions={{
          headerStyle: { backgroundColor: "#bdaa77" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={DrawerNavigator}
          options={{
            title: "All Categories",
            headerShown: false,
          }}
        />

        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

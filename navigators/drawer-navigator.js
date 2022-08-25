import CategoriesScreen from "../screens/categories-screen";
import FavoritesScreen from "../screens/favorites-screen";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#bdaa77" },
        headerTintColor: "white",
        swipeEnabled: true,
        drawerHideStatusBarOnOpen: true,
        drawerStatusBarAnimation: "fade",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: () => <Ionicons name="home" size={18} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: () => <Ionicons name="star" size={18} />,
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

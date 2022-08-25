import FavoritesContextProvider from "./store/context/favorites-context";
import StackNavigator from "./navigators/stack-navigator.jsx";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <StackNavigator />
      </FavoritesContextProvider>
    </>
  );
}

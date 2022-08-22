import { StyleSheet, Text, View } from "react-native";

import CategoriesScreen from "./screens/categories-screen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({});

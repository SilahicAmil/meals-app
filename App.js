import StackNavigator from "./navigator/stack-navigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <StackNavigator />
    </>
  );
}

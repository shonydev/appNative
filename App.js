import { StatusBar } from "expo-status-bar";
import {
  Linking,
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableWithoutFeedbackBase,
} from "react-native";
import Constants from "expo-constants";
import MovieList from "./components/MovieList.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function App() {
  console.log("soy shon papi");

  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>ShonApp</Text>
      <MovieList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

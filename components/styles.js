import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    width: 300,
    height: 300,
  },
  card: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  backCard: {
    backgroundColor: "red",
    transform: [{ rotateY: "180deg" }],
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});

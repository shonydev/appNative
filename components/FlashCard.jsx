import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { transform } from "framer-motion";

const FlashCard = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const interpolateFrontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0],
  });

  const interpolateBackOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1],
  });

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
    opacity: interpolateFrontOpacity,
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
    opacity: interpolateBackOpacity,
  };

  return (
    <TouchableOpacity onPress={flipCard}>
      <View style={styles.container}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <Text style={styles.title}>{title}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.card, styles.backCard, backAnimatedStyle]}
        >
          <Text style={styles.description}>{description}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
    width: 150,
    height: 150,
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

export default FlashCard;

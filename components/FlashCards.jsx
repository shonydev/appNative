import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { styles } from "./styles";

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
const FlashCards = ({ movies }) => {
  console.log("flashcardComponent", movies);
  const data = [
    { id: "1", title: "Elemento 1" },
    { id: "2", title: "Elemento 2" },
    { id: "3", title: "Elemento 3" },
    { id: "4", title: "Elemento 4" },
    { id: "5", title: "Elemento 5" },
    // Agrega más elementos aquí
  ];

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <FlashCard title={item.name} description={item.description} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <FlashCard title={item.name} description={item.description} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <FlashCard title={item.name} description={item.description} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default FlashCards;

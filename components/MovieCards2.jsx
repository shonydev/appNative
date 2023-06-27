import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { motion, AnimatePresence } from "framer-motion";
import { Motion } from "@legendapp/motion";
import FlashCards from "./FlashCards";
const screenHeight = Dimensions.get("window").height;

const MovieCards = ({ movies }) => {
  return (
    <View>
      <FlashCards movies={movies} />
    </View>
  );
};

export default MovieCards;

import React from 'react';
import { View, Text } from 'react-native';
import { motion } from 'framer-motion';
import { Motion } from "@legendapp/motion"

const Card = ({ title, description }) => {
    return (
      <Motion.View
      
      style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}

      initial={{ y: -50 }}
    animate={{ x: 0.010 * 100, y: 0 }}
    whileHover={{ scale: 1.2 }}
    whileTap={{ y: 20 }}
    transition={{ type: "spring" }}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 16 }}>{description}</Text>
      </Motion.View>
    );
  };

const MovieCards = ({ movies }) => {
  return (
    <View>
      {movies.map((movie) => (
        <Card key={movie.id} title={movie.name} description={movie.description}/>
      ))}
    </View>
  );
};

export default MovieCards;
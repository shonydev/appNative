import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import MovieCards from "./MovieCards2";

const moviesUrl = "http://192.168.0.6:9000/movies";
const screenHeight = Dimensions.get("window").height;

const MovieList = () => {
  async function saveData(data) {
    try {
      console.log("saving ... ", data);
      await AsyncStorage.setItem("data", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(moviesUrl);
    const data = await response.json();
    setMovies(data);
    setLoading(false);
  }

  async function getData() {
    console.log("getData");
    if (movies) {
      setShow(true);
    } else {
      try {
        const value = await AsyncStorage.getItem("data");
        if (value) {
          setMovies(JSON.parse(value));
          setShow(true);
        } else {
          Alert.alert("ELSE noData");
        }
      } catch (error) {
        Alert.alert("noData");
      }
    }
  }

  return (
    <View>
      <ScrollView contentContainerStyle={{ minHeight: screenHeight }}>
        {loading && <Text> 'loading...'</Text>}
        {
          <View>
            <Button
              title="SHOW"
              color="#f194ff"
              onPress={() => {
                getData();
              }}
            />
            <Button
              title="HIDE"
              color="#f194ff"
              onPress={() => setShow(false)}
            />
            <Button title="fetch" color="#f194ff" onPress={() => fetchData()} />
            <Button
              title="saveData"
              color="#f194ff"
              onPress={() => saveData(movies)}
            />
            <Button
              title="deleteData"
              color="#f194ff"
              onPress={() => {
                setShow(false);
                setMovies(null);
                AsyncStorage.removeItem("data");
              }}
            />
          </View>
        }
        {show && <MovieCards movies={movies} />}
      </ScrollView>
    </View>
  );
};
export default MovieList;

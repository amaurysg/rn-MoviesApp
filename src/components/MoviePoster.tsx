import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Movies} from '../interface/movieDBInterface';

interface Props {
  movie: Movies;
  width?: number;
  height?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  //console.log(movie.poster_path);
  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <TouchableOpacity
      style={{
        height: height,
        width: width,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,
      }}
      activeOpacity={0.9}
      onPress={() =>
        navigation.dispatch(CommonActions.navigate('DetailScreen', movie))
      }>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: uri}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 10,
  },
});

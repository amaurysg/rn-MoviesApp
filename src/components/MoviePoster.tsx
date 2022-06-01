import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Movies} from '../interface/movieDBInterface';

interface Props {
  movie: Movies;
}

export const MoviePoster = ({movie}: Props) => {
  //console.log(movie.poster_path);

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <View style={{height:420, width:300}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: uri}}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius:18,
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

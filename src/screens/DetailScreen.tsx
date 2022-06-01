import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMoviesDetails} from '../hooks/useMoviesDetails';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const {height: heightWindow} = Dimensions.get('window');
export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const {top} = useSafeAreaInsets();
  const {isLoading, movieFull, cast} = useMoviesDetails(movie.id);
  console.log('movieFull::::::',movieFull)
  console.log('cast::::::',cast)
  console.log('>>>>>>>>', movie.id);
  return (
    <>
      <View style={styles.imageContainer}>
        <View style={styles.imageShadow}>
          <Image style={styles.image} source={{uri: uri}} />
        </View>
      </View>
      <View>
        <View style={styles.titlesContainer}>
          <Text style={styles.subtitle}>{movie.original_title}</Text>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: heightWindow * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    //overflow: 'hidden',

    elevation: 9,
  },
  imageShadow: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  image: {
    flex: 1,
  },
  titlesContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 20,
    opacity: 0.8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

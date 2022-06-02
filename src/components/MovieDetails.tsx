import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interface/creditsInterface';
import {MovieFull} from '../interface/movieDBInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({movieFull, cast}: Props) => {
  console.log(movieFull.id);
  return (
    <>
      {/* Details */}

      <View style={styles(movieFull.vote_average).averageContainer}>
        <Text style={styles(movieFull.vote_average).averageText}>
          ⭐️ {movieFull.vote_average}
        </Text>
      </View>
      <Text>{movieFull.genres[0].name}</Text>

      <View style={styles().summaryContainer}>
        <Text style={styles().summaryTitle}>Summary</Text>
        <Text>{movieFull.overview}</Text>
      </View>

      {/* Cast */}
      {/*    <CastItem actor={cast[0]} /> */}
      <FlatList
        data={cast}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CastItem actor={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

const styles = (vote_average?: number) =>
  StyleSheet.create({
    averageContainer: {
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 4,
      backgroundColor: vote_average! > 8 ? 'green' : 'red',
      borderRadius: 4,
    },
    averageText: {
      color: 'white',
      fontWeight: 'bold',
    },
    summaryContainer:{
     marginVertical:20,
    },
    summaryTitle:{
     fontSize:20,
     fontWeight:'bold'
    },
    summaryContent:{

    }

  });

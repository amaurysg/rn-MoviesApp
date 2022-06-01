import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movies} from '../interface/movieDBInterface';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movie: Movies[];
}

export const HorizontalSlider = ({title, movie}: Props) => {
  return (
    <View style={{height: (title) ? 250 : 230 }}>
      {title && <Text style={{marginLeft:10, fontSize:20, fontWeight:'bold', marginVertical:10}}>{title}</Text>}
      <FlatList
        data={movie}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

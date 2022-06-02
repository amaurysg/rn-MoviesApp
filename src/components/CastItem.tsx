import React from 'react';
import {Image, Text, View} from 'react-native';
import {Cast} from '../interface/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    console.log(actor.profile_path)
  return (
  <View>
   { actor.profile_path &&  <Image source={{uri:uri}} style={{width:50, height:50, borderRadius:50}}/>}
        <View>
          <Text>{actor.name}</Text>
          <Text>{actor.character}</Text>
        </View>
  </View>
  );
};

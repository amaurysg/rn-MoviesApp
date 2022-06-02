import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interface/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  console.log(actor.profile_path);
  return (
    <View style={styles.cardContainer}>
      {actor.profile_path && (
     <View style={styles.imageContainer}>
            <Image
              source={{uri: uri}}
              style={styles.image}
            />
     </View>
      )}
      <View>
        <Text numberOfLines={1} ellipsizeMode='tail'>{actor.name}</Text>
        <Text numberOfLines={0} ellipsizeMode='tail'>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer:{
       borderWidth:1,  
       borderColor:'grey',
       width:80,
       height:140,
       alignItems:'center',
       borderTopEndRadius:12,
       borderTopStartRadius:12,
       marginRight:5,
       marginBottom:30,
       //justifyContent:'center' 
    },
    imageContainer:{
        width:'100%',
        height:60,
        overflow:'hidden',
    },
    image:{
        flex:1,
        borderTopEndRadius:12,
        borderTopStartRadius:12,
      
    },
    
})

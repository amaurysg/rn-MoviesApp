import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, Button, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import movieDB from '../api/movieDB';
import {useMovies} from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';


type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;
const {width: windowWidth} = Dimensions.get('window')
export const HomeScreen = () => {
  const {nowPlaying, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  //console.log(':::::::', nowPlaying[0]);

  if(isLoading){
      return (
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <ActivityIndicator color={'red'} size={50}></ActivityIndicator>
          </View>
      )
  }

  return (
    <View style={{marginTop: top +10}}>
       {/*  Main Carousel */}
       <Carousel /* layout='stack' */ data={nowPlaying} renderItem={({item}: any)=> <MoviePoster movie={item}/>} sliderWidth={windowWidth} itemWidth={300} />
       {/* Popular Carousel */}
   
    

    </View>
  );
};

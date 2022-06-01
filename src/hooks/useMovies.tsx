import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movies, MoviesDbNowPlaying} from '../interface/movieDBInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movies[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MoviesDbNowPlaying>('/now_playing');
    const movies = resp.data.results;
    setNowPlaying(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    //Now playing
    getMovies();
  }, []);

  return {nowPlaying, isLoading};
};

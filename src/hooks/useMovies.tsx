import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movies, MoviesDbResponse} from '../interface/movieDBInterface';

//If you want multiple request
//Create interface with all requests const
interface MoviesState {
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upcoming: Movies[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    //Create diferent promise
    const nowPlayingPromise = movieDB.get<MoviesDbResponse>('/now_playing');
    const popularPromise = movieDB.get<MoviesDbResponse>('/popular');
    const topRatedPromise = movieDB.get<MoviesDbResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MoviesDbResponse>('/upcoming');
    //here request with Promise.all (pass all promise)
    const res = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);
    //setMoviesState, update each state.
    setMoviesState({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      topRated: res[2].data.results,
      upcoming: res[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    //Now playing
    getMovies();
  }, []);
//Send spred operator moviesState
  return {...moviesState, isLoading};
};

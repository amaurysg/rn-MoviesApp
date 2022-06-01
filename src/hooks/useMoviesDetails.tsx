import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, Credits} from '../interface/creditsInterface';
import {MovieFull} from '../interface/movieDBInterface';

interface MoviesDetails {
  isLoading?: boolean;
  movieFull?: MovieFull;
  cast?: Cast[];
}

export const useMoviesDetails = (movieId: number) => {
  const [state, setState] = useState<MoviesDetails>({
      isLoading: true, 
      movieFull: undefined,
      cast:[]
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<Credits>(`/${movieId}/credits`);

    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    setState({
        isLoading:false, 
        movieFull: movieDetailsResponse.data , 
        cast: castResponse.data.cast
    })
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};

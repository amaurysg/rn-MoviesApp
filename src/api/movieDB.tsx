import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '78fdfca86cfd9c3de43463f57599da37',
    language: 'en-US',
  },
});

export default movieDB;

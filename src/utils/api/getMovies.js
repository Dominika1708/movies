import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'e04c68f789be72aeeeea023bd48810ca';

export const getTrends = async () => {
  try {
    const response = await axios.get(`/trending/all/day?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};


export const getMovieCast = async id => {
  try {
    const response = await axios.get(
      `/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
};


export const getMovieReviews = async id => {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?api_key=${apiKey}&language=en-US&`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};


export const getMovies = async query => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

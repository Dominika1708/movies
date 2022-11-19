import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"
const apiKey = 'e04c68f789be72aeeeea023bd48810ca';

export const getTrends = async () => {
  try {
    const response = await axios.get(`/trending/all/day?api_key=${apiKey}`)
    return response.data.results
  } catch (error) {
    console.error(error)
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
    return  response.data
  } catch (error) {
    console.error(error)
  }
};

export const getMovieCastById = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    return response.data.cast
  } catch (error) {
    console.error(error)
  }
};


//     https://api.themoviedb.org/3/movie/436270?api_key=e04c68f789be72aeeeea023bd48810ca&language=en-US
//     https://api.themoviedb.org/3/movie/436270/credits?api_key=e04c68f789be72aeeeea023bd48810ca&language=en-US
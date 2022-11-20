import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'e04c68f789be72aeeeea023bd48810ca';

export const getMovieById = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    const film = response.data;

    let image = '';
    let title = '';

    if (film.poster_path) {
      image = 'https://image.tmdb.org/t/p/w300' + film.poster_path;
    } else {
      image =
        'https://www.nps.k12.nj.us/SCI/wp-content/uploads/sites/67/2020/12/no-photo-220x300.png';
    }

    if (film.title) {
      title = film.title;
    } else {
      title = film.name;
    }

    const year = Number.parseInt(film.release_date);
    const score = Math.round(film.vote_average * 10);
    const genres = film.genres.map(genre => genre.name).join('  ');

    return {
      id: film.id,
      overview: film.overview,
      image,
      year,
      score,
      genres,
      title,
    };
  } catch (error) {
    console.error(error);
  }
};
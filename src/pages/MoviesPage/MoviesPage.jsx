import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getMovies } from 'utils/api/getMovies';

import styles from './moviesPage.module.css';

export const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    getMovies(query).then(data => setFilms(data));
  }, [query]);

  const searchMovies = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.movie.value });
    form.reset();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={searchMovies} className={styles.form}>
        <input
          type="text"
          name="movie"
          placeholder="search movie"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      {films && <MoviesList films={films} prevPage="" />}
    </div>
  );
};

export default MoviesPage;
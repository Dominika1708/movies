import { useState, useEffect } from 'react';

import { getTrends } from 'utils/api/getMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

import styles from './homePage.module.css'

export const HomePage = () => {
  const [films, setFilms] = useState([]);
  

  useEffect(() => {
    getTrends().then(data => setFilms(data));
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      <MoviesList films={films} prevPage="movies/"/>
    </div>
  );
};

export default HomePage;
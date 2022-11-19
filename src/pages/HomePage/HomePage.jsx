import { useState, useEffect } from 'react';
import { getTrends } from 'utils/api/getMovies';

import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrends().then(data => setFilms(data));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList films={films} />
    </div>
  );
};

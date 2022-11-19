import { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'utils/api/getMovies';

export const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(data => {
      setFilm(data);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return;

  const imageLink = 'https://image.tmdb.org/t/p/w300' + film.poster_path;
  const filmYear = Number.parseInt(film.release_date);
  const userScore = Math.round(film.vote_average * 10);
  const genres = film.genres.map(genre => genre.name).join('  ');

  return (
    <div>
      <section>
        <button type="button"> Go back</button>
        <div>
          <img src={imageLink} alt={film.id} />
          <div>
            <h2>
              {film.title || film.name} ({filmYear})
            </h2>
            <span>Use Score: {userScore}%</span>
            <h4>Overview</h4>
            <p>{film.overview}</p>
            <h4>Genres</h4>
            <p>{genres}</p>
          </div>
        </div>
      </section>
      <section>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
};

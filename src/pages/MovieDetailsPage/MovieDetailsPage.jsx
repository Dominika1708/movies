import { useEffect, useState } from 'react';
import {
  useParams,
  Outlet,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovieById } from 'utils/api/getMovieById';
import styled from 'styled-components';
import styles from './movieDetailsPage.module.css';

const Link = styled(NavLink)`
  color: #000;

  &.active {
    color: rgb(212, 63, 172);
  }
`;

export const MovieDetailsPage = () => {
  const [film, setFilm] = useState({});
  const [page, setPage] = useState(0);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setPage(prev => prev - 1);
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    getMovieById(movieId).then(data => {
      setFilm(data);
    });
    setPage(-1);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section className={styles.section}>
        <button onClick={() => navigate(page)} className={styles.button}>
          <b className={styles.arrow}>&#8678;</b> Go back
        </button>
        <div className={styles.wrap}>
          <img src={film.image} alt={film.id} width="300" />
          <div className={styles.info}>
            <h2 className={styles.title}>
              {film.title} {!isNaN(film.year) && <span>({film.year})</span>}
            </h2>
            <span>Use Score: {film.score}%</span>
            <h4>Overview</h4>
            <p>{film.overview}</p>
            <h4>Genres</h4>
            <p>{film.genres}</p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <ul>
          <li className={styles.item}>
            <Link to="cast" className={styles.link}>
              Cast
            </Link>
          </li>
          <li className={styles.item}>
            <Link to="reviews" className={styles.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </div>
  );
};

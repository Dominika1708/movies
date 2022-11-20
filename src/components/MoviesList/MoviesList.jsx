import { Link, useLocation } from 'react-router-dom';

import styles from './moviesList.module.css'

export const MoviesList = ({ films, prevPage }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {films.map(film => (
        <li key={film.id} className={styles.item}>
          <Link to={`${prevPage}${film.id}`} state={{ from: location }} className={styles.link}>
            {film.title || film.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

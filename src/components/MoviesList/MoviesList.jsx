import { Link } from 'react-router-dom';

export const MoviesList = ({ films }) => (
  <ul>
    {films.map(film => (
      <li key={film.id}>
        <Link to={`movies/${film.id}`}>{film.title || film.name}</Link>
      </li>
    ))}
  </ul>
);

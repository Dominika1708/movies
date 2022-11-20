import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/api/getMovies';

import styles from './cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCast(data);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {cast.length > 0 ? (
        <ul className={styles.list}>
          {cast.map(actor => {
            const imageLink =
              'https://image.tmdb.org/t/p/w200' + actor.profile_path;
            const ifNoImage =
              'https://www.york.ac.uk/media/biology/images/staffimages/NoImageAvailableFemale.jpg';

            return (
              <li key={actor.id} className={styles.item}>
                {actor.profile_path ? (
                  <img src={imageLink} alt={actor.name} />
                ) : (
                  <img src={ifNoImage} alt={actor.name} width="200" />
                )}
                <h5 className={styles.actor}>{actor.name}</h5>
                <p className={styles.character}>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ marginLeft: '30px', fontWeight: '500' }}>
          We don't have cast information for this movie.
        </p>
      )}
    </>
  );
};

export default Cast;
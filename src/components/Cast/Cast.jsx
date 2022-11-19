import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastById } from 'utils/api/getMovies';

export const Cast = () => {
  const [cast, setCast] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCastById(movieId).then(data => {
      setCast(data);
    //   setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//   if (isLoading) return;

  return (
    <ul>
      {cast.map(actor => {
        const imageLink =
          'https://image.tmdb.org/t/p/w200' + actor.profile_path;
        const ifNoImage =
              'https://www.york.ac.uk/media/biology/images/staffimages/NoImageAvailableFemale.jpg';
          
        return (
          <li key={actor.id}>
            {actor.profile_path ? (
              <img src={imageLink} alt={actor.name} />
            ) : (
              <img src={ifNoImage} alt={actor.name} width="200" />
            )}
                <h5>{actor.name}</h5>
                <span>Character: {actor.character}</span>
          </li>
        );
      })}
    </ul>
  );
};

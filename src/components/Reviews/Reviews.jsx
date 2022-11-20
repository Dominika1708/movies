import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/api/getMovies';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(notice => (
            <li key={notice.id}>
              <b>Author: {notice.author}</b>
              <p>{notice.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginLeft: '30px', fontWeight: '500' }}>
          We don't have any reviews for this movie.
        </p>
      )}
    </>
  );
};

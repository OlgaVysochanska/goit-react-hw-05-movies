import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieById } from 'components/shared/services/moviesAPI';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [id]);
  return movie;
};

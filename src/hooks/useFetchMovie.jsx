import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieById } from 'components/shared/services/moviesAPI';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieById( id ).then( setMovie );
    console.log( movie );
    return movie;
  }, [id]);
};

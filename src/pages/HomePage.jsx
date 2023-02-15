import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrending } from 'components/shared/services/moviesAPI';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  const location = useLocation();

  const elements = movies.map(movie => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link>
    </li>
  ));

  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};

export default HomePage;

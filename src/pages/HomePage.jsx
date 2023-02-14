import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { getTrending } from 'components/shared/services/moviesAPI';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  console.log(movies);

  const elements = movies.map(movie => (
    <li key={movie.id}>
      <Link to={movie.id}>{movie.title}</Link>
    </li>
  ));

  return (
    <>
      <ul>{elements}</ul>
      <Outlet />
    </>
  );
};

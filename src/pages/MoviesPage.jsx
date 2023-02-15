import { Link } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieByQuery } from 'components/shared/services/moviesAPI';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    if (keyword === '' || keyword === null) {
      return;
    }

    fetchMovieByQuery(keyword).then(setMovies);
  }, [keyword]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ keyword: form.elements.keyword.value });
    form.reset();
  };

  const location = useLocation();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="keyword" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;

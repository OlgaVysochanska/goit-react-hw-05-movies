import { useFetchMovie } from 'hooks/useFetchMovie';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const movie = useFetchMovie();

  const location = useLocation();
  const from = location.state?.from || '/';
  const navigate = useNavigate();

  return (
    <>
      {movie && (
        <>
          <button onClick={() => navigate(from)} type="button">
            Go back
          </button>
          <div className={styles.movieInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              width="300"
            />
            <section>
              <h1>{movie.title}</h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </section>
          </div>
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to={`/movies/${movie.id}/cast`} state={{ from: from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={`/movies/${movie.id}/review`} state={{ from: from }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;

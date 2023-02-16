import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'components/shared/services/moviesAPI';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(id);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCast();
  }, [id]);

  const elements = cast.map(({ id, name, character, profile_path }) => (
    <li key={id}>
      {profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt=""
          width="200"
        ></img>
      )}
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));

  return (
    <ul>
      {elements.length === 0
        ? "We don't have any reviews for this movie"
        : elements}
    </ul>
  );
};

export default CastPage;

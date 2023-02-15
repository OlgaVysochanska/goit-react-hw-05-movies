import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'components/shared/services/moviesAPI';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(id);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      <ul>
        {elements.length === 0
          ? "We don't have any reviews for this movie"
          : elements}
      </ul>
    </>
  );
};

export default ReviewsPage;

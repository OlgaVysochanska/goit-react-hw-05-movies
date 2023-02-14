import { Routes, Route } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <HomePage /> } />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":id" element={<MovieDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// 2e2f33ab3b306dc2bda4020a62b18b17

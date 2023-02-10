import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from 'components/Navbar/Navbar';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

// 2e2f33ab3b306dc2bda4020a62b18b17

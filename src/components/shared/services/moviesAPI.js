import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '2e2f33ab3b306dc2bda4020a62b18b17',
  },
});

export const getTrending = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data.results;
};

export const fetchMovieById = async (id) => {
    const { data } = await instance.get( `movies/${ id }` );
    return data;
}

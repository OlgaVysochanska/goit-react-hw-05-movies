import { nanoid } from 'nanoid';

const options = [
  {
    id: nanoid(),
    text: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Movies',
    link: 'movies',
  },
];

export default options;

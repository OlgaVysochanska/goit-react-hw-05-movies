import { Link } from 'react-router-dom';

import options from './options';

export const Navbar = () => {
  const elements = options.map(({ id, text, link }) => (
    <li key={id}>
      <Link to={link}>{text}</Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

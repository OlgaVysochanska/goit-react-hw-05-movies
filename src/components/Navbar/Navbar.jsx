import { NavLink } from 'react-router-dom';

import options from './options';

export const Navbar = () => {
  const elements = options.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));

  return <ul>{elements}</ul>;
};

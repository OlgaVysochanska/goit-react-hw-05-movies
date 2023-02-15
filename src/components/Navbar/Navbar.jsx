import { NavLink } from 'react-router-dom';

import options from './options';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const elements = options.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={styles.option} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={styles.menu}>{elements}</ul>;
};

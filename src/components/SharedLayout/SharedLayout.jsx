import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import styles from './sharedLayout.module.css';

const Link = styled(NavLink)`
  color: #000;

  &.active {
    color: rgb(212, 63, 172);
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <header className={styles.container}>
        <nav>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/movies" className={styles.link}>
            Movies
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

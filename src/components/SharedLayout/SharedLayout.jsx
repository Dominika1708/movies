import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  color: #000;

  &.active {
    color: #f0f;
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

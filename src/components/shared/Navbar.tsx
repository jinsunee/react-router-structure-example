import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">First Page</Link>
        </li>
        <li>
          <Link to="/second">Second Page</Link>
        </li>
        <li>
          <Link to="/third">Third Page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
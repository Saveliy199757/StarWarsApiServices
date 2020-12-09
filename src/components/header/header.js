import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a >
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <p >People</p>
        </li>
        <li>
          <a >Planets</a>
        </li>
        <li>
          <a >Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
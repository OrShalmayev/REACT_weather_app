import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <header className="Header">
    <div className="Header__container">
      {/* LEFT */}
      <div className="Header__left">
        <Link to="/">LOGO</Link>
      </div>
      {/* RIGHT */}
      <div className="Header__right">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  </header>
);

export default Header;

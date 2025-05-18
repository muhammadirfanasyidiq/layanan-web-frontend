import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="menu-toggle">
        <i className="fas fa-bars"></i>
      </div>
      <div className="user-menu">
        <div className="dropdown">
          <button className="dropdown-toggle">
            <i className="fas fa-user-circle"></i> Admin <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
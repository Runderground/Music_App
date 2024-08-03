// src/components/Header.js
import React from 'react';
import '../styles/header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="../../images/logo.png"/>
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-profile">
        <img src="../images/logo.png" alt="Profile" className="profile-icon" />
        <div className="profile-menu">
          <button>Settings</button>
          <button>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

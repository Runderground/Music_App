import React from 'react';
import '../styles/header.css'; // Importando o CSS para o cabeçalho

import logo from '../assets/logo.png';
import profileIcon from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-profile">
        <img src={profileIcon} alt="Profile" className="profile-icon" />
        <div className="profile-menu">
          <button>Settings</button>
          <button>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

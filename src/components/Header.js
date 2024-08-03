// src/components/Header.js
import React, { useState } from 'react';
import '../styles/header.css'; 

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">Faccin Music</a>
      </div>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Pesquisar músicas ou artistas..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="profile">
        <button className="profile-icon" onClick={toggleDropdown}>
          👤 
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <a href="/settings">Configurações</a>
            <a href="/logout">Logout</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

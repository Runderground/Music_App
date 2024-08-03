import React from 'react';
import '../styles/Library.css';

const Library = () => {
  return (
    <div className="library">
      <h2>Biblioteca</h2>
      {/* Listar musicas */}
      <div className="music-list">
        {/* exemplos */}
        <div className="music-item">Música 1</div>
        <div className="music-item">Música 2</div>
      </div>
    </div>
  );
};

export default Library;

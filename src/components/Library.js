import React from 'react';
import '../styles/Library.css';

const playlists = [
  { id: 1, name: 'Chill Vibes' },
  { id: 2, name: 'Top Hits' },
  { id: 3, name: 'Indie Rock' },
];

const Library = () => {
  return (
    <div className="library">
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id} className="playlist-item">
            {playlist.name}
          </li>
        ))}
        <li>Playlist 1</li>
        <li>Playlist 2</li>
        <li>Playlist 3</li>
        <li>Playlist 4</li>
        <li>Playlist 5</li>

      </ul>
    </div>
  );
};

export default Library;

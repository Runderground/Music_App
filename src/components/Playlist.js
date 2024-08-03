import React, { useContext } from 'react';
import { MusicContext } from '../context/MusicContext';

const Playlist = () => {
  const { playlist, setCurrentTrack } = useContext(MusicContext);

  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {playlist.map(track => (
          <li key={track.id} onClick={() => setCurrentTrack(track)}>
            {track.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;

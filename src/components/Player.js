import React, { useContext } from 'react';
import { MusicContext } from '../context/MusicContext';

const Player = () => {
  const { currentTrack } = useContext(MusicContext);

  return (
    <div>
      {currentTrack ? (
        <audio controls src={currentTrack.url} />
      ) : (
        <p>Select a track to play</p>
      )}
    </div>
  );
};

export default Player;

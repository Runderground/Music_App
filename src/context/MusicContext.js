import React, { createContext, useState } from 'react';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <MusicContext.Provider value={{ playlist, setPlaylist, currentTrack, setCurrentTrack }}>
      {children}
    </MusicContext.Provider>
  );
};

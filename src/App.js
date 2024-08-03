import React from 'react';
import './App.css';
import Player from './components/Player';
import Playlist from './components/Playlist';
import { MusicProvider } from './context/MusicContext';

function App() {
  return (
    <MusicProvider>
      <div className="App">
        <header className="App-header">
          <h1>Music App</h1>
        </header>
        <Playlist />
        <Player />
      </div>
    </MusicProvider>
  );
}

export default App;

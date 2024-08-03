// src/App.js
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import { MusicProvider } from './context/MusicContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Library from './components/Library';
import Playlist from './components/Playlist';
import Settings from './components/Settings';
import SearchResults from './components/SearchResults';
import NowPlaying from './components/PlayingNow'

function App() {
  const handleSearch = (searchTerm) => {
    console.log('Search Term:', searchTerm);
  };

  return (
    <MusicProvider>
      <Router>
        <div className="App">
          <Header onSearch={handleSearch} />
          <Routes>
            <Route path="/library" element={<Library />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/" element={<Playlist />} /> 
          </Routes>
        </div>
      </Router>
    </MusicProvider>
  );
}

export default App;

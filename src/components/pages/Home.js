import React from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Feito para [nome de usuario]</h2>
          <Link to="#" className="text-sm font-medium text-[#87ceeb]">
            Ver tudo
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card title="Música Tocando" artist="Artista" />
          <Card title="Música Tocando" artist="Artista" />
          <Card title="Música Tocando" artist="Artista" />
          <Card title="Música Tocando" artist="Artista" />
        </div>
      </section>
      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Suas Playlists</h2>
          <Link to="#" className="text-sm font-medium text-[#87ceeb]">
            Ver tudo
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card title="Playlist 1" artist="20 músicas" />
          <Card title="Playlist 2" artist="15 músicas" />
          <Card title="Playlist 3" artist="18 músicas" />
          <Card title="Playlist 4" artist="22 músicas" />
        </div>
      </section>
      <section className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Artistas</h2>
          <Link to="#" className="text-sm font-medium text-[#87ceeb]">
            Ver tudo
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card title="Artista 1" artist="Gênero" />
          <Card title="Artista 2" artist="Gênero" />
          <Card title="Artista 3" artist="Gênero" />
          <Card title="Artista 4" artist="Gênero" />
        </div>
      </section>
    </div>
  );
};

export default Home;

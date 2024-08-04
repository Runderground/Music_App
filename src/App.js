import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { input } from './components/Input';
import { card } from './components/Card';
import Home from './components/pages/Home'
import { MdHome, MdSearch, MdLibraryMusic, MdAdd, MdChevronLeft, MdChevronRight } from 'react-icons/md'; // Usando react-icons

function App() {
  return (
    <>
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>

  

  );
}

function Sidebar() {
  return (
    <div className="flex flex-col items-start gap-6 border-r border-[#2a2a2a] px-6 py-8">
      <div className="flex items-center gap-2">
        <MdLibraryMusic className="h-8 w-8" />
        <span className="text-2xl font-bold">Musify</span>
      </div>
      <nav className="flex flex-col items-start gap-2">
        <NavItem to="#" icon={MdHome} label="Início" />
        <NavItem to="#" icon={MdSearch} label="Navegar" />
        <NavItem to="#" icon={MdLibraryMusic} label="Sua Biblioteca" />
        <NavItem to="#" icon={MdAdd} label="Criar Playlist" />
      </nav>
      <div className="flex-1 overflow-auto">
        <div className="grid gap-2">
          <div className="text-xs font-medium text-[#b3b3b3]">SUAS PLAYLISTS</div>
          <NavItem to="#" label="Playlist 1" />
          <NavItem to="#" label="Playlist 2" />
          <NavItem to="#" label="Playlist 3" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon: Icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#2a2a2a]"
    >
      {Icon && <Icon className="h-5 w-5" />}
      {label}
    </Link>
  );
}

function MainContent() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <Content />
    </div>
  );
}

function Header() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#2a2a2a] bg-[#121212]/80 backdrop-blur-md px-6 py-4">
      <div className="flex items-center gap-4">
        <button variant="ghost" size="icon" className="rounded-full">
          <MdChevronLeft className="h-6 w-6" />
        </button>
        <button variant="ghost" size="icon" className="rounded-full">
          <MdChevronRight className="h-6 w-6" />
        </button>
        <div className="relative flex-1">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b3b3b3]" />
          <input
            type="search"
            placeholder="Buscar"
            className="w-full rounded-full bg-[#2a2a2a] pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#1db954]"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button variant="ghost" size="icon" className="rounded-full">
          <img
            src="/placeholder.svg"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
            style={{ aspectRatio: "32/32", objectFit: "cover" }}
          />
        </button>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-1 overflow-auto p-6">
      <Section title="Feito para [nome de usuario]" />
      <Section title="Suas Playlists" />
    </div>
  );
}

function Section({ title }) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <Link to="#" className="text-sm font-medium text-[#87ceeb]">
          Ver tudo
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <cardComponent />
        <cardComponent />
        <cardComponent />
        <cardComponent />
      </div>
    </section>
  );
}

function cardComponent() {
  return (
    <card className="relative overflow-hidden rounded-lg bg-[#2a2a2a]/60 backdrop-blur-md">
      <img
        src="/placeholder.svg"
        alt="Album Cover"
        width={200}
        height={200}
        className="h-full w-full object-cover"
        style={{ aspectRatio: "200/200", objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-bold">Música Tocando</h3>
        <p className="text-sm text-[#b3b3b3]">Artista</p>
      </div>
    </card>
  );
}

export default App;

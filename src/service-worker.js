import { precacheAndRoute } from 'workbox-precaching';

// Precisa ser adicionado em um comentário para que o Workbox substitua com a lista de arquivos a serem cacheados
precacheAndRoute(self.__WB_MANIFEST);

const CACHE_NAME = 'my-music-app-cache';
const urlsToCache = [
  '/',
  '/index.html',
  // Adicione outras URLs que você deseja armazenar em cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
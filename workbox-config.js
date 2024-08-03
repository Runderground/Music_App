module.exports = {
    globDirectory: 'build/',
    globPatterns: [
      '**/*.{html,js,css,png,jpg,jpeg,svg,gif}'
    ],
    swDest: 'build/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 50,
          },
        },
      },
      {
        urlPattern: new RegExp('https://jsonplaceholder.typicode.com/'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api',
          networkTimeoutSeconds: 10,
          expiration: {
            maxEntries: 5,
            maxAgeSeconds: 60,
          },
        },
      },
    ],
  };
  
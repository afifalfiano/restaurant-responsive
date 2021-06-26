// eslint-disable-next-line no-undef
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

// eslint-disable-next-line no-undef
if (workbox) {
  console.log('Workbox berhasil dimuat');
} else {
  console.log('Workbox gagal dimuat');
}

// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute([
  { url: '/index.html', revision: '1' },
  { url: '/manifest.json', revision: '1' },
  { url: '/bundle.js', revision: '1' },
]);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|ico|js)$/,
  workbox.strategies.cacheFirst(),
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'dataRestaurant',
  }),
);

const CACHE_NAME = 'resto-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
  '/manifest.json',
  '/icon.png',
  '/apple-icon-180x180.png',
  '/icon/icon-512x512.png',

];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener('fetch', (event) => {
  const base_url = 'https://restaurant-api.dicoding.dev/';

  if (event.request.url.indexOf(base_url) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => fetch(event.request).then((response) => {
        cache.put(event.request.url, response.clone());
        return response;
      })),
    );
  } else {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((response) => response || fetch(event.request)),
    );
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName != CACHE_NAME) {
            console.log(`ServiceWorker: cache ${cacheName} dihapus`);
            return caches.delete(cacheName);
          }
        }),
      )),
  );
});

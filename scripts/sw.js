importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');
importScripts('/scripts/precache.js');

if (workbox) {
  workbox.precaching.precacheAndRoute(precache);
  // Fetch JS from network, fallback to cache
  workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
  );
  // Fetch HTML from network, fallback to cache
  workbox.routing.registerRoute(
    new RegExp('/[^\.]*'),
    workbox.strategies.networkFirst()
  );
  // Fetch CSS from cache, fetch from network in background
  workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
      // Use a custom cache name
      cacheName: 'css-cache',
    })
  );
  // Fetch images from cache first, up to 200 images in the cache
  workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 200 images
          maxEntries: 200,
          // Cache for a maximum of a day
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );
}

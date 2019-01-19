/**
 * This file follows the Service Worker lifecycle of events via MDN - Using Promises and Service Workers: 
 * register, install, activate, cache, delete, fetch
 * https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
 */


const appName = "restaurant-reviews-app";
const staticCacheName = appName + "-v1.0";
const imagesCache = appName + "-images";

let allCaches = [staticCacheName, imagesCache];

// Install service worker, cache all static assets
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(staticCacheName).then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          'restaurant.html',
          'css/styles.css',
          'css/responsive.css',
          'js/dbhelper.js',
          'js/main.js',
          'js/restaurant_info.js',
          'js/register-sw.js', 
          'data/restaurants.json'
          // add other static assets here
        ]);
      })
    );
  });
  
  
  // Activate service worker, delete any previous caches 
  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith(appName) &&
                   !allCaches.includes(cacheName);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });

  // Hijack fetch requests and respond accordingly
self.addEventListener('fetch', function(event) {

    // Default behavior: respond with any cached elements, falling back to network.
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });

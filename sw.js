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
        'data/restaurants.json',
        // cache restaurant images
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg'
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


self.addEventListener('fetch', function(event) {
  event.respondWith(
    // checks servicer workers for cached data results
    // if there's a match, return cached value
    // else return result to fetch call
    // and pull data from the network
    caches.match(event.request).then(function(response) { 
        if(response) {
          return response;
        } else {
        } return fetch(event.request);  
    })
  );
});

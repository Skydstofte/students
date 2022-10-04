const cacheName = 'cache';

// When website loads - cache resources from list 
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(['/', '/javascript.js', '/mystyle.css', '/members.json', '/index.html', '/morten.png', '/nina.png', '/olivia.png']);
        })
    );
});

// If resources isn't avaliable online - search in cache for a match 
self.addEventListener('fetch', function(event) {
  event.respondWith(
      fetch(event.request).catch(() => 
      caches.open(cacheName).then(cache => cache.match(event.request))
      )
  );
});
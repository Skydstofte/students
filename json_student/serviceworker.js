const cacheName = 'cache-students';

// When website loads - cache resources from list 
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(['/students/', '/students/index.html', '/students/morten.png', '/students/nina.png', '/insects/olivia.png']);
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
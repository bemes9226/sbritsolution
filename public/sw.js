const CACHE_NAME = 'sbrit-solution-v2';
const STATIC_CACHE = 'sbrit-static-v2';
const DYNAMIC_CACHE = 'sbrit-dynamic-v2';

const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/logo512.png',
  '/logo192.png',
  '/manifest.json',
  '/favicon.ico',
  '/index.html'
];

const staticAssets = [
  '/logo512.png',
  '/logo192.png',
  '/favicon.ico',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE)
        .then(cache => {
          console.log('Caching static assets');
          return cache.addAll(staticAssets);
        }),
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Caching app shell');
          return cache.addAll(urlsToCache);
        })
    ])
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - network first with cache fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful API responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Return cached response if network fails
          return caches.match(request);
        })
    );
    return;
  }

  // Handle static assets (cache first)
  if (staticAssets.includes(url.pathname)) {
    event.respondWith(
      caches.match(request)
        .then(response => {
          return response || fetch(request)
            .then(fetchResponse => {
              const responseClone = fetchResponse.clone();
              caches.open(STATIC_CACHE)
                .then(cache => cache.put(request, responseClone));
              return fetchResponse;
            });
        })
    );
    return;
  }

  // Handle HTML pages (network first)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, responseClone));
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // Handle other resources (stale-while-revalidate)
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        const fetchPromise = fetch(request)
          .then(response => {
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(DYNAMIC_CACHE)
                .then(cache => cache.put(request, responseClone));
            }
            return response;
          });
        
        return cachedResponse || fetchPromise;
      })
  );
});

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/logo192.png',
    badge: '/logo192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Courses',
        icon: '/logo192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/logo192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('SBRIT Solution', options)
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

function doBackgroundSync() {
  // Handle background sync tasks
  return Promise.resolve();
}

// Cache size management
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_SIZE') {
    // Limit cache size
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          return caches.open(cacheName).then(cache => {
            return cache.keys().then(requests => {
              if (requests.length > 50) {
                // Remove oldest entries
                return cache.delete(requests[0]);
              }
            });
          });
        })
      );
    });
  }
}); 
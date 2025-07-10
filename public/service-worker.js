const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/main.js",
    "/icon-192.png",
    "/icon-512.png"
];

// Instala el service worker y cachea archivos esenciales
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

// Activa el service worker y elimina caches antiguos si los hay
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                })
            )
        )
    );
});

// Intercepta las peticiones y las responde desde caché si es posible
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) =>
            response || fetch(event.request)
        )
    );
});

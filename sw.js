const CACHE_NAME = "japan-trip-2026-v20260523000000";
const PRECACHE_PATHS = [
  "./",
  "./index.html",
  "./bookings-status.html",
  "./city-guide.html",
  "./essential-apps.html",
  "./neighborhood-guide-tokyo.html",
  "./neighborhood-guide-kyoto.html",
  "./neighborhood-guide-osaka.html",
  "./transit-guide.html",
  "./phrases.html",
  "./print-itinerary.html",
  "./packing-list.html",
  "./offline.html",
  "./visual-schedule.html",
  "./visualizations/day-01.html",
  "./visualizations/day-02.html",
  "./visualizations/day-02-route.html",
  "./visualizations/day-03.html",
  "./visualizations/day-04.html",
  "./visualizations/day-05.html",
  "./visualizations/day-06.html",
  "./visualizations/day-07.html",
  "./visualizations/day-08.html",
  "./visualizations/day-09.html",
  "./visualizations/day-10.html",
  "./visualizations/day-view.html",
  "./visualizations/index.html",
  "./visualizations/route-view.html",
  "./data/bookings.json",
  "./data/city-guide-anchors.json",
  "./data/days.json",
  "./data/routes.json",
  "./assets/icons/icon.svg",
  "./assets/scripts/site-nav.js",
  "./assets/scripts/theme.js",
  "./assets/styles/site-nav.css",
  "./assets/styles/theme.css",
  "./manifest.webmanifest",
];

const cacheUrl = (path) => new URL(path, self.registration.scope).toString();

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_PATHS.map(cacheUrl)))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request, { ignoreSearch: true })
            .then(
              (cached) => cached || caches.match(cacheUrl("./offline.html")),
            ),
        ),
    );
    return;
  }

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    }),
  );
});

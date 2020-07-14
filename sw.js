---
---

// Liquid frontmatter at the top of this file so jekyll can fill in the resources to cache

const CACHE_NAME = "kostyapro-cache-v1";
const urlsToCache = [
  "/assets/styles.css",
  {% for page in site.pages %}
    {% if page.name contains ".md" %}
      "{{ page.url }}",
    {% endif %}
  {% endfor %}

  {% for post in site.posts %}
    "{{ post.url }}",
  {% endfor %}

  {% for file in site.static_files %}
    "{{ file.path }}",
  {% endfor %}
];

self.addEventListener('install', event => {
  console.log('Installing Service Worker.');
  // Perform install steps
  const preCache = async () => {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll(urlsToCache);
  };
  event.waitUntil(preCache());
});

self.addEventListener('activate', event => {
  console.log("Removing stale caches.");
  // delete unused caches
  const cleanCaches = async () => {
    const keys = await caches.keys();
    keys.filter((key) => key != CACHE_NAME).forEach((key) => caches.delete(key));
  }
  event.waitUntil(cleanCaches())
});

self.addEventListener('fetch', event => {
  if (event.request.method != 'GET') {
    return;
  }

  event.respondWith(async function() {
    // Try to get the response from a cache.
    const cache = await caches.open('dynamic-v1');
    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {
      // If we found a match in the cache, return it, but also
      // update the entry in the cache in the background.
      event.waitUntil(cache.add(event.request));
      return cachedResponse;
    }

    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  }());
});
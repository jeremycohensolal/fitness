/* Programme élastiques — cache hors connexion */

var CACHE = "programme-v2";

var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-512.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return c.addAll(ASSETS);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function(){
      return self.clients.claim();
    })
  );
});

/* Cache d'abord : la page s'ouvre instantanément, même sans réseau. */
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET"){ return; }

  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit){ return hit; }

      return fetch(e.request).then(function(res){
        if(res && res.status === 200 && res.type === "basic"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        }
        return res;
      }).catch(function(){
        return caches.match("./index.html");
      });
    })
  );
});

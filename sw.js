/* Programme — cache hors connexion
   Stratégie :
   - Page HTML : réseau d'abord, cache en secours -> les mises à jour arrivent seules.
   - Programmes / icônes / manifeste : cache d'abord, rafraîchis en arrière-plan.
   Tout nouveau fichier programmes/*.js doit être ajouté à ASSETS, inscrit en
   <script src> dans index.html, et accompagné d'un bump de CACHE.
*/

var CACHE = "programme-v8";

var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./programmes/01-elastique.js",
  "./programmes/02-kettlebell.js",
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

function isPage(req){
  return req.mode === "navigate" || req.destination === "document";
}

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET"){ return; }

  /* La page : on tente toujours le réseau en premier. */
  if(isPage(req)){
    e.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put("./index.html", copy); });
        return res;
      }).catch(function(){
        return caches.match("./index.html").then(function(hit){
          return hit || caches.match("./");
        });
      })
    );
    return;
  }

  /* Le reste : cache d'abord, mais on rafraîchit en silence. */
  e.respondWith(
    caches.match(req).then(function(hit){
      var live = fetch(req).then(function(res){
        if(res && res.status === 200 && res.type === "basic"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){ return hit; });

      return hit || live;
    })
  );
});

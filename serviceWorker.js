const app
const appShell =  [
"/",
"/index.html",
  "/js/app.js",

];

self.addEventListener("install",installEvent=>{
    installEvent.waitUntil(
        caches.open(appCachekey).then(cache=>{
            cache.addAll(appshell);
        })
    );
});

self.addEventListener("fetch",fetchEvent=>{
    fetchEvent.responWith(
        caches.match(fetchEvent.request).then(res=>{
            return res  fetch(fetchEvent.request);
        })
    );
});

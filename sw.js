
const CACHE="virat-social-x-v1";

const CORE=[
"./",
"./index.html",
"./manifest.json",
"./pages/emergency.html",
"./pages/hospital.html",
"./pages/government.html",
"./pages/jobs.html",
"./pages/education.html",
"./pages/legal.html",
"./pages/business.html",
"./pages/nearby.html",
"./pages/news.html",
"./pages/sports.html",
"./pages/browser.html",
"./pages/calculator.html"
];

self.addEventListener("install",event=>{
 event.waitUntil(
  caches.open(CACHE).then(cache=>cache.addAll(CORE))
 );
 self.skipWaiting();
});

self.addEventListener("activate",event=>{
 event.waitUntil(
  caches.keys().then(keys=>
   Promise.all(
    keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
   )
  )
 );
 self.clients.claim();
});

self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET") return;

 event.respondWith(
  caches.match(event.request).then(cached=>{
   return cached || fetch(event.request).then(response=>{
    const copy=response.clone();
    caches.open(CACHE).then(cache=>cache.put(event.request,copy));
    return response;
   }).catch(()=>caches.match("./index.html"));
  })
 );
});

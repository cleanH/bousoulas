self.addEventListener('install',e=>{e.waitUntil(caches.open('bq2').then(c=>c.addAll(['./','index.html','manifest.json','icon-192.png'])));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=='bq2').map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open('bq2').then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request)));});

/* Ο Μπούσουλας μεταφέρθηκε στο bousoulas.pages.dev – καθαρίζει την παλιά μνήμη */
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.map(function(x){return caches.delete(x);}));}).then(function(){return self.registration.unregister();}).then(function(){return self.clients.matchAll();}).then(function(c){c.forEach(function(x){x.navigate(x.url);});}));});

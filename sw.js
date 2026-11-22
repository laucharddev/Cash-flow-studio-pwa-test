// Application shell only; financial data are never cached by this worker.
const CACHE='cfs-offline-demo-v3.2.2-final-rc1';
const ASSETS=['./','./index.html','./styles.css','./app.js','./register-sw.js','./cfs-logo.svg','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cfs-offline-demo-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;event.respondWith((req.mode==='navigate'?fetch(req).then(res=>res.ok?res:Promise.reject(new Error('Network response unavailable'))).catch(()=>caches.match('./index.html')):caches.match(req).then(hit=>hit||fetch(req))).catch(()=>new Response('Offline resource unavailable',{status:503})))});

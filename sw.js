!function(){"use strict";self.CACHE_BUSTER="1598561070192|0.9711084815346389",self.addEventListener("install",(function(e){return self.skipWaiting()})),self.addEventListener("activate",(function(e){return self.clients.claim()}));var e=function(e,t){return caches.keys().then((function(n){n.forEach((function(n){0===n.indexOf(e)&&n!==t&&caches.delete(n)}))}))},t="".concat("esw-asset-cache","-").concat("1"),n=["/weatherapp/assets/icon-192-3d338e807a45b9ce603cb1207f1ede6d.png","/weatherapp/assets/icon-512-a6b116640f3827faab79605ccfdd1834.png","/weatherapp/assets/icon-96-8869e7bd1510daba976f98fe2a22cf94.png","/weatherapp/assets/search-illustration-a8c1ad610676edfe3f0c3eea8cdecefd.png","/weatherapp/assets/search-shortcut-f2273f185fc0008d1a94a1efdefa70c6.png","/weatherapp/assets/vendor-f4633b2fc7f8074aad151bf2b6f1b868.css","/weatherapp/assets/vendor-cb64fdf2ee086c330c4241746dd04f77.js","/weatherapp/assets/weatherapp-7bffaf208cb602626af09d6bd47c889b.css","/weatherapp/assets/weatherapp-f2fbbcec63d7a0c767cbf16e4df23fc1.js"].map((function(e){return new URL(e,"/weatherapp/").toString()}));self.addEventListener("install",(function(e){e.waitUntil(caches.open(t).then((function(e){return Promise.all(n.map((function(t){var n=new Request(t,{mode:"cors"});return fetch(n).then((function(n){if(n.status>=400)throw new Error("Request for ".concat(t," failed with status ").concat(n.statusText));return e.put(t,n)})).catch((function(e){console.error("Not caching ".concat(t," due to ").concat(e))}))})))})))})),self.addEventListener("activate",(function(c){c.waitUntil(Promise.all([e("esw-asset-cache",t),void caches.open(t).then((function(e){return e.keys().then((function(t){t.forEach((function(t){-1===n.indexOf(t.url)&&e.delete(t)}))}))}))]))})),self.addEventListener("fetch",(function(e){var c="GET"===e.request.method,s=-1!==n.indexOf(e.request.url);c&&s&&e.respondWith(caches.match(e.request,{cacheName:t}).then((function(t){return t||fetch(e.request.url,{mode:"cors"})})))}));function c(e,t){return!!t.find((function(t){return t.test(decodeURI(e))}))}var s="".concat("esw-cache-fallback","-").concat("1"),a=["https://api.openweathermap.org/(.+)","https://monisha-tech.github.io/weatherapp/sw-registration.js"].map((function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self.location;return decodeURI(new URL(encodeURI(e),t).toString())}(e);return new RegExp("^".concat(t,"$"))}));self.addEventListener("fetch",(function(e){var t=e.request;"GET"===t.method&&/^https?/.test(t.url)&&c(t.url,a)&&e.respondWith(caches.open(s).then((function(n){return fetch(t).then((function(e){return n.put(t,e.clone()),e})).catch((function(){return caches.match(e.request)}))})))})),self.addEventListener("activate",(function(t){t.waitUntil(e("esw-cache-fallback",s))}));var r=[],i=[];self.INDEX_FILE_HASH="e7fc2b5cad4733266e55895144ab5a2b";var o="".concat("esw-index","-").concat("1"),u=new URL("index.html",self.location).toString();self.addEventListener("install",(function(e){e.waitUntil(fetch(u,{credentials:"include"}).then((function(e){return caches.open(o).then((function(t){return t.put(u,e)}))})))})),self.addEventListener("activate",(function(t){t.waitUntil(e("esw-index",o))})),self.addEventListener("fetch",(function(e){var t=e.request,n=new URL(t.url),s="GET"===t.method,a=-1!==t.headers.get("accept").indexOf("text/html"),h=n.origin===location.origin,f=c(t.url,r),l=!i.length||c(t.url,i);!("/tests"===n.pathname&&!1)&&s&&a&&h&&l&&!f&&e.respondWith(caches.match(u,{cacheName:o}).then((function(e){return e||fetch(u,{credentials:"include"}).then((function(e){return caches.open(o).then((function(t){return t.put(u,e)})),e.clone()}))})))}))}();
//# sourceMappingURL=/weatherapp/sw-e7845406768f8c0218ea94e5b7f530c6.map
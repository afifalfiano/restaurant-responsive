var serviceWorkerOption = {
  "assets": [
    "/bundle.js",
    "/apple-icon-180x180.png",
    "/favicon.ico",
    "/favicon.png",
    "/manifest.json",
    "/icon/icon-192x192.png",
    "/icon/icon-256x256.png",
    "/icon/icon-384x384.png",
    "/icon/icon-512x512.png",
    "/images/heros/hero-image_2-min.jpg",
    "/index.html"
  ]
};
        
        !function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"),workbox?console.log("Workbox berhasil dimuat"):console.log("Workbox gagal dimuat"),workbox.precaching.precacheAndRoute([{url:"/index.html",revision:"1"},{url:"/manifest.json",revision:"1"},{url:"/bundle.js",revision:"1"}]),workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico|js)$/,workbox.strategies.cacheFirst()),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,workbox.strategies.staleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/use\.fontawesome\.com/,workbox.strategies.staleWhileRevalidate({cacheName:"use-fontawesome"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,workbox.strategies.cacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxAgeSeconds:31536e3,maxEntries:30})]})),workbox.routing.registerRoute(/^https:\/\/restaurant-api\.dicoding\.dev/,workbox.strategies.staleWhileRevalidate({cacheName:"dataRestaurant"}))}]);
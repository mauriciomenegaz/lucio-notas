!function(e){function t(t){for(var n,o,u=t[0],l=t[1],i=t[2],c=0,d=[];c<u.length;c++)o=u[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(f&&f(t);d.length;)d.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={3:0},a={3:0},s=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=function(){try{return document.createElement("link").relList.supports("preload")}catch(e){return!1}}();o[e]?t.push(o[e]):0!==o[e]&&{1:1}[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="assets/css/"+({0:"html-asset/0--index",1:"html-asset/1--jogo"}[e]||e)+"."+{0:"daff6e56",1:"af8424fa"}[e]+".chunk.css",s=u.p+a,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var c=(d=l[i]).getAttribute("data-href")||d.getAttribute("href");if(("stylesheet"===d.rel||"preload"===d.rel)&&(c===a||c===s))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){var d;if((c=(d=f[i]).getAttribute("data-href"))===a||c===s)return t()}var p=document.createElement("link");p.rel=r?"preload":"stylesheet",r?p.as="style":p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=s,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){if(o[e]=0,r){var t=document.createElement("link");t.href=u.p+"assets/css/"+({0:"html-asset/0--index",1:"html-asset/1--jogo"}[e]||e)+"."+{0:"daff6e56",1:"af8424fa"}[e]+".chunk.css",t.rel="stylesheet",t.type="text/css",document.body.appendChild(t)}})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+"assets/js/"+({0:"html-asset/0--index",1:"html-asset/1--jogo"}[e]||e)+"."+{0:"daff6e56",1:"af8424fa"}[e]+".chunk.js"}(e);var c=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/lucio-notas/",u.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=i;r()}([]);
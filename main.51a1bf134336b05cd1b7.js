!function(e){function n(n){for(var t,o,i=n[0],a=n[1],u=0,s=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(f&&f(n);s.length;)s.shift()()}var t={},r={0:0};var o={};var i={8:function(){return{"./sandtable_bg.js":{__wbg_random_29218b0f217b2697:function(){return t[23].exports.c()},__wbindgen_throw:function(e,n){return t[23].exports.d(e,n)}}}}};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var u=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=u);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+""+({}[e]||e)+"."+{1:"c5d8afb95145d50f2ebe",2:"ad246f4856cd6a79a015"}[e]+".js"}(e);var f=new Error;s=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return({2:[8]}[e]||[]).forEach((function(e){var t=o[e];if(t)n.push(t);else{var r,u=i[e](),s=fetch(a.p+""+{8:"8a2a5642eaa0f2170240"}[e]+".module.wasm");if(u instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(s),u]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(s,u);else{r=s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,u)}))}n.push(o[e]=r.then((function(n){return a.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="https://funkyhippo.github.io/sandspiel/",a.oe=function(e){throw console.error(e),e},a.w={};var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var f=s;a(a.s=0)}([function(e,n,t){Promise.all([t.e(1),t.e(2)]).then(t.bind(null,1)).catch((function(e){return console.error("Error importing `index.js`:",e)}))}]);
//# sourceMappingURL=main.51a1bf134336b05cd1b7.js.map
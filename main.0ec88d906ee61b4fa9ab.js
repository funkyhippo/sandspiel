!function(n){function e(e){for(var o,A,i=e[0],r=e[1],a=0,s=[];a<i.length;a++)A=i[a],Object.prototype.hasOwnProperty.call(t,A)&&t[A]&&s.push(t[A][0]),t[A]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);for(p&&p(e);s.length;)s.shift()()}var o={},t={0:0};var A={};var i={11:function(){return{"./sandtable_bg.js":{__wbg_random_29218b0f217b2697:function(){return o[26].exports.c()},__wbindgen_throw:function(n,e){return o[26].exports.d(n,e)}}}}};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(n){var e=[],o=t[n];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,A){o=t[n]=[e,A]}));e.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=function(n){return r.p+""+({}[n]||n)+"."+{1:"c694a6e69507d590322d",2:"0c9b037ae9a0fd50330a"}[n]+".js"}(n);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(c);var o=t[n];if(0!==o){if(o){var A=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+n+" failed.\n("+A+": "+i+")",p.name="ChunkLoadError",p.type=A,p.request=i,o[1](p)}t[n]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return({2:[11]}[n]||[]).forEach((function(n){var o=A[n];if(o)e.push(o);else{var t,a=i[n](),s=fetch(r.p+""+{11:"2640963ec877c6afe68a"}[n]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)t=Promise.all([WebAssembly.compileStreaming(s),a]).then((function(n){return WebAssembly.instantiate(n[0],n[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)t=WebAssembly.instantiateStreaming(s,a);else{t=s.then((function(n){return n.arrayBuffer()})).then((function(n){return WebAssembly.instantiate(n,a)}))}e.push(A[n]=t.then((function(e){return r.w[n]=(e.instance||e).exports})))}})),Promise.all(e)},r.m=n,r.c=o,r.d=function(n,e,o){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)r.d(o,t,function(e){return n[e]}.bind(null,t));return o},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="https://funkyhippo.github.io/sandspiel/",r.oe=function(n){throw console.error(n),n},r.w={};var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var p=s;r(r.s=4)}([function(n,e,o){"use strict";var t=o(2),A=o.n(t),i=o(3),r=o.n(i)()(A.a);r.push([n.i,'* {\n  margin: 0;\n  /* font-family: monospace; */\n  font-family: "Inconsolata", monospace;\n}\n\nhtml,\nbody {\n  overscroll-behavior-x: none;\n  overscroll-behavior-y: none;\n  /* overflow-x: hidden; */\n}\n\nbody,\n#background,\n#container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  /* background-color: rgba(00, 00, 00, 0.2); */\n  background-color: #f3f3f4;\n}\ncanvas {\n  position: absolute;\n  bottom: 0;\n  /* top: 0; */\n  right: 0px;\n  left: 0px;\n  z-index: 1;\n  max-width: calc(100% - 3px);\n  /* width: calc(100% - 0px); */\n  /* max-width: ca100%; */\n  margin: auto;\n  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);\n}\n\n#sand-canvas {\n  z-index: 2;\n}\ncanvas,\nimg {\n  image-rendering: crisp-edges;\n  -ms-interpolation-mode: nearest-neighbor;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -o-crisp-edges;\n  image-rendering: pixelated;\n}\n\n#fluid-canvas {\n}\n\nbutton {\n  z-index: 3;\n  position: relative;\n  height: 30px;\n  min-width: 30px;\n  font-size: 19px;\n  padding: 1px 5px;\n  background-color: whitesmoke;\n  color: black;\n  border: 2px solid whitesmoke;\n  border-color: gainsboro;\n  flex-grow: 1;\n  max-width: 150px;\n  fill: black;\n  line-height: 0px;\n  cursor: pointer;\n}\n.active button,\nbutton.active {\n  background-color: gainsboro;\n}\n\nbutton:disabled {\n  background-color: gainsboro;\n  color: gray;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton.selected {\n  background-color: black;\n  color: whitesmoke;\n  border-color: grey;\n  fill: whitesmoke;\n  /* font-weight: bold; */\n  text-shadow: 1.6px 1.5px 0 grey, -1px -1px 0 grey, 1px -1px 0 grey,\n    -1px 1px 0 grey, 1px 1px 0 grey;\n}\n\n.submission-title {\n  z-index: 3;\n  position: relative;\n  overflow-wrap: break-word;\n  overflow: hidden;\n}\n#ui {\n  display: flex;\n  flex-wrap: wrap;\n  float: right;\n}\n\n#fps {\n  pointer-events: none;\n\n  z-index: 3;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 2px;\n  background-color: rgba(255, 255, 255, 0.4);\n  text-align: right;\n  display: inline-block;\n  white-space: pre;\n  /* font-family: monospace; */\n  user-select: none;\n}\n\n#controls {\n  display: flex;\n}\n\n.dg {\n  display: none;\n  /* z-index: 5 !important; */\n}\n\n.menu {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 10px;\n  /* bottom: 10px; */\n  z-index: 5;\n  background-color: #f3f3f4;\n  border: 1px solid gray;\n  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);\n  padding: 5px;\n  max-width: 900px;\n  margin: auto;\n}\n.submission img,\n.submissionImg {\n  max-width: 80vh;\n  background-color: #f0e4e3;\n  width: calc(100% - 10px);\n  margin: 3px;\n  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);\n  /* margin: auto; */\n}\n\n.menu-scrim {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  z-index: 4;\n  background-color: #55555555;\n}\n.x {\n  position: absolute;\n  right: 4px;\n  top: 5px;\n  line-height: 0px;\n}\ninput {\n  position: relative;\n  height: 25px;\n  min-width: 30px;\n  font-size: 19px;\n  padding: 1px 5px;\n  background-color: whitesmoke;\n  color: black;\n  border: 1.6px solid whitesmoke;\n  border-color: gainsboro;\n  flex-grow: 1;\n  fill: black;\n}\nimg {\n}\n\n@media only screen and (min-width: 700px) {\n  .submissions {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n  }\n}\n\n.submission {\n  margin: 5px;\n  position: relative;\n  background-color: gainsboro;\n  display: flex;\n}\n.submission.expandedTop {\n  border-top: 2px dashed #a0a0a0;\n  margin-top: -5px;\n}\n.submission.expandedBottom {\n  border-bottom: 2px dashed #a0a0a0;\n  margin-bottom: -5px;\n}\n.submission img {\n  width: 100%;\n}\n.img-link {\n  width: 50%;\n  line-height: 0;\n  /* height: 50%; */\n  /* display: inline-block; */\n}\n.submission button.parent {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 30px;\n  width: 30px;\n}\n.thread {\n}\n.submission div {\n  margin: 8px 8px 8px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.submission div h3 {\n  width: 100%;\n}\n.submission div h2 {\n  display: inline-block;\n  max-width: 50vw;\n}\n.report {\n  height: 30px;\n  width: 30px;\n  display: block;\n  color: grey;\n  flex-grow: 0;\n  margin-left: -4px;\n  margin-bottom: -8px;\n  /* position: absolute; */\n  /* right: 35px; */\n  /* bottom: 0px; */\n}\n.blocker {\n  height: 23px;\n  width: 24px;\n  float: right;\n}\n.children {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  /* filter: graysca\n  /* line-height: 29px; */\n}\n.report:active {\n  color: red;\n  filter: none;\n  transform: scale(1.5);\n}\n.bottom-row {\n  width: 100%;\n  line-height: 19px;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.bottom-row > * {\n  line-height: 30px;\n  display: inline-block;\n}\n.heart {\n  /* display: block; */\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  flex-grow: 0;\n  line-break: auto;\n  text-align: left;\n  padding: 0;\n  margin: 0;\n  /* height: 0 */\n  /* font-size: 22px; */\n  /* font-weight: bolder; */\n  min-width: 0 !important;\n  transition: transform 0.1s;\n  flex-grow: 0;\n  /* margin-left: auto; */\n  margin-right: -2px;\n  /* margin-bottom: 15px; */\n}\n.heart:active {\n  color: red;\n  filter: none;\n  transform: scale(1.5);\n}\n\n.submission .adminButtons {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n}\n.admin * {\n  font-size: 12px !important;\n}\n.admin .submission h3.title {\n  overflow: hidden;\n}\n.delete {\n  background-color: lightpink;\n}\n.ban {\n  background-color: rgb(233, 23, 55);\n}\n.pardon {\n  background-color: aliceblue;\n}\n\n.adminButtons button:active {\n  transform: scale(1.2);\n  z-index: 5;\n}\n\n.firebaseui-container.mdl-card {\n  background-color: transparent;\n  box-shadow: none !important;\n}\n.mdl-button--primary.mdl-button--primary {\n  /* display: none; */\n}\n.firebaseui-title {\n  /* display: none; */\n}\n',"",{version:3,sources:["webpack://./js/styles.css"],names:[],mappings:"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",sourcesContent:['* {\n  margin: 0;\n  /* font-family: monospace; */\n  font-family: "Inconsolata", monospace;\n}\n\nhtml,\nbody {\n  overscroll-behavior-x: none;\n  overscroll-behavior-y: none;\n  /* overflow-x: hidden; */\n}\n\nbody,\n#background,\n#container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  /* background-color: rgba(00, 00, 00, 0.2); */\n  background-color: #f3f3f4;\n}\ncanvas {\n  position: absolute;\n  bottom: 0;\n  /* top: 0; */\n  right: 0px;\n  left: 0px;\n  z-index: 1;\n  max-width: calc(100% - 3px);\n  /* width: calc(100% - 0px); */\n  /* max-width: ca100%; */\n  margin: auto;\n  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);\n}\n\n#sand-canvas {\n  z-index: 2;\n}\ncanvas,\nimg {\n  image-rendering: crisp-edges;\n  -ms-interpolation-mode: nearest-neighbor;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -o-crisp-edges;\n  image-rendering: pixelated;\n}\n\n#fluid-canvas {\n}\n\nbutton {\n  z-index: 3;\n  position: relative;\n  height: 30px;\n  min-width: 30px;\n  font-size: 19px;\n  padding: 1px 5px;\n  background-color: whitesmoke;\n  color: black;\n  border: 2px solid whitesmoke;\n  border-color: gainsboro;\n  flex-grow: 1;\n  max-width: 150px;\n  fill: black;\n  line-height: 0px;\n  cursor: pointer;\n}\n.active button,\nbutton.active {\n  background-color: gainsboro;\n}\n\nbutton:disabled {\n  background-color: gainsboro;\n  color: gray;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nbutton.selected {\n  background-color: black;\n  color: whitesmoke;\n  border-color: grey;\n  fill: whitesmoke;\n  /* font-weight: bold; */\n  text-shadow: 1.6px 1.5px 0 grey, -1px -1px 0 grey, 1px -1px 0 grey,\n    -1px 1px 0 grey, 1px 1px 0 grey;\n}\n\n.submission-title {\n  z-index: 3;\n  position: relative;\n  overflow-wrap: break-word;\n  overflow: hidden;\n}\n#ui {\n  display: flex;\n  flex-wrap: wrap;\n  float: right;\n}\n\n#fps {\n  pointer-events: none;\n\n  z-index: 3;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 2px;\n  background-color: rgba(255, 255, 255, 0.4);\n  text-align: right;\n  display: inline-block;\n  white-space: pre;\n  /* font-family: monospace; */\n  user-select: none;\n}\n\n#controls {\n  display: flex;\n}\n\n.dg {\n  display: none;\n  /* z-index: 5 !important; */\n}\n\n.menu {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 10px;\n  /* bottom: 10px; */\n  z-index: 5;\n  background-color: #f3f3f4;\n  border: 1px solid gray;\n  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);\n  padding: 5px;\n  max-width: 900px;\n  margin: auto;\n}\n.submission img,\n.submissionImg {\n  max-width: 80vh;\n  background-color: #f0e4e3;\n  width: calc(100% - 10px);\n  margin: 3px;\n  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.2);\n  /* margin: auto; */\n}\n\n.menu-scrim {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  z-index: 4;\n  background-color: #55555555;\n}\n.x {\n  position: absolute;\n  right: 4px;\n  top: 5px;\n  line-height: 0px;\n}\ninput {\n  position: relative;\n  height: 25px;\n  min-width: 30px;\n  font-size: 19px;\n  padding: 1px 5px;\n  background-color: whitesmoke;\n  color: black;\n  border: 1.6px solid whitesmoke;\n  border-color: gainsboro;\n  flex-grow: 1;\n  fill: black;\n}\nimg {\n}\n\n@media only screen and (min-width: 700px) {\n  .submissions {\n    display: grid;\n    grid-template-columns: repeat(2, 50%);\n  }\n}\n\n.submission {\n  margin: 5px;\n  position: relative;\n  background-color: gainsboro;\n  display: flex;\n}\n.submission.expandedTop {\n  border-top: 2px dashed #a0a0a0;\n  margin-top: -5px;\n}\n.submission.expandedBottom {\n  border-bottom: 2px dashed #a0a0a0;\n  margin-bottom: -5px;\n}\n.submission img {\n  width: 100%;\n}\n.img-link {\n  width: 50%;\n  line-height: 0;\n  /* height: 50%; */\n  /* display: inline-block; */\n}\n.submission button.parent {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 30px;\n  width: 30px;\n}\n.thread {\n}\n.submission div {\n  margin: 8px 8px 8px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.submission div h3 {\n  width: 100%;\n}\n.submission div h2 {\n  display: inline-block;\n  max-width: 50vw;\n}\n.report {\n  height: 30px;\n  width: 30px;\n  display: block;\n  color: grey;\n  flex-grow: 0;\n  margin-left: -4px;\n  margin-bottom: -8px;\n  /* position: absolute; */\n  /* right: 35px; */\n  /* bottom: 0px; */\n}\n.blocker {\n  height: 23px;\n  width: 24px;\n  float: right;\n}\n.children {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  /* filter: graysca\n  /* line-height: 29px; */\n}\n.report:active {\n  color: red;\n  filter: none;\n  transform: scale(1.5);\n}\n.bottom-row {\n  width: 100%;\n  line-height: 19px;\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.bottom-row > * {\n  line-height: 30px;\n  display: inline-block;\n}\n.heart {\n  /* display: block; */\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0;\n  flex-grow: 0;\n  line-break: auto;\n  text-align: left;\n  padding: 0;\n  margin: 0;\n  /* height: 0 */\n  /* font-size: 22px; */\n  /* font-weight: bolder; */\n  min-width: 0 !important;\n  transition: transform 0.1s;\n  flex-grow: 0;\n  /* margin-left: auto; */\n  margin-right: -2px;\n  /* margin-bottom: 15px; */\n}\n.heart:active {\n  color: red;\n  filter: none;\n  transform: scale(1.5);\n}\n\n.submission .adminButtons {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n}\n.admin * {\n  font-size: 12px !important;\n}\n.admin .submission h3.title {\n  overflow: hidden;\n}\n.delete {\n  background-color: lightpink;\n}\n.ban {\n  background-color: rgb(233, 23, 55);\n}\n.pardon {\n  background-color: aliceblue;\n}\n\n.adminButtons button:active {\n  transform: scale(1.2);\n  z-index: 5;\n}\n\n.firebaseui-container.mdl-card {\n  background-color: transparent;\n  box-shadow: none !important;\n}\n.mdl-button--primary.mdl-button--primary {\n  /* display: none; */\n}\n.firebaseui-title {\n  /* display: none; */\n}\n'],sourceRoot:""}]),e.a=r},function(n,e,o){"use strict";var t,A=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}n[e]=o}return n[e]}}(),r=[];function a(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function s(n,e){for(var o={},t=[],A=0;A<n.length;A++){var i=n[A],s=e.base?i[0]+e.base:i[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var c=a(p),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==c?(r[c].references++,r[c].updater(d)):r.push({identifier:p,updater:b(d,e),references:1}),t.push(p)}return t}function l(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var A=o.nc;A&&(t.nonce=A)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var r=i(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var p,c=(p=[],function(n,e){return p[n]=e,p.filter(Boolean).join("\n")});function d(n,e,o,t){var A=o?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=c(e,A);else{var i=document.createTextNode(A),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(i,r[e]):n.appendChild(i)}}function u(n,e,o){var t=o.css,A=o.media,i=o.sourceMap;if(A?n.setAttribute("media",A):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var C=null,g=0;function b(n,e){var o,t,A;if(e.singleton){var i=g++;o=C||(C=l(e)),t=d.bind(null,o,i,!1),A=d.bind(null,o,i,!0)}else o=l(e),t=u.bind(null,o,e),A=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(o)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else A()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=A());var o=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<o.length;t++){var A=a(o[t]);r[A].references--}for(var i=s(n,e),l=0;l<o.length;l++){var p=a(o[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}o=i}}}},function(n,e,o){"use strict";function t(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var o=[],t=!0,A=!1,i=void 0;try{for(var r,a=n[Symbol.iterator]();!(t=(r=a.next()).done)&&(o.push(r.value),!e||o.length!==e);t=!0);}catch(n){A=!0,i=n}finally{try{t||null==a.return||a.return()}finally{if(A)throw i}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return A(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return A(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(n,e){(null==e||e>n.length)&&(e=n.length);for(var o=0,t=new Array(e);o<e;o++)t[o]=n[o];return t}n.exports=function(n){var e=t(n,4),o=e[1],A=e[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(r," */"),s=A.sources.map((function(n){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(n," */")}));return[o].concat(s).concat([a]).join("\n")}return[o].join("\n")}},function(n,e,o){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o=n(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(n,o,t){"string"==typeof n&&(n=[[null,n,""]]);var A={};if(t)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(A[r]=!0)}for(var a=0;a<n.length;a++){var s=[].concat(n[a]);t&&A[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),e.push(s))}},e}},function(n,e,o){"use strict";o.r(e);var t=o(1),A=o.n(t),i=o(0),r={insert:"head",singleton:!1};A()(i.a,r),i.a.locals;Promise.all([o.e(1),o.e(2)]).then(o.bind(null,94)).catch((function(n){return console.error("Error importing `index.js`:",n)}))}]);
//# sourceMappingURL=main.0ec88d906ee61b4fa9ab.js.map
!function(e){var n={};function t(o){if(n[o])return n[o].exports;var c=n[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(o,c,function(n){return e[n]}.bind(null,c));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var o,c,a,r,i,l=document.querySelector("textarea#dataChannelSend"),u=document.querySelector("textarea#dataChannelReceive"),d=document.querySelector("button#startButton"),s=document.querySelector("button#sendButton"),f=document.querySelector("button#closeButton");function b(e){}function p(e){o.setLocalDescription(e),c.setRemoteDescription(e),c.createAnswer().then(y,b)}function y(e){c.setLocalDescription(e),o.setRemoteDescription(e)}function m(e,n){(function(e){return e===o?c:o})(e).addIceCandidate(n.candidate).then(function(){},function(e){})}function v(e){(r=e.channel).onmessage=S,r.onopen=C,r.onclose=C}function S(e){u.value=e.data}function h(){"open"===a.readyState?(l.disabled=!1,l.focus(),s.disabled=!1,f.disabled=!1):(l.disabled=!0,s.disabled=!0,f.disabled=!0)}function C(){r.readyState}d.onclick=function(){l.placeholder="";i=null,window.localConnection=o=new RTCPeerConnection(null),a=o.createDataChannel("sendDataChannel",i),o.onicecandidate=function(e){m(o,e)},a.onopen=h,a.onclose=h,window.remoteConnection=c=new RTCPeerConnection(null),c.onicecandidate=function(e){m(c,e)},c.ondatachannel=v,o.createOffer().then(p,b),d.disabled=!0,f.disabled=!1},s.onclick=function(){var e=l.value;a.send(e)},f.onclick=function(){a.close(),r.close(),o.close(),c.close(),o=null,c=null,d.disabled=!1,s.disabled=!0,f.disabled=!0,l.value="",u.value="",l.disabled=!0,s.disabled=!0,d.disabled=!1}}]);
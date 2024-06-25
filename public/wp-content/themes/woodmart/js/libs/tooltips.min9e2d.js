!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e;i=e,n=!1,s={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");"#"===(e=e&&"#"!==e?e:t.getAttribute("href")||"").charAt(0)&&(t=e,e=t="function"==typeof i.escapeSelector?i.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return 0<i(document).find(e).length?e:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(n.end)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var i=n[o],r=e[o],r=r&&s.isElement(r)?"element":{}.toString.call(r).match(/\s([a-zA-Z]+)/)[1].toLowerCase();if(!new RegExp(i).test(r))throw new Error(t.toUpperCase()+': Option "'+o+'" provided type "'+r+'" but expected type "'+i+'".')}}},n=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},i.fn.emulateTransitionEnd=H,s.supportsTransitionEnd()&&(i.event.special[s.TRANSITION_END]={bindType:n.end,delegateType:n.end,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}});var i,n,s,r=s;function H(t){var e=this,n=!1;return i(this).one(s.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||s.triggerTransitionEnd(e)},t),this}for(var U="undefined"!=typeof window&&"undefined"!=typeof document,W=["Edge","Trident","Firefox"],B=0,a=0;a<W.length;a+=1)if(U&&0<=navigator.userAgent.indexOf(W[a])){B=1;break}var F=U&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},B))}};function R(t){return t&&"[object Function]"==={}.toString.call(t)}function u(t,e){return 1!==t.nodeType?[]:(t=getComputedStyle(t,null),e?t[e]:t)}function p(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function h(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=u(t),n=e.overflow,o=e.overflowX,e=e.overflowY;return/(auto|scroll)/.test(n+e+o)?t:h(p(t))}function c(t){var e=t&&t.offsetParent,n=e&&e.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(e.nodeName)&&"static"===u(e,"position")?c(e):e:(t?t.ownerDocument:document).documentElement}function l(t){return null!==t.parentNode?l(t.parentNode):t}function d(t,e){var n,o,i;return t&&t.nodeType&&e&&e.nodeType?(o=(i=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)?t:e,i=i?e:t,(n=document.createRange()).setStart(o,0),n.setEnd(i,0),t!==(n=n.commonAncestorContainer)&&e!==n||o.contains(i)?"BODY"===(i=(o=n).nodeName)||"HTML"!==i&&c(o.firstElementChild)!==o?c(n):n:(i=l(t)).host?d(i.host,e):d(t,l(e).host)):document.documentElement}function m(t,e){var e="top"===(1<arguments.length&&void 0!==e?e:"top")?"scrollTop":"scrollLeft",n=t.nodeName;return("BODY"===n||"HTML"===n?(n=t.ownerDocument.documentElement,t.ownerDocument.scrollingElement||n):t)[e]}function Y(t,e){var e="x"===e?"Left":"Top",n="Left"==e?"Right":"Bottom";return parseFloat(t["border"+e+"Width"],10)+parseFloat(t["border"+n+"Width"],10)}var f=void 0,g=function(){return f=void 0===f?-1!==navigator.appVersion.indexOf("MSIE 10"):f};function q(t,e,n,o){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],g()?n["offset"+t]+o["margin"+("Height"===t?"Top":"Left")]+o["margin"+("Height"===t?"Bottom":"Right")]:0)}function K(){var t=document.body,e=document.documentElement,n=g()&&getComputedStyle(e);return{height:q("Height",t,e,n),width:q("Width",t,e,n)}}var V=function(t,e,n){return e&&Q(t.prototype,e),n&&Q(t,n),t};function Q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};function y(t){return b({},t,{right:t.left+t.width,bottom:t.top+t.height})}function z(t){var e={};if(g())try{var e=t.getBoundingClientRect(),n=m(t,"top"),o=m(t,"left");e.top+=n,e.left+=o,e.bottom+=n,e.right+=o}catch(t){}else e=t.getBoundingClientRect();n={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?K():{},e=o.width||t.clientWidth||n.right-n.left,o=o.height||t.clientHeight||n.bottom-n.top,e=t.offsetWidth-e,o=t.offsetHeight-o;return(e||o)&&(e-=Y(t=u(t),"x"),o-=Y(t,"y"),n.width-=e,n.height-=o),y(n)}function G(t,e){var n=g(),o="HTML"===e.nodeName,i=z(t),r=z(e),t=h(t),s=u(e),a=parseFloat(s.borderTopWidth,10),l=parseFloat(s.borderLeftWidth,10),r=y({top:i.top-r.top-a,left:i.left-r.left-l,width:i.width,height:i.height});return r.marginTop=0,r.marginLeft=0,!n&&o&&(i=parseFloat(s.marginTop,10),o=parseFloat(s.marginLeft,10),r.top-=a-i,r.bottom-=a-i,r.left-=l-o,r.right-=l-o,r.marginTop=i,r.marginLeft=o),r=(n?e.contains(t):e===t&&"BODY"!==t.nodeName)?function(t,e,n){var n=2<arguments.length&&void 0!==n&&n,o=m(e,"top"),e=m(e,"left"),n=n?-1:1;return t.top+=o*n,t.bottom+=o*n,t.left+=e*n,t.right+=e*n,t}(r,e):r}function J(t,e,n,o){var i,r,s,a,l,f={top:0,left:0},c=d(t,e);return"viewport"===o?(r=(i=c).ownerDocument.documentElement,i=G(i,r),s=Math.max(r.clientWidth,window.innerWidth||0),a=Math.max(r.clientHeight,window.innerHeight||0),l=m(r),r=m(r,"left"),f=y({top:l-i.top+i.marginTop,left:r-i.left+i.marginLeft,width:s,height:a})):(l=void 0,"scrollParent"===o?"BODY"===(l=h(p(e))).nodeName&&(l=t.ownerDocument.documentElement):l="window"===o?t.ownerDocument.documentElement:o,r=G(l,c),"HTML"!==l.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===u(e,"position")||t(p(e)))}(c)?f=r:(s=(i=K()).height,a=i.width,f.top+=r.top-r.marginTop,f.bottom=s+r.top,f.left+=r.left-r.marginLeft,f.right=a+r.left)),f.left+=n,f.top+=n,f.right-=n,f.bottom-=n,f}function X(t,e,n,o,i,r){var s,r=5<arguments.length&&void 0!==r?r:0;return-1===t.indexOf("auto")?t:(o=J(n,o,r,i),s={top:{width:o.width,height:e.top-o.top},right:{width:o.right-e.right,height:o.height},bottom:{width:o.width,height:o.bottom-e.bottom},left:{width:e.left-o.left,height:o.height}},(0<(i=(r=Object.keys(s).map(function(t){return b({key:t},s[t],{area:(t=s[t]).width*t.height})}).sort(function(t,e){return e.area-t.area})).filter(function(t){var e=t.width,t=t.height;return e>=n.clientWidth&&t>=n.clientHeight})).length?i:r)[0].key+((e=t.split("-")[1])?"-"+e:""))}function Z(t,e,n){return G(n,d(e,n))}function $(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),e=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+e,height:t.offsetHeight+n}}function E(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function tt(t,e,n){n=n.split("-")[0];var t=$(t),o={width:t.width,height:t.height},i=-1!==["right","left"].indexOf(n),r=i?"top":"left",s=i?"left":"top",a=i?"height":"width",i=i?"width":"height";return o[r]=e[r]+e[a]/2-t[a]/2,o[s]=n===s?e[s]-t[i]:e[E(s)],o}function w(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function et(t,n,e){var o,i;return(void 0===e?t:t.slice(0,(t=t,o="name",i=e,Array.prototype.findIndex?t.findIndex(function(t){return t[o]===i}):(e=w(t,function(t){return t[o]===i}),t.indexOf(e))))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&R(e)&&(n.offsets.popper=y(n.offsets.popper),n.offsets.reference=y(n.offsets.reference),n=e(n,t))}),n}function nt(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function ot(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<e.length-1;o++){var i=e[o],i=i?""+i+n:t;if(void 0!==document.body.style[i])return i}return null}function it(t){t=t.ownerDocument;return t?t.defaultView:window}function rt(t,e,n,o){n.updateBound=o,it(t).addEventListener("resize",n.updateBound,{passive:!0});o=h(t);return function t(e,n,o,i){var r="BODY"===e.nodeName,e=r?e.ownerDocument.defaultView:e;e.addEventListener(n,o,{passive:!0}),r||t(h(e.parentNode),n,o,i),i.push(e)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function st(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,it(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function at(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function lt(n,o){Object.keys(o).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&at(o[t])&&(e="px"),n.style[t]=o[t]+e})}function ft(t,e,n){var o,i=w(t,function(t){return t.name===e}),t=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});return t||(o="`"+e+"`",console.warn("`"+n+"`"+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")),t}var T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ct=T.slice(3);function ut(t,e){e=1<arguments.length&&void 0!==e&&e,t=ct.indexOf(t),t=ct.slice(t+1).concat(ct.slice(0,t));return e?t.reverse():t}var pt="flip",ht="clockwise",dt="counterclockwise";function mt(t,a,l,e){var i=[0,0],o=-1!==["right","left"].indexOf(e),e=t.split(/(\+|\-)/).map(function(t){return t.trim()}),t=e.indexOf(w(e,function(t){return-1!==t.search(/,|\s/)})),n=(e[t]&&-1===e[t].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),/\s*,\s*|\s+/);return(-1!==t?[e.slice(0,t).concat([e[t].split(n)[0]]),[e[t].split(n)[1]].concat(e.slice(t+1))]:[e]).map(function(t,e){var s=(1===e?!o:o)?"height":"width",n=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,n=!0,t):n?(t[t.length-1]+=e,n=!1,t):t.concat(e)},[]).map(function(t){return e=s,n=a,o=l,i=+(r=(t=t).match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1],r=r[2],i?0===r.indexOf("%")?y("%p"===r?n:o)[e]/100*i:"vh"===r||"vw"===r?("vh"===r?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i:t;var e,n,o,i,r})}).forEach(function(n,o){n.forEach(function(t,e){at(t)&&(i[o]+=t*("-"===n[e-1]?-1:1))})}),i}var gt={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e,n,o,i=t.placement,r=i.split("-")[0];return(i=i.split("-")[1])&&(e=(n=t.offsets).reference,n=n.popper,o=(r=-1!==["bottom","top"].indexOf(r))?"width":"height",r={start:v({},r=r?"left":"top",e[r]),end:v({},r,e[r]+e[o]-n[o])},t.offsets.popper=b({},n,r[i])),t}},offset:{order:200,enabled:!0,fn:function(t,e){var e=e.offset,n=t.placement,o=(i=t.offsets).popper,i=i.reference,n=n.split("-")[0],r=void 0,r=at(+e)?[+e,0]:mt(e,o,i,n);return"left"===n?(o.top+=r[0],o.left-=r[1]):"right"===n?(o.top+=r[0],o.left+=r[1]):"top"===n?(o.left+=r[0],o.top-=r[1]):"bottom"===n&&(o.left+=r[0],o.top+=r[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,o){var e=o.boundariesElement||c(t.instance.popper),i=(t.instance.reference===e&&(e=c(e)),J(t.instance.popper,t.instance.reference,o.padding,e)),e=(o.boundaries=i,o.priority),r=t.offsets.popper,n={primary:function(t){var e=r[t];return r[t]<i[t]&&!o.escapeWithReference&&(e=Math.max(r[t],i[t])),v({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=r[e];return r[t]>i[t]&&!o.escapeWithReference&&(n=Math.min(r[e],i[t]-("right"===t?r.width:r.height))),v({},e,n)}};return e.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";r=b({},r,n[e](t))}),t.offsets.popper=r,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=(n=t.offsets).popper,n=n.reference,o=t.placement.split("-")[0],i=Math.floor,r=(o=-1!==["top","bottom"].indexOf(o))?"right":"bottom",s=o?"left":"top",o=o?"width":"height";return e[r]<i(n[s])&&(t.offsets.popper[s]=i(n[s])-e[o]),e[s]>i(n[r])&&(t.offsets.popper[s]=i(n[r])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){if(ft(t.instance.modifiers,"arrow","keepTogether")){e=e.element;if("string"==typeof e){if(!(e=t.instance.popper.querySelector(e)))return t}else if(!t.instance.popper.contains(e))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var n=t.placement.split("-")[0],o=t.offsets,i=o.popper,o=o.reference,n=-1!==["left","right"].indexOf(n),r=n?"height":"width",s=n?"Top":"Left",a=s.toLowerCase(),l=n?"left":"top",n=n?"bottom":"right",f=$(e)[r],n=(o[n]-f<i[a]&&(t.offsets.popper[a]-=i[a]-(o[n]-f)),o[a]+f>i[n]&&(t.offsets.popper[a]+=o[a]+f-i[n]),t.offsets.popper=y(t.offsets.popper),o[a]+o[r]/2-f/2),o=u(t.instance.popper),c=parseFloat(o["margin"+s],10),o=parseFloat(o["border"+s+"Width"],10),s=n-t.offsets.popper[a]-c-o,s=Math.max(Math.min(i[r]-f,s),0);t.arrowElement=e,t.offsets.arrow=(v(n={},a,Math.round(s)),v(n,l,""),n)}return t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(l,f){if(!(nt(l.instance.modifiers,"inner")||l.flipped&&l.placement===l.originalPlacement)){var c=J(l.instance.popper,l.instance.reference,f.padding,f.boundariesElement),u=l.placement.split("-")[0],p=E(u),h=l.placement.split("-")[1]||"",d=[];switch(f.behavior){case pt:d=[u,p];break;case ht:d=ut(u);break;case dt:d=ut(u,!0);break;default:d=f.behavior}d.forEach(function(t,e){if(u!==t||d.length===e+1)return l;u=l.placement.split("-")[0],p=E(u);var t=l.offsets.popper,n=l.offsets.reference,o=Math.floor,n="left"===u&&o(t.right)>o(n.left)||"right"===u&&o(t.left)<o(n.right)||"top"===u&&o(t.bottom)>o(n.top)||"bottom"===u&&o(t.top)<o(n.bottom),i=o(t.left)<o(c.left),r=o(t.right)>o(c.right),s=o(t.top)<o(c.top),t=o(t.bottom)>o(c.bottom),o="left"===u&&i||"right"===u&&r||"top"===u&&s||"bottom"===u&&t,a=-1!==["top","bottom"].indexOf(u),i=!!f.flipVariations&&(a&&"start"===h&&i||a&&"end"===h&&r||!a&&"start"===h&&s||!a&&"end"===h&&t);(n||o||i)&&(l.flipped=!0,(n||o)&&(u=d[e+1]),i&&(h="end"===(r=h)?"start":"start"===r?"end":r),l.placement=u+(h?"-"+h:""),l.offsets.popper=b({},l.offsets.popper,tt(l.instance.popper,l.offsets.reference,l.placement)),l=et(l.instance.modifiers,l,"flip"))})}return l},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],o=(i=t.offsets).popper,i=i.reference,r=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[r?"left":"top"]=i[n]-(s?o[r?"width":"height"]:0),t.placement=E(e),t.offsets.popper=y(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(ft(t.instance.modifiers,"hide","preventOverflow")){var e=t.offsets.reference,n=w(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,o=e.y,i=t.offsets.popper,r=(void 0!==(r=w(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration)&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"),void 0!==r?r:e.gpuAcceleration),e=z(c(t.instance.popper)),s={position:i.position},i={left:Math.floor(i.left),top:Math.floor(i.top),bottom:Math.floor(i.bottom),right:Math.floor(i.right)},n="bottom"===n?"top":"bottom",o="right"===o?"left":"right",a=ot("transform"),l=void 0,f=void 0,f="bottom"==n?-e.height+i.bottom:i.top,l="right"==o?-e.width+i.right:i.left,i=(r&&a?(s[a]="translate3d("+l+"px, "+f+"px, 0)",s[n]=0,s[o]=0,s.willChange="transform"):(e="right"==o?-1:1,s[n]=f*("bottom"==n?-1:1),s[o]=l*e,s.willChange=n+", "+o),{"x-placement":t.placement});return t.attributes=b({},i,t.attributes),t.styles=b({},s,t.styles),t.arrowStyles=b({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return lt(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&lt(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,o,i){var r=Z(0,e,t),r=X(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",r),lt(e,{position:"absolute"}),n},gpuAcceleration:void 0}}},_=(V(O,[{key:"update",value:function(){return function(){var t;this.state.isDestroyed||((t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}).offsets.reference=Z(this.state,this.popper,this.reference),t.placement=X(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=tt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=et(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t)))}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,nt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[ot("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=rt(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return st.call(this)}}]),O);function O(t,e){var n=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=this,r=O;if(!(i instanceof r))throw new TypeError("Cannot call a class as a function");this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=F(this.update.bind(this)),this.options=b({},O.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(b({},O.Defaults.modifiers,o.modifiers)).forEach(function(t){n.options.modifiers[t]=b({},O.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return b({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&R(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}_.Utils=("undefined"!=typeof window?window:global).PopperUtils,_.placements=T,_.Defaults=gt;A="tooltip",N="."+(D="bs.tooltip"),vt=(C=e).fn[A],bt="bs-tooltip",yt=new RegExp("(^|\\s)"+bt+"\\S+","g"),Tt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(wt={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(Et={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},x="out",_t={HIDE:"hide"+N,HIDDEN:"hidden"+N,SHOW:(S="show")+N,SHOWN:"shown"+N,INSERTED:"inserted"+N,CLICK:"click"+N,FOCUSIN:"focusin"+N,FOCUSOUT:"focusout"+N,MOUSEENTER:"mouseenter"+N,MOUSELEAVE:"mouseleave"+N},L="fade",k="show",Ot=".tooltip-inner",Ct=".arrow",I="hover",P="focus",At="click",Dt="manual",j=function(){function i(t,e){if(void 0===_)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t,e,n=i.prototype;return n.enable=function(){this._isEnabled=!0},n.disable=function(){this._isEnabled=!1},n.toggleEnabled=function(){this._isEnabled=!this._isEnabled},n.toggle=function(t){var e,n;this._isEnabled&&(t?(e=this.constructor.DATA_KEY,(n=C(t.currentTarget).data(e))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),C(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)):C(this.getTipElement()).hasClass(k)?this._leave(null,this):this._enter(null,this))},n.dispose=function(){clearTimeout(this._timeout),C.removeData(this.element,this.constructor.DATA_KEY),C(this.element).off(this.constructor.EVENT_KEY),C(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&C(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},n.show=function(){var e=this;if("none"===C(this.element).css("display"))throw new Error("Please use show on visible elements");var t,n,o=C.Event(this.constructor.Event.SHOW);this.isWithContent()&&this._isEnabled&&(C(this.element).trigger(o),t=C.contains(this.element.ownerDocument.documentElement,this.element),!o.isDefaultPrevented())&&t&&(o=this.getTipElement(),t=r.getUID(this.constructor.NAME),o.setAttribute("id",t),this.element.setAttribute("aria-describedby",t),this.setContent(),this.config.animation&&C(o).addClass(L),t="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,t=this._getAttachment(t),this.addAttachmentClass(t),n=!1===this.config.container?document.body:C(this.config.container),C(o).data(this.constructor.DATA_KEY,this),C.contains(this.element.ownerDocument.documentElement,this.tip)||C(o).appendTo(n),C(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new _(this.element,o,{placement:t,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Ct},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),C(o).addClass(k),"ontouchstart"in document.documentElement&&C("body").children().on("mouseover",null,C.noop),n=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,C(e.element).trigger(e.constructor.Event.SHOWN),t===x&&e._leave(null,e)},r.supportsTransitionEnd()&&C(this.tip).hasClass(L)?C(this.tip).one(r.TRANSITION_END,n).emulateTransitionEnd(i._TRANSITION_DURATION):n())},n.hide=function(t){function e(){n._hoverState!==S&&o.parentNode&&o.parentNode.removeChild(o),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),C(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,o=this.getTipElement(),i=C.Event(this.constructor.Event.HIDE);C(this.element).trigger(i),i.isDefaultPrevented()||(C(o).removeClass(k),"ontouchstart"in document.documentElement&&C("body").children().off("mouseover",null,C.noop),this._activeTrigger[At]=!1,this._activeTrigger[P]=!1,this._activeTrigger[I]=!1,r.supportsTransitionEnd()&&C(this.tip).hasClass(L)?C(o).one(r.TRANSITION_END,e).emulateTransitionEnd(150):e(),this._hoverState="")},n.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},n.isWithContent=function(){return Boolean(this.getTitle())},n.addAttachmentClass=function(t){C(this.getTipElement()).addClass(bt+"-"+t)},n.getTipElement=function(){return this.tip=this.tip||C(this.config.template)[0],this.tip},n.setContent=function(){var t=C(this.getTipElement());this.setElementContent(t.find(Ot),this.getTitle()),t.removeClass(L+" "+k)},n.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?C(e).parent().is(t)||t.empty().append(e):t.text(C(e).text()):t[n?"html":"text"](e)},n.getTitle=function(){return this.element.getAttribute("data-original-title")||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},n._getAttachment=function(t){return wt[t.toUpperCase()]},n._setListeners=function(){var n=this;this.config.trigger.split(" ").forEach(function(t){var e;"click"===t?C(n.element).on(n.constructor.Event.CLICK,n.config.selector,function(t){return n.toggle(t)}):t!==Dt&&(e=t===I?n.constructor.Event.MOUSEENTER:n.constructor.Event.FOCUSIN,t=t===I?n.constructor.Event.MOUSELEAVE:n.constructor.Event.FOCUSOUT,C(n.element).on(e,n.config.selector,function(t){return n._enter(t)}).on(t,n.config.selector,function(t){return n._leave(t)})),C(n.element).closest(".modal").on("hide.bs.modal",function(){return n.hide()})}),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},n._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},n._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||C(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),C(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?P:I]=!0),C(e.getTipElement()).hasClass(k)||e._hoverState===S?e._hoverState=S:(clearTimeout(e._timeout),e._hoverState=S,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===S&&e.show()},e.config.delay.show):e.show())},n._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||C(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),C(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?P:I]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=x,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===x&&e.hide()},e.config.delay.hide):e.hide())},n._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},n._getConfig=function(t){return"number"==typeof(t=o({},this.constructor.Default,C(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),r.typeCheckConfig(A,t,this.constructor.DefaultType),t},n._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},n._cleanTipClass=function(){var t=C(this.getTipElement()),e=t.attr("class").match(yt);null!==e&&0<e.length&&t.removeClass(e.join(""))},n._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},n._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(C(t).removeClass(L),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=C(this).data(D),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),C(this).data(D,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},n=i,e=[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Tt}},{key:"NAME",get:function(){return A}},{key:"DATA_KEY",get:function(){return D}},{key:"Event",get:function(){return _t}},{key:"EVENT_KEY",get:function(){return N}},{key:"DefaultType",get:function(){return Et}}],(t=null)&&M(n.prototype,t),e&&M(n,e),i}(),C.fn[A]=j._jQueryInterface,C.fn[A].Constructor=j,C.fn[A].noConflict=function(){return C.fn[A]=vt,j._jQueryInterface};var C,A,D,N,vt,bt,yt,Et,wt,Tt,S,x,_t,L,k,Ot,Ct,I,P,At,Dt,j,V=j,T=e;if(void 0===T)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");if((T=T.fn.jquery.split(" ")[0].split("."))[0]<2&&T[1]<9||1===T[0]&&9===T[1]&&T[2]<1||4<=T[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");t.Util=r,t.Tooltip=V,Object.defineProperty(t,"__esModule",{value:!0})});
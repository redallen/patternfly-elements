!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("../rhelement/rhelement.umd")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd"],t):t(e.RHElement)}(this,function(n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var r=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var c=o.get;return void 0!==c?c.call(r):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},e=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t))}return c(t,n),o(t,[{key:"isTab",value:function(){return 768<this.parentNode.offsetWidth}},{key:"html",get:function(){return"\n<style>\n:host {\n  display: block; }\n</style>\n<rh-accordion><slot></slot></rh-accordion>"}},{key:"styleUrl",get:function(){return"rh-hide-show.css"}},{key:"templateUrl",get:function(){return"rh-hide-show.html"}}],[{key:"tag",get:function(){return"rh-hide-show"}},{key:"observedAttributes",get:function(){return["vertical","selected-index","rh-variant","theme","color"]}},{key:"cascadingAttributes",get:function(){return{vertical:"rh-tabs","selected-index":"rh-tabs","rh-variant":"rh-tabs",theme:"rh-accordion",color:"rh-accordion","render-as":"rh-hide-show-set"}}},{key:"rhType",get:function(){return n.rhType.combo}}]),o(t,[{key:"connectedCallback",value:function(){i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this)}}]),t}(),t=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,t))}return c(t,n),o(t,[{key:"isTab",value:function(){return 768<this.parentNode.parentNode.offsetWidth}},{key:"html",get:function(){return'\n<style>\n:host {\n  display: block; }\n</style>\n<rh-accordion-header><slot name="rh-hide-show--header"></slot></rh-accordion-header>\n<rh-accordion-panel><slot></slot></rh-accordion-panel>'}},{key:"styleUrl",get:function(){return"rh-hide-show.css"}},{key:"templateUrl",get:function(){return"rh-hide-show-set.html"}}],[{key:"tag",get:function(){return"rh-hide-show-set"}},{key:"rhType",get:function(){return n.rhType.component}}]),o(t,[{key:"connectedCallback",value:function(){i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this)}}]),t}();n.create(t),n.create(e)});
//# sourceMappingURL=rh-hide-show.umd.js.map

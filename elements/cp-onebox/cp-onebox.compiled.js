!function(n,e){if("function"==typeof define&&define.amd)define(["../rh-onebox/rh-onebox.compiled.js"],e);else if("undefined"!=typeof exports)e(require("../rh-onebox/rh-onebox.compiled.js"));else{e(n.rhOneboxCompiled),n.cpOnebox={}}}(this,function(n){"use strict";var e,t=(e=n)&&e.__esModule?e:{default:e};var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();var i=document.createElement("template"),r=function(n){return i.innerHTML='\n<style>:host {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ececec;\n  background-color: #f7f7f7; }\n\n:host([expanded]) .description,\n:host([expanded]) .product_links {\n  display: block; }\n\n.content {\n  padding: 0 16px; }\n\n.info_links {\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n.info_links li {\n  width: 50%; }\n\n.info_links li a {\n  padding: 16px; }\n\n.description {\n  display: none;\n  order: 1; }\n\n.product_links {\n  display: none;\n  order: 2; }\n\n.expander {\n  position: relative;\n  text-align: center;\n  border-top: 1px solid #ececec;\n  padding-top: 16px;\n  padding-bottom: 16px; }\n\n:host([expanded]) .expander {\n  border-bottom: 1px solid #ececec; }\n\n#expandButton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  top: -15px;\n  left: calc(50% - 15px);\n  background: white;\n  border: 1px solid #ececec;\n  border-radius: 50%; }\n\n.caret {\n  width: 0;\n  height: 0;\n  margin-bottom: -2px;\n  border-top: 5px solid #333;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent; }\n\n:host([expanded]) .caret {\n  margin-bottom: 0;\n  border-top: none;\n  border-bottom: 5px solid #333; }\n\n@media (min-width: 768px) {\n  :host {\n    background-color: transparent; }\n  .expander {\n    display: none; }\n  .description,\n  .product_links {\n    display: block; }\n  .description {\n    order: 0; } }</style>\n\x3c!-- Rule Type (Product, Product Suite or Vulnerability) --\x3e\n<h2 class="content">'+n.name+'</h2>\n\n\x3c!-- Description (Every Rule has a description) --\x3e\n<p class="description content">'+n.description+"</p>\n\n\x3c!-- Subtitle is only for Product type of rule --\x3e\n"+(n.additional_info.subtitle?'<p class="subtitle">'+n.additional_info.subtitle+"</p>":"")+"\n\n\x3c!-- Page Link and Produc list are only for Product Suite type of rule --\x3e\n"+(n.additional_info.page_link?'<p class="page-link">'+n.additional_info.page_link+"</p>":"")+"\n\n"+(n.additional_info.products?'\n  <div class="content">\n      <h4>Products</h4>\n    <ul class="products">\n      '+n.additional_info.products.map(function(n){return"\n        <li>\n            "+n+"\n        </li>\n      "}).join("\n")+"\n    </ul>\n  </div>\n":"")+"\n\n\x3c!-- CVE, Common Name, Severity are only for Vulnerability type of rule --\x3e\n"+(n.additional_info.cve?'<p class="cve">'+n.additional_info.cve+"</p>":"")+"\n"+(n.additional_info.common_name?'<p class="common-name">'+n.additional_info.common_name+"</p>":"")+"\n"+(n.additional_info.severity?'<p class="severity">'+n.additional_info.severity+"</p>":"")+"\n\n\x3c!-- Info Links for every type of rule --\x3e\n"+(n.links.info&&'\n  <div class="content">\n      <h4>Info Links</h4>\n    <ul class="info_links">\n      '+n.links.info.map(function(n){return'\n        <li>\n          <a href="'+n.link+'">\n            <div>\n              <div class="icon"></div>\n              '+n.text+"\n            </div>\n          </a>\n        </li>\n      "}).join("\n")+"\n    </ul>\n  </div>\n")+'\n<div class="expander content">\n  <button id="expandButton">\n    <span class="caret"></span>\n  </button>\n  About '+n.name+"\n</div>\n",i},a=function(n){function e(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"cp-onebox",{template:r,arrayName:"rules",matchArrayName:"keywords"}));return n.expandButton=null,n.expanded=!1,n.expandButtonHandler=n.expandButtonHandler.bind(n),n}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,t.default),o(e,[{key:"render",value:function(){(function n(e,t,o){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(void 0===i){var r=Object.getPrototypeOf(e);return null===r?void 0:n(r,t,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this),this.expandButton=this.shadowRoot.querySelector("#expandButton"),this.expandButton.addEventListener("click",this.expandButtonHandler)}},{key:"expandButtonHandler",value:function(){this.expanded=!this.expanded,this.expanded?this.setAttribute("expanded",""):this.removeAttribute("expanded")}}]),e}();window.customElements.define("cp-onebox",a)});
!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://testing.test/wp-content/plugins/constant-contact-forms/assets/js/",n(n.s=9)}([,,,,,,,,,function(t,e,n){t.exports=n(10)},function(t,e,n){"use strict";n.r(e);n(11),n(12)},function(t,e){!function(t,e){function n(){return e(".ctct-submitted").attr("disabled",null)}e(document).ready((function(){e(".ctct-submitted").on("click",(function(){setTimeout((function(){e(".ctct-submitted").attr("disabled","disabled"),setTimeout(n,3e3)}),100)}))}))}(window,jQuery)},function(t,e){window.CTCTSupport={},function(t,e,n){var o=this;n.init=function(){n.cache(),n.bindEvents(),n.removePlaceholder()},n.removePlaceholder=function(){e(".ctct-form-field input, textarea").focus((function(){e(o).data("placeholder",e(o).attr("placeholder")).attr("placeholder","")})).blur((function(){e(o).attr("placeholder",e(o).data("placeholder"))}))},n.cache=function(){n.$c={$forms:[]},e(".ctct-form-wrapper").each((function(t,o){n.$c.$forms.push(e(o).find("form"))})),e.each(n.$c.$forms,(function(t,o){var c=e(o);n.$c.$forms[t].$honeypot=c.find(".ctct_usage_field"),n.$c.$forms[t].$submitButton=c.find("input[type=submit]"),n.$c.$forms[t].$recaptcha=c.find(".g-recaptcha")})),n.timeout=null},n.setAllInputsValid=function(){e(n.$c.$form+" .ctct-invalid").removeClass("ctct-invalid")},n.processError=function(t){void 0!==t.id&&e("#"+t.id).addClass("ctct-invalid")},n.checkHoneypot=function(t,e,n){0<e.val().length?n.attr("disabled","disabled"):n.attr("disabled",!1)},n.validateSubmission=function(t){return"on"===t.attr("data-doajax")&&(e.each(t.find("[required]"),(function(t,e){if(!1===e.checkValidity())return!1})),!0)},n.showMessage=function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"log",i=t.parents(".ctct-form-wrapper");i.find("p.ctct-message").remove();var r=e("<p />",{class:"ctct-message "+o,text:n,role:c}).prepend(e("<button />",{class:"button button-secondary ctct-dismiss ctct-dismiss-ajax-notice",html:"&#10005;","aria-label":"Dismiss Notification"}));r.insertBefore(t).fadeIn(200),i.find(".ctct-dismiss-ajax-notice").on("click",(function(){e(this).parents(".ctct-message").remove()}))},n.submitForm=function(o){o.find(".ctct-submitted").prop("disabled",!0);var c={action:"ctct_process_form",data:o.serialize()};e.post(t.ajaxurl,c,(function(t){return o.find(".ctct-submitted").prop("disabled",!1),void 0!==t.status&&("success"!==t.status?(void 0!==t.errors?(n.setAllInputsValid(),t.errors.forEach(n.processError)):n.showMessage(o,t.message,"ctct-error","alert"),!1):(n.showMessage(o,t.message,"ctct-success","status"),void o[0].reset()))}))},n.handleSubmission=function(t,e){if(!n.validateSubmission(e))return!1;t.preventDefault(),clearTimeout(n.timeout),n.timeout=setTimeout(n.submitForm,500,e)},n.bindEvents=function(){e.each(n.$c.$forms,(function(t,e){n.$c.$forms[t].on("click","input[type=submit]",(function(e){n.handleSubmission(e,n.$c.$forms[t])})),n.$c.$forms[t].$honeypot.on("change keyup",(function(e){n.checkHoneypot(e,n.$c.$forms[t].$honeypot,n.$c.$forms[t].$submitButton)})),0<n.$c.$forms[t].$recaptcha.length&&n.$c.$forms[t].$submitButton.attr("disabled","disabled")}))},e(n.init)}(window,jQuery,window.CTCTSupport)}]);
//# sourceMappingURL=ctct-plugin-frontend.min.js.map
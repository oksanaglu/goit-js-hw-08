function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,f,u,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(T,t),l?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function T(){var e=v();if(S(e))return j(e);f=setTimeout(T,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function j(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function h(){var e=v(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return x(u);if(d)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:j(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y={},x={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};x.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),x.textarea.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("feedback-form-state",t)}),500)),x.form.addEventListener("input",(e=>{y[e.target.name]=e.target.value,console.log(y);const t=JSON.stringify(y);localStorage.setItem("STORAGE_KEY",t)})),function(){const e=localStorage.getItem("feedback-form-state");e&&(console.log(e),textarea.value=e,input.value=e)}();
//# sourceMappingURL=03-feedback.3a2c55bd.js.map

import"./modulepreload-polyfill-ec808ebb.js";/* empty css               */import{l as r}from"./index-3fb86eca.js";const t=document.querySelector(".feedback-form"),o=t.querySelector('input[name="email"]'),m=t.querySelector('textarea[name="message"]'),s="feedback-form-state";t.addEventListener("input",r(n,500));t.addEventListener("submit",c);l();function n(){const e={email:o.value,message:m.value};localStorage.setItem(s,JSON.stringify(e))}function l(){const e=localStorage.getItem(s);if(e){const a=JSON.parse(e);o.value=a.email,m.value=a.message}}function c(e){e.preventDefault();const a={email:o.value,message:m.value};console.log(a),localStorage.removeItem(s),t.reset()}

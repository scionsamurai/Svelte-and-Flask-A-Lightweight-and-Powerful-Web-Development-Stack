function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(){return f(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){return new t(e)}let $;function h(t){$=t}const g=[],m=[];let x=[];const b=[],y=Promise.resolve();let _=!1;function k(t){x.push(t)}const E=new Set;let w=0;function j(){if(0!==w)return;const t=$;do{try{for(;w<g.length;){const t=g[w];w++,h(t),D(t.$$)}}catch(t){throw g.length=0,w=0,t}for(h(null),g.length=0,w=0;m.length;)m.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];E.has(e)||(E.add(e),e())}x.length=0}while(g.length);for(;b.length;)b.pop()();_=!1,E.clear(),h(t)}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const v=new Set;let A;function N(t,e){t&&t.i&&(v.delete(t),t.i(e))}function O(t,e,n,r){if(t&&t.o){if(v.has(t))return;v.add(t),A.c.push((()=>{v.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function S(t){t&&t.c()}function B(t,n,a,c){const{fragment:s,after_update:u}=t.$$;s&&s.m(n,a),c||k((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(k)}function C(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];x.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),x=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,y.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,o,a,c,s,i,f,l=[-1]){const d=$;h(e);const p=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:o.target||d.$$.root};f&&f(p.root);let g=!1;if(p.ctx=a?a(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),g&&I(e,t)),n})):[],p.update(),g=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&N(e.$$.fragment),B(e,o.target,o.anchor,o.customElement),j()}h(d)}class T{$destroy(){C(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(t){let e,n,o;var a=t[2][t[0]];function c(t){return{props:{extraData:t[1]}}}return a&&(n=p(a,c(t))),{c(){e=i("main"),n&&S(n.$$.fragment)},m(t,r){s(t,e,r),n&&B(n,e,null),o=!0},p(t,[o]){const s={};if(2&o&&(s.extraData=t[1]),5&o&&a!==(a=t[2][t[0]])){if(n){A={r:0,c:[],p:A};const t=n;O(t.$$.fragment,1,0,(()=>{C(t,1)})),A.r||r(A.c),A=A.p}a?(n=p(a,c(t)),S(n.$$.fragment),N(n.$$.fragment,1),B(n,e,null)):n=null}else a&&n.$set(s)},i(t){o||(n&&N(n.$$.fragment,t),o=!0)},o(t){n&&O(n.$$.fragment,t),o=!1},d(t){t&&u(e),n&&C(n)}}}function H(t,e,n){let r={index:"",create:"",login:"",signup:""},{page:o}=e,{extraData:a}=e;switch(o){case"index":import("./index-7991d4ce.js").then((t=>t.default)).then((t=>n(2,r[o]=t,r))).catch((t=>console.error(t)));break;case"create":import("./create-f62bb292.js").then((t=>t.default)).then((t=>n(2,r[o]=t,r))).catch((t=>console.error(t)));break;case"login":import("./login-ecd0199d.js").then((t=>t.default)).then((t=>n(2,r[o]=t,r))).catch((t=>console.error(t)));break;case"signup":import("./signup-76b03279.js").then((t=>t.default)).then((t=>n(2,r[o]=t,r))).catch((t=>console.error(t)))}return t.$$set=t=>{"page"in t&&n(0,o=t.page),"extraData"in t&&n(1,a=t.extraData)},[o,a,r]}const J=document.getElementById("svelte"),L=document.getElementById("data"),P=new class extends T{constructor(t){super(),M(this,t,H,q,a,{page:0,extraData:1})}}({target:J,props:{page:J.getAttribute("data-page"),extraData:null!==L?JSON.parse(L.innerHTML):null}});export{T as S,l as a,d as b,s as c,c as d,i as e,u as f,P as g,M as i,t as n,a as s,f as t};
//# sourceMappingURL=main-8fe017b6.js.map

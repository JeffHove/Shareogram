import{k as ht,E as rt,h as B,s as Ie,a as pt,H as gt,r as Fe,d as Ce,e as de,A as Oe,B as Le,C as bt,q as xt,n as $t,D as wt,g as E,i as b,b as k,t as I,j as C,$ as ue,f as ot,F as yt}from"../chunks/disclose-version.C6sGzUTY.js";import{k as nt,n as kt,o as It,p as Ct,q as st,t as lt,v as Tt,R as At,C as Se,m as Ge,s as be,y as Et,a as Xe,T as Ht,U as St,V as Xt,W as Nt,X as Rt,J as at,x as Mt,g as X,N as Y,z as W,B as F,A as V,b as Ne,u as Dt}from"../chunks/runtime.DMfmyfyl.js";import{d as re,s as pe,e as le,a as Ot}from"../chunks/render.BofUWoOv.js";import{g as Ye,a as Lt,p as Te,i as te}from"../chunks/if.BfWOsGFd.js";import{i as oe}from"../chunks/lifecycle.CdGeAdyv.js";import{r as D}from"../chunks/misc.DQj3XkrK.js";function ke(e,r=!1){return ge(e,new Map)}function ge(e,r,t,n){if(typeof e=="object"&&e!==null){const s=r.get(e);if(s!==void 0)return s;if(nt(e)){const l=[];r.set(e,l);for(let a=0;a<e.length;a+=1)l.push(ge(e[a],r));return l}if(kt(e)===It){const l={};r.set(e,l);for(var o in e)l[o]=ge(e[o],r);return l}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return ge(e.toJSON(),r)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}let Ae=null;function ne(e,r){return r}function zt(e,r,t,n){for(var o=[],s=r.length,l=0;l<s;l++)Ht(r[l].e,o,!0);var a=s>0&&o.length===0&&t!==null;if(a){var c=t.parentNode;xt(c),c.append(t),n.clear(),K(e,r[0].prev,r[s-1].next)}St(o,()=>{for(var v=0;v<s;v++){var f=r[v];a||(n.delete(f.k),K(e,f.prev,f.next)),Xt(f.e,!a)}})}function se(e,r,t,n,o,s=null){var l=e,a={flags:r,items:new Map,first:null},c=(r&rt)!==0;if(c){var v=e;l=B?Ie(v.firstChild):v.appendChild(ht())}B&&pt();var f=null;Ct(()=>{var i=t(),u=nt(i)?i:i==null?[]:Array.from(i),m=u.length;let x=!1;if(B){var S=l.data===gt;S!==(m===0)&&(l=Fe(),Ie(l),Ce(!1),x=!0)}if(B){for(var _=null,h,d=0;d<m;d++){if(de.nodeType===8&&de.data===$t){l=de,x=!0,Ce(!1);break}var g=u[d],$=n(g,d);h=vt(de,a,_,null,g,$,d,o,r),a.items.set($,h),_=h}m>0&&Ie(Fe())}B||Pt(u,a,l,o,r,n),s!==null&&(m===0?f?st(f):f=lt(()=>s(l)):f!==null&&Tt(f,()=>{f=null})),x&&Ce(!0)}),B&&(l=de)}function Pt(e,r,t,n,o,s){var he,Pe,Be,Ve;var l=(o&wt)!==0,a=(o&(Oe|Le))!==0,c=e.length,v=r.items,f=r.first,i=f,u=new Set,m=null,x=new Set,S=[],_=[],h,d,g,$;if(l)for($=0;$<c;$+=1)h=e[$],d=s(h,$),g=v.get(d),g!==void 0&&((he=g.a)==null||he.measure(),x.add(g));for($=0;$<c;$+=1){if(h=e[$],d=s(h,$),g=v.get(d),g===void 0){var L=i?i.e.nodes.start:t;m=vt(L,r,m,m===null?r.first:m.next,h,d,$,n,o),v.set(d,m),S=[],_=[],i=m.next;continue}if(a&&Bt(g,h,$,o),g.e.f&At&&(st(g.e),l&&((Pe=g.a)==null||Pe.unfix(),x.delete(g))),g!==i){if(u.has(g)){if(S.length<_.length){var w=_[0],N;m=w.prev;var O=S[0],A=S[S.length-1];for(N=0;N<S.length;N+=1)Je(S[N],w,t);for(N=0;N<_.length;N+=1)u.delete(_[N]);K(r,O.prev,A.next),K(r,m,O),K(r,A,w),i=w,m=A,$-=1,S=[],_=[]}else u.delete(g),Je(g,i,t),K(r,g.prev,g.next),K(r,g,m===null?r.first:m.next),K(r,m,g),m=g;continue}for(S=[],_=[];i!==null&&i.k!==d;)u.add(i),_.push(i),i=i.next;if(i===null)continue;g=i}S.push(g),m=g,i=g.next}const P=Array.from(u);for(;i!==null;)P.push(i),i=i.next;var R=P.length;if(R>0){var J=o&rt&&c===0?t:null;if(l){for($=0;$<R;$+=1)(Be=P[$].a)==null||Be.measure();for($=0;$<R;$+=1)(Ve=P[$].a)==null||Ve.fix()}zt(r,P,J,v)}l&&Se(()=>{var We;for(g of x)(We=g.a)==null||We.apply()}),Ge.first=r.first&&r.first.e,Ge.last=m&&m.e}function Bt(e,r,t,n){n&Oe&&be(e.v,r),n&Le?be(e.i,t):e.i=t}function vt(e,r,t,n,o,s,l,a,c){var v=Ae;try{var f=(c&Oe)!==0,i=(c&bt)===0,u=f?i?Et(o):Xe(o):o,m=c&Le?Xe(l):l,x={i:m,v:u,k:s,a:null,e:null,prev:t,next:n};return Ae=x,x.e=lt(()=>a(e,u,m),B),x.e.prev=t&&t.e,x.e.next=n&&n.e,t===null?r.first=x:(t.next=x,t.e.next=x.e),n!==null&&(n.prev=x,n.e.prev=x.e),x}finally{Ae=v}}function Je(e,r,t){for(var n=e.next?e.next.e.nodes.start:t,o=r?r.e.nodes.start:t,s=e.e.nodes.start;s!==n;){var l=s.nextSibling;o.before(s),s=l}}function K(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}let Ue=!1;function ct(){Ue||(Ue=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const t of e.target.elements)(r=t.__on_r)==null||r.call(t)})},{capture:!0}))}function j(e){if(B){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var n=e.value;xe(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var o=e.checked;xe(e,"checked",null),e.checked=o}}};e.__on_r=t,Rt(t),ct()}}function xe(e,r,t,n){t=t==null?null:t+"";var o=e.__attributes??(e.__attributes={});B&&(o[r]=e.getAttribute(r),r==="src"||r==="href"||r==="srcset")||o[r]!==(o[r]=t)&&(r==="loading"&&(e[Nt]=t),t===null?e.removeAttribute(r):e.setAttribute(r,t))}function y(e,r,t,n,o){var s=e.__attributes??(e.__attributes={}),l=e.style,a="style-"+r;s[a]===t&&!o||(s[a]=t,t==null?l.removeProperty(r):l.setProperty(r,t,""))}function it(e,r,t,n=t){e.addEventListener(r,t);const o=e.__on_r;o?e.__on_r=()=>{o(),n()}:e.__on_r=n,ct()}function me(e,r,t){it(e,"input",()=>{t(Ke(e)?Qe(e.value):e.value)}),at(()=>{var n=r();if(B&&e.defaultValue!==e.value){t(e.value);return}Ke(e)&&n===Qe(e.value)||e.type==="date"&&!n&&!e.value||(e.value=n??"")})}const Ee=new Set;function He(e,r,t,n,o){var s=t.getAttribute("type")==="checkbox",l=e;let a=!1;if(r!==null)for(var c of r)l=l[c]??(l[c]=[]);l.push(t),it(t,"change",()=>{var v=t.__value;s&&(v=qe(l,v,t.checked)),o(v)},()=>o(s?[]:null)),at(()=>{var v=n();if(B&&t.defaultChecked!==t.checked){a=!0;return}s?(v=v||[],t.checked=Ye(v).includes(Ye(t.__value))):t.checked=Lt(t.__value,v)}),Mt(()=>{var v=l.indexOf(t);v!==-1&&l.splice(v,1)}),Ee.has(l)||(Ee.add(l),Se(()=>{l.sort((v,f)=>v.compareDocumentPosition(f)===4?-1:1),Ee.delete(l)})),Se(()=>{if(a){var v;if(s)v=qe(l,v,t.checked);else{var f=l.find(i=>i.checked);v=f==null?void 0:f.__value}o(v)}})}function qe(e,r,t){for(var n=new Set,o=0;o<e.length;o+=1)e[o].checked&&n.add(e[o].__value);return t||n.delete(r),Array.from(n)}function Ke(e){var r=e.type;return r==="number"||r==="range"}function Qe(e){return e===""?null:+e}const Vt=!0,qr=Object.freeze(Object.defineProperty({__proto__:null,prerender:Vt},Symbol.toStringTag,{value:"Module"}));function Wt(e,r,t,n){const o=Math.abs(e-t),s=Math.abs(r-n);return o===0&&s===1?n>r?"right":"left":o===1&&s===0?t>e?"below":"above":"not adjacent"}function Ft(){const e="0123456789abcdef";let r="#";for(let t=0;t<6;t++){const n=Math.floor(Math.random()*e.length);r+=e[n]}return r}function Gt(e,r){return e.map(t=>t.map(n=>n[r]))}const $e=e=>String.fromCharCode(97+e),Re=e=>e.charCodeAt(0)-97;function Yt(e){const r=e.match(/(\d+|[a-z])/g),t=[],n=[];if(r)for(let o=0;o<r.length;o++){const s=r[o];isNaN(Number(s))?n.push(s):t.push(Number(s))}if(t.length!==n.length)throw new Error("Error: different number of counts and letters.");return{numbers:t,letters:n}}function Jt(e,r){return Math.floor(Math.random()*(r-e+1)+e)}function Ze(e){return/^#?([a-fA-F0-9]{6})$/.test(e)}const z=e=>e.colorIndex!==0,Ut=()=>T.v.length>2;function ut(){const e=[[]];for(let r=0;r<ve.v;(r+=1)-1){e[r]=[];for(let t=0;t<ae.v;(t+=1)-1)e[r][t]={colorIndex:0,Xed:!1}}return e}function ft(){for(let e=0;e<p.numRows;(e+=1)-1)for(let r=0;r<p.numColumns;(r+=1)-1)p.v[e][r].colorIndex>T.v.length-1&&(p.v[e][r].colorIndex=0)}function qt(e){const r=[[]],t=e.length,n=e[0].length;for(let o=0;o<t;(o+=1)-1){r[o]=[{count:0,color:""}];for(let s=0;s<n;(s+=1)-1)if(z(e[o][s])){const l=s===0?null:e[o][s-1].colorIndex,a=e[o][s].colorIndex;l!==a?r[o].push({count:1,color:$e(a)}):r[o][r[o].length-1].count+=1}r[o].length>1&&r[o][0].count===0&&r[o].shift()}return r}function Kt(e){const r=[[]],t=e.length,n=e[0].length;for(let o=0;o<n;(o+=1)-1){r[o]=[{count:0,color:""}];for(let s=0;s<t;(s+=1)-1)if(z(e[s][o])){const l=s===0?null:e[s-1][o].colorIndex,a=e[s][o].colorIndex;l!==a?r[o].push({count:1,color:$e(a)}):r[o][r[o].length-1].count+=1}r[o].length>1&&r[o][0].count===0&&r[o].shift()}return r}function Qt(e){let r="";const t=e.length,n=e[0].length;let o=1;for(let l=0;l<t;(l+=1)-1)for(let a=0;a<n;(a+=1)-1)if(!(l===0&&a===0)){const c=a===0?e[l-1][n-1]:e[l][a-1];c.colorIndex===e[l][a].colorIndex&&c.Xed===e[l][a].Xed?o+=1:(r+=o+(c.Xed?"x":$e(c.colorIndex)),o=1)}const s=e[t-1][n-1];return r+=o+(s.Xed?"x":$e(s.colorIndex)),r}function je(e){const r=Yt(e),t=[];let n=0,o=0;for(let s=0;s<ve.v;(s+=1)-1)t[s]=[];for(let s=0;s<r.numbers.length;(s+=1)-1)for(let l=0;l<r.numbers[s];(l+=1)-1)r.letters[s]==="x"?t[n][(o+=1)-1]={colorIndex:0,Xed:!0}:t[n][(o+=1)-1]={colorIndex:Re(r.letters[s]),Xed:!1},o>ae.v-1&&(n+=1,o=0);return t}function dt(){U.v!==ee.v.length-1&&ee.v.splice(U.v+1),U.v+=1,ee.v.push(ke(p.v))}function we(){ae.v<1||ve.v<1||(p.v=ut(),ee.reset(),ee.v[0]=ke(p.v),U.reset(),Z.reset())}function et(e){const r=/(\d{1,5}[a-ox])/g,t=e.match(r);if(!t||t.join("")!==e)return!1;for(let n=0;n<t.length;(n+=1)-1){const o=t[n],s=parseInt(o.slice(0,-1));if(s<1||s>1e4)return!1}return!0}function Zt(e){if(e.length<7||e.length>22||e[0]!=="0"&&e[0]!=="1")return!1;const r=!!Number(e[0]),t=Number(e[1]),n=Number(e[2]);if(t<1||t>100||n<1||n>100||!Ze(e[3]))return!1;const o=r?e.slice(4,-2):e.slice(4,-1);for(let s=0;s<o.length;(s+=1)-1)if(!Ze(o[s]))return!1;return!(!et(e[r?e.length-2:e.length-1])||r&&!et(e[e.length-1]))}const tt=e=>JSON.parse(JSON.stringify(e));function H(e){const r=typeof e=="object";let t=Xe(Te(r?tt(e):e));return{get v(){return X(t)},set v(o){be(t,Te(o))},reset:()=>be(t,Te(r?tt(e):e))}}function _t(){const e=H(mt),r=Y(()=>e.v.length),t=Y(()=>e.v[0].length),n=Y(()=>Gt(e.v,"colorIndex")),o=Y(()=>Qt(e.v)),s=Y(()=>qt(e.v)),l=Y(()=>Kt(e.v));return{get v(){return e.v},set v(a){e.v=a},reset:e.reset,get numRows(){return X(r)},get numColumns(){return X(t)},get colorIndices(){return X(n)},get encoded(){return X(o)},get rowHints(){return X(s)},get columnHints(){return X(l)}}}const fe=H("#476fb8"),T=H(["#f8fafc","#020617"]),ie=H(1),ae=H(5),ve=H(5),mt=ut(),p=_t(),ce=_t(),ee=H([mt]),U=H(0),Q=H(!1),G=H(!1),M=H(!1),Me=H({colorIndex:-1,Xed:!1,row:-1,column:-1}),jt=H(""),er=H(0),_e=H(1),ye=H(!0),q=H(50),De=H(!1),ze=H(!1),Z=H(!1);var tr=I("<div> </div>"),rr=I('<th class="svelte-1rie86b"></th>'),or=I('<thead><tr><th class="svelte-1rie86b"></th><!></tr></thead>'),nr=I("<div> </div>"),sr=I("<td></td>"),lr=I("<td> </td>"),ar=I("<tr><!><!></tr>"),vr=I('<table class="svelte-1rie86b"><!><tbody></tbody></table>');function cr(e,r){W(r,!1);var t=D(()=>Me),n=D(()=>jt),o=D(()=>er),s=D(()=>ye);const l=_=>_.Xed,a=_=>_.colorIndex===ie.v;function c(_,h){_.colorIndex=h}function v(_){_.colorIndex=0}function f(_){_.Xed=!_.Xed}function i(_,h,d){t(t().v={colorIndex:p.v[h][d].colorIndex,Xed:p.v[h][d].Xed,row:h,column:d}),s(s().v=!1),o().reset(),M.v?_.button===0&&Z.v&&!z(p.v[h][d])?f(p.v[h][d]):_.button===0&&!Z.v&&!l(p.v[h][d])?a(p.v[h][d])?c(p.v[h][d],0):c(p.v[h][d],ie.v):_.button===2&&!z(p.v[h][d])?f(p.v[h][d]):_.button===2&&z(p.v[h][d])&&v(p.v[h][d]):_.button===0&&!a(p.v[h][d])?c(p.v[h][d],ie.v):v(p.v[h][d])}function u(_,h){if(!Q.v&&!G.v||Q.v&&G.v||t().v.row===-1)return;o(o().v+=1),o().v===1&&n(n().v=Wt(t().v.row,t().v.column,_,h));const d=p.v[t().v.row][t().v.column];if(M.v)if(n().v==="above"||n().v==="below"){const g=Math.min(t().v.row,_),$=Math.max(t().v.row,_);for(let L=g;L<$+1;(L+=1)-1){const w=p.v[L][t().v.column];Q.v&&Z.v&&!z(w)?w.Xed=d.Xed:Q.v&&!Z.v&&!l(w)?c(w,d.colorIndex):G.v&&t().v.Xed&&!z(w)?w.Xed=!1:G.v&&t().v.colorIndex===0&&!z(w)?w.Xed=!0:G.v&&t().v.colorIndex!==0&&!l(w)&&v(w)}}else{const g=Math.min(t().v.column,h),$=Math.max(t().v.column,h);for(let L=g;L<$+1;(L+=1)-1){const w=p.v[t().v.row][L];Q.v&&Z.v&&!z(w)?w.Xed=d.Xed:Q.v&&!Z.v&&!l(w)?c(w,d.colorIndex):G.v&&t().v.Xed&&!z(w)?w.Xed=!1:G.v&&t().v.colorIndex===0&&!z(w)?w.Xed=!0:G.v&&t().v.colorIndex!==0&&!l(w)&&v(w)}}else z(d)?c(p.v[_][h],ie.v):v(p.v[_][h])}oe();var m=vr(),x=E(m);te(x,()=>M.v,_=>{var h=or(),d=E(h),g=E(d),$=b(g);se($,1,()=>({length:p.numColumns}),ne,(L,w,N)=>{var O=rr();se(O,5,()=>ce.columnHints[N],ne,(A,P,R)=>{var J=tr();V(()=>y(J,"color",T.v[Re(X(P).color)]));var he=E(J);C(J),V(()=>{y(J,"font-size",q.v/1.5+"px"),pe(he,X(P).count)}),k(A,J)}),C(O),k(L,O)}),C(d),C(h),k(_,h)});var S=b(x);se(S,5,()=>({length:p.numRows}),ne,(_,h,d)=>{var g=ar(),$=E(g);te($,()=>M.v,w=>{var N=sr();y(N,"display","flex"),y(N,"justify-content","right"),se(N,5,()=>ce.rowHints[d],ne,(O,A,P)=>{var R=nr();y(R,"display","flex"),y(R,"justify-content","center"),y(R,"align-items","center"),V(()=>y(R,"color",T.v[Re(X(A).color)]));var J=E(R);C(R),V(()=>{y(R,"min-width",q.v+"px"),y(R,"height",q.v+"px"),y(R,"font-size",q.v/1.5+"px"),pe(J,X(A).count)}),k(O,R)}),C(N),k(w,N)});var L=b($);se(L,1,()=>({length:p.numColumns}),ne,(w,N,O)=>{var A=lr();A.__mousedown=R=>{i(R,d,O)},y(A,"text-align","center"),y(A,"transition","background-color .5s");var P=E(A);V(()=>pe(P,l(p.v[d][O])?"X":"")),C(A),V(()=>{y(A,"background-color",T.v[p.v[d][O].colorIndex]),y(A,"color",T.v[1]),y(A,"min-width",q.v+"px"),y(A,"height",q.v+"px"),y(A,"font-size",q.v/1.5+"px"),y(A,"border-top",_e.v===0?"0":d%5===0&&d!==0&&_e.v===2?`solid 4px ${T.v[1]}`:`solid 2px ${fe.v}`),y(A,"border-left",_e.v===0?"0":O%5===0&&O!==0&&_e.v===2?`solid 4px ${T.v[1]}`:`solid 2px ${fe.v}`)}),le("mouseenter",A,()=>{u(d,O)}),k(w,A)}),C(g),k(_,g)}),C(S),C(m),k(e,m),F()}re(["mousedown"]);var ir=I('<button class="svelte-8air6e">-</button>'),ur=I('<button class="svelte-8air6e">+</button>'),fr=I('<input type="color" class="svelte-8air6e">'),dr=I('<div class="svelte-8air6e"><div class="svelte-8air6e"><!> <!></div> <div class="svelte-8air6e"><input type="color" class="svelte-8air6e"> <!></div></div>');function _r(e,r){W(r,!1);var t=D(()=>T),n=D(()=>ie),o=D(()=>ye),s=D(()=>fe);oe();var l=dr(),a=E(l),c=E(a);te(c,()=>!M.v&&Ut(),m=>{var x=ir();x.__click=()=>{t().v.pop(),n().v>t().v.length-1&&n(n().v-=1),ft()},k(m,x)});var v=b(b(c,!0));te(v,()=>!M.v&&t().v.length<16,m=>{var x=ur();x.__click=()=>{t().v.push(Ft())},k(m,x)}),C(a);var f=b(b(a,!0)),i=E(f);j(i),i.__click=()=>{o(o().v=!1)},i.__change=()=>{o().reset()};var u=b(b(i,!0));se(u,1,()=>t().v,ne,(m,x,S)=>{var _=fr();j(_),_.__click=()=>{o(o().v=!1)},_.__change=()=>{o().reset()},me(_,()=>t().v[S],h=>t(t().v[S]=h)),k(m,_)}),C(f),C(l),me(i,()=>s().v,m=>s(s().v=m)),k(e,l),F()}re(["click","change"]);var mr=I('<input type="radio" name="border" class="svelte-anhrtm">'),hr=I('<div class="svelte-anhrtm"><input type="radio" name="border" class="svelte-anhrtm"> <input type="radio" name="border" class="svelte-anhrtm"> <!></div>');function pr(e,r){W(r,!1);const t=[];var n=D(()=>_e);oe();var o=hr(),s=E(o);j(s),s.value=(s.__value=0)==null?"":0;var l=b(b(s,!0));j(l),l.value=(l.__value=1)==null?"":1;var a=b(b(l,!0));te(a,()=>ae.v>5||ve.v>5,c=>{var v=mr();j(v),v.value=(v.__value=2)==null?"":2,He(t,[],v,()=>n().v,f=>n(n().v=f)),k(c,v)}),C(o),He(t,[],s,()=>n().v,c=>n(n().v=c)),He(t,[],l,()=>n().v,c=>n(n().v=c)),k(e,o),F()}var gr=I('<input type="range" class="svelte-169wscz">');function br(e,r){W(r,!1);var t=D(()=>q);const n=100,o=10;function s(a){a.preventDefault(),a.deltaY<0&&t().v<n?t(t().v+=5):a.deltaY>0&&t().v>o&&t(t().v-=5)}oe();var l=gr();le("wheel",ue,s,void 0,!1),j(l),xe(l,"min",o),xe(l,"max",n),me(l,()=>t().v,a=>t(t().v=a)),k(e,l),F()}var xr=()=>{M.reset(),we()},$r=I("<button>New Editor</button>"),wr=I('<div class="svelte-jomuew"><input type="text" class="svelte-jomuew"> <input type="text" class="svelte-jomuew"></div>'),yr=I('<div class="svelte-jomuew"><!></div>');function kr(e,r){W(r,!1);var t=D(()=>ae),n=D(()=>ve);const o=a=>Math.max(0,Math.min(Number(String(a).replace(/[^0-9]/g,"")),100));oe();var s=yr(),l=E(s);te(l,()=>M.v,a=>{var c=$r();c.__click=[xr],k(a,c)},a=>{var c=wr(),v=E(c);j(v),v.__input=()=>{t(t().v=o(t().v)),we()};var f=b(b(v,!0));j(f),f.__input=()=>{n(n().v=o(n().v)),we()},C(c),me(v,()=>t().v,i=>t(t().v=i)),me(f,()=>n().v,i=>n(n().v=i)),k(a,c)}),C(s),k(e,s),F()}re(["click","input"]);var Ir=()=>{ze.reset()},Cr=I('<div class="svelte-r4iltx"><!> <!> <!> <!> <button>Close Options</button></div>');function Tr(e,r){W(r,!1),oe();var t=Cr(),n=E(t);kr(n,{$$legacy:!0});var o=b(b(n,!0));_r(o,{$$legacy:!0});var s=b(b(o,!0));pr(s,{$$legacy:!0});var l=b(b(s,!0));br(l,{$$legacy:!0});var a=b(b(l,!0));a.__click=[Ir],C(t),V(()=>y(t,"display",ze.v?"flex":"none")),k(e,t),F()}re(["click"]);var Ar=I('<div class="svelte-1pkn4rs"><button class="svelte-1pkn4rs">Undo</button> <button class="svelte-1pkn4rs">Redo</button></div>');function Er(e,r){W(r,!0);function t(v){v.key==="z"?o():v.key==="y"&&s()}function n(){p.v=ke(ee.v[U.v]),ft()}function o(){U.v!==0&&(U.v-=1,n())}function s(){U.v!==ee.v.length-1&&(U.v+=1,n())}var l=Ar();le("keydown",ue,t);var a=E(l);a.__click=o;var c=b(b(a,!0));c.__click=s,C(l),k(e,l),F()}re(["click"]);var Hr=I('<button class="svelte-108n948"> </button>'),Sr=I('<button class="svelte-108n948">X</button>'),Xr=I('<div class="svelte-108n948"><!> <!></div>');function Nr(e,r){W(r,!1);var t=D(()=>ie),n=D(()=>Z);function o(c){/^[1-9]$/.test(c.key)&&Number(c.key)<=T.v.length?(n().reset(),t(t().v=Number(c.key)-1)):c.key==="x"&&M.v&&(n(n().v=!0),t(t().v=-1))}oe();var s=Xr();le("keydown",ue,o);var l=E(s);se(l,1,()=>T.v,ne,(c,v,f)=>{var i=Hr();i.__click=()=>{t(t().v=f),n().reset()};var u=E(i);u.nodeValue=f<9?f+1:"",C(i),V(()=>{y(i,"background-color",T.v[f]),y(i,"color",f===0?T.v[1]:T.v[0]),y(i,"border",f===t().v?f===0?`solid 2px ${T.v[1]}`:`solid 2px ${T.v[0]}`:`solid 2px ${T.v[f]}`),y(i,"--max-h",T.v.length>4?"2rem":"6rem")}),k(c,i)});var a=b(b(l,!0));te(a,()=>M.v,c=>{var v=Sr();v.__click=()=>{n(n().v=!0),t(t().v=-1)},V(()=>{y(v,"border",n().v?`solid 2px ${T.v[1]}`:"solid 2px ButtonFace"),y(v,"--max-h",T.v.length>4?"2rem":"6rem")}),k(c,v)}),C(s),k(e,s),F()}re(["click"]);var Rr=I('<footer class="svelte-80pkd2"><div><!> <!></div></footer>');function Mr(e){var r=Rr(),t=E(r),n=E(t);Nr(n,{$$legacy:!0});var o=b(b(n,!0));Er(o,{$$legacy:!0}),C(t),C(r),k(e,r)}var Dr=I("<button>Reveal Tile</button>");function Or(e,r){W(r,!0);const t=Y(()=>{const a=[];let c=!0;const v=p.numRows,f=p.numColumns;for(let i=0;i<v;(i+=1)-1)for(let u=0;u<f;(u+=1)-1)ce.v[i][u].colorIndex!==p.v[i][u].colorIndex&&(a.push({row:i,column:u}),c=!1);return{isDifferent:a,allSame:c}}),n=Y(()=>X(t).isDifferent),o=Y(()=>X(t).allSame);Ne(()=>{De.v=X(o)});function s(){if(!De.v){const a=Jt(0,X(n).length-1),c=X(n)[a].row,v=X(n)[a].column;p.v[c][v]={colorIndex:ce.v[c][v].colorIndex,Xed:!1},dt()}}var l=Dr();l.__click=s,k(e,l),F()}re(["click"]);var Lr=I("<span> </span> <!>",1),zr=I("<button>Start Game</button>"),Pr=I('<header class="svelte-1cyup8g"><button>Options</button> <!></header>');function Br(e,r){W(r,!1);var t=D(()=>M),n=D(()=>ze),o=D(()=>ce);oe();var s=Pr(),l=E(s);l.__click=()=>{n(n().v=!n().v)},y(l,"margin-right","4px");var a=b(b(l,!0));te(a,()=>t().v,c=>{var v=Lr(),f=ot(v),i=E(f);C(f);var u=b(b(f,!0));Or(u,{$$legacy:!0}),V(()=>pe(i,De.v?"You win!":"Keep trying")),k(c,v)},c=>{var v=zr();v.__click=()=>{t(t().v=!0),o(o().v=p.v),we()},k(c,v)}),C(s),V(()=>y(s,"justify-content",t().v?"space-between":"center")),k(e,s),F()}re(["click"]);var Vr=I('<!> <main class="svelte-1ucsgwf"><!></main> <!> <!>',1);function Kr(e,r){W(r,!0);function t(u){u.button===0?Q.v=!0:u.button===2&&(G.v=!0)}function n(u){u.button===0?Q.reset():u.button===2&&G.reset(),Me.v.row!==-1&&dt(),Me.reset(),ye.reset()}let o=!0;Dt(()=>{if(window.location.hash&&o){const u=window.location.hash.slice(1).split("-");if(Zt(u)){M.v=!!Number(u[0]),ae.v=Number(u[1]),ve.v=Number(u[2]),fe.v="#"+u[3];const m=M.v?u.slice(4,-2):u.slice(4,-1);for(let x=0;x<m.length;(x+=1)-1)T.v[x]="#"+m[x];p.v=je(u[M.v?u.length-2:u.length-1]),ee.v[0]=ke(p.v),M.v&&(ce.v=je(u[u.length-1]))}else alert("Couldn't load the code from the URL. Make sure you copied the link correctly.")}o=!1});const s=Y(()=>{const u=[Number(M.v),ae.v,ve.v,fe.v.slice(1)];for(let m=0;m<T.v.length;(m+=1)-1)u.push(T.v[m].slice(1));return u.push(p.encoded),M.v&&u.push(ce.encoded),u.join("-")});Ne(()=>{ye.v&&(window.location.hash=X(s))}),Ne(()=>{document.body.style.backgroundColor=fe.v,document.body.style.color=T.v[0]});var l=Vr();Ot(u=>{yt.title="Shareogram"}),le("mousedown",ue,t),le("mouseup",ue,n),le("contextmenu",ue,u=>u.preventDefault());var a=ot(l);Br(a,{});var c=b(b(a,!0)),v=E(c);cr(v,{}),C(c);var f=b(b(c,!0));Mr(f);var i=b(b(f,!0));Tr(i,{}),k(e,l),F()}export{Kr as component,qr as universal};

import{g as at,E as Ve,h as Y,s as we,a as vt,H as ct,r as ze,d as Ie,e as ue,k as it,A as de,B as Ne,C as Te,n as ut,D as ft,F as dt,p as A,q as x,b as k,t as E,u as $,$ as fe,G as Le,f as ae,c as _t,z as ht,I as pt}from"../chunks/disclose-version.ClkWH42t.js";import{l as Je,p as gt,o as mt,q as bt,t as Ue,v as je,w as xt,T as yt,y as wt,n as Ye,s as be,G as It,a as Ae,U as Ct,V as kt,W as $t,i as Et,S as Tt,h as At,X as St,Y as Ht,K as Nt,g as S,O as N,C as ce,D as ie,I as G,Z as pe,b as We,u as Rt}from"../chunks/runtime.86PiGSDc.js";import{d as he,s as ge,e as le,a as Mt}from"../chunks/render.7JDm5L4A.js";import{p as Ce,i as Z}from"../chunks/if.BaisB7Av.js";import{i as Ze}from"../chunks/lifecycle.CzhO-o0r.js";import{r as Qe}from"../chunks/misc.DcB2V4IN.js";function xe(e,n=!1){return me(e,new Map)}function me(e,n,t,s){if(typeof e=="object"&&e!==null){const o=n.get(e);if(o!==void 0)return o;if(Je(e)){const l=[];n.set(e,l);for(let f=0;f<e.length;f+=1)l.push(me(e[f],n));return l}if(gt(e)===mt){const l={};n.set(e,l);for(var r in e)l[r]=me(e[r],n);return l}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return me(e.toJSON(),n)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}let ke=null;function U(e,n){return n}function Xt(e,n,t,s){for(var r=[],o=n.length,l=0;l<o;l++)Ct(n[l].e,r,!0);var f=o>0&&r.length===0&&t!==null;if(f){var h=t.parentNode;ut(h),h.append(t),s.clear(),V(e,n[0].prev,n[o-1].next)}kt(r,()=>{for(var _=0;_<o;_++){var p=n[_];f||(s.delete(p.k),V(e,p.prev,p.next)),$t(p.e,!f)}})}function j(e,n,t,s,r,o=null){var l=e,f={flags:n,items:new Map,first:null},h=(n&Ve)!==0;if(h){var _=e;l=Y?we(_.firstChild):_.appendChild(at())}Y&&vt();var p=null;bt(()=>{var u=t(),c=Je(u)?u:u==null?[]:Array.from(u),a=c.length,v=f.flags;v&Te&&!Et(c)&&!(Tt in c)&&!(At in c)&&(v^=Te,v&dt&&!(v&de)&&(v^=de));let i=!1;if(Y){var g=l.data===ct;g!==(a===0)&&(l=ze(),we(l),Ie(!1),i=!0)}if(Y){for(var b=null,T,d=0;d<a;d++){if(ue.nodeType===8&&ue.data===it){l=ue,i=!0,Ie(!1);break}var m=c[d],H=s(m,d);T=et(ue,f,b,null,m,H,d,r,v),f.items.set(H,T),b=T}a>0&&we(ze())}Y||Ot(c,f,l,r,v,s),o!==null&&(a===0?p?Ue(p):p=je(()=>o(l)):p!==null&&xt(p,()=>{p=null})),i&&Ie(!0)}),Y&&(l=ue)}function Ot(e,n,t,s,r,o){var Re,Me,Xe,Oe;var l=(r&ft)!==0,f=(r&(de|Ne))!==0,h=e.length,_=n.items,p=n.first,u=p,c=new Set,a=null,v=new Set,i=[],g=[],b,T,d,m;if(l)for(m=0;m<h;m+=1)b=e[m],T=o(b,m),d=_.get(T),d!==void 0&&((Re=d.a)==null||Re.measure(),v.add(d));for(m=0;m<h;m+=1){if(b=e[m],T=o(b,m),d=_.get(T),d===void 0){var H=u?u.e.nodes.start:t;a=et(H,n,a,a===null?n.first:a.next,b,T,m,s,r),_.set(T,a),i=[],g=[],u=a.next;continue}if(f&&Dt(d,b,m,r),d.e.f&yt&&(Ue(d.e),l&&((Me=d.a)==null||Me.unfix(),v.delete(d))),d!==u){if(c.has(d)){if(i.length<g.length){var I=g[0],X;a=I.prev;var M=i[0],z=i[i.length-1];for(X=0;X<i.length;X+=1)Pe(i[X],I,t);for(X=0;X<g.length;X+=1)c.delete(g[X]);V(n,M.prev,z.next),V(n,a,M),V(n,z,I),u=I,a=z,m-=1,i=[],g=[]}else c.delete(d),Pe(d,u,t),V(n,d.prev,d.next),V(n,d,a===null?n.first:a.next),V(n,a,d),a=d;continue}for(i=[],g=[];u!==null&&u.k!==T;)c.add(u),g.push(u),u=u.next;if(u===null)continue;d=u}i.push(d),a=d,u=d.next}const L=Array.from(c);for(;u!==null;)L.push(u),u=u.next;var B=L.length;if(B>0){var lt=r&Ve&&h===0?t:null;if(l){for(m=0;m<B;m+=1)(Xe=L[m].a)==null||Xe.measure();for(m=0;m<B;m+=1)(Oe=L[m].a)==null||Oe.fix()}Xt(n,L,lt,_)}l&&wt(()=>{var De;for(d of v)(De=d.a)==null||De.apply()}),Ye.first=n.first&&n.first.e,Ye.last=a&&a.e}function Dt(e,n,t,s){s&de&&be(e.v,n),s&Ne?be(e.i,t):e.i=t}function et(e,n,t,s,r,o,l,f,h){var _=ke;try{var p=(h&de)!==0,u=(h&Te)===0,c=p?u?It(r):Ae(r):r,a=h&Ne?Ae(l):l,v={i:a,v:c,k:o,a:null,e:null,prev:t,next:s};return ke=v,v.e=je(()=>f(e,c,a),Y),v.e.prev=t&&t.e,v.e.next=s&&s.e,t===null?n.first=v:(t.next=v,t.e.next=v.e),s!==null&&(s.prev=v,s.e.prev=v.e),v}finally{ke=_}}function Pe(e,n,t){for(var s=e.next?e.next.e.nodes.start:t,r=n?n.e.nodes.start:t,o=e.e.nodes.start;o!==s;){var l=o.nextSibling;r.before(o),o=l}}function V(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}let qe=!1;function tt(){qe||(qe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var n;if(!e.defaultPrevented)for(const t of e.target.elements)(n=t.__on_r)==null||n.call(t)})},{capture:!0}))}function ee(e){if(Y){var n=!1,t=()=>{if(!n){if(n=!0,e.hasAttribute("value")){var s=e.value;Se(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var r=e.checked;Se(e,"checked",null),e.checked=r}}};e.__on_r=t,St(t),tt()}}function Se(e,n,t,s){t=t==null?null:t+"";var r=e.__attributes??(e.__attributes={});Y&&(r[n]=e.getAttribute(n),n==="src"||n==="href"||n==="srcset")||r[n]!==(r[n]=t)&&(n==="loading"&&(e[Ht]=t),t===null?e.removeAttribute(n):e.setAttribute(n,t))}function C(e,n,t,s,r){var o=e.__attributes??(e.__attributes={}),l=e.style,f="style-"+n;o[f]===t&&!r||(o[f]=t,t==null?l.removeProperty(n):l.setProperty(n,t,""))}function zt(e,n,t,s=t){e.addEventListener(n,t);const r=e.__on_r;r?e.__on_r=()=>{r(),s()}:e.__on_r=s,tt()}function te(e,n,t){zt(e,"input",()=>{t(Be(e)?Fe(e.value):e.value)}),Nt(()=>{var s=n();if(Y&&e.defaultValue!==e.value){t(e.value);return}Be(e)&&s===Fe(e.value)||e.type==="date"&&!s&&!e.value||(e.value=s??"")})}function Be(e){var n=e.type;return n==="number"||n==="range"}function Fe(e){return e===""?null:+e}const Lt=!0,Tn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Lt},Symbol.toStringTag,{value:"Module"}));function Yt(e,n,t,s){const r=Math.abs(e-t),o=Math.abs(n-s);return r===0&&o===1?s>n?"right":"left":r===1&&o===0?t>e?"below":"above":"not adjacent"}function Pt(){const e="0123456789abcdef";let n="#";for(let t=0;t<6;t++){const s=Math.floor(Math.random()*e.length);n+=e[s]}return n}function qt(e,n){return e.map(t=>t.map(s=>s[n]))}function Bt(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){if(e[t].length!==n[t].length)return!1;for(let s=0;s<e[t].length;s++)if(e[t][s]!==n[t][s])return!1}return!0}const ye=e=>String.fromCharCode(97+e),He=e=>e.charCodeAt(0)-97;function Ft(e){const n=e.match(/(\d+|[a-z])/g),t=[],s=[];if(n)for(let r=0;r<n.length;r++){const o=n[r];isNaN(Number(o))?s.push(o):t.push(Number(o))}if(t.length!==s.length)throw new Error("Error: different number of counts and letters.");return{numbers:t,letters:s}}const ne=e=>e.colorIndex!==0,Gt=()=>w.v.length>2;function nt(){const e=[[]];for(let n=0;n<q.v;n++){e[n]=[];for(let t=0;t<P.v;t++)e[n][t]={colorIndex:0,Xed:!1}}return e}function rt(){for(let e=0;e<D.numRows;e++)for(let n=0;n<D.numColumns;n++)D.v[e][n].colorIndex>w.v.length-1&&(D.v[e][n].colorIndex=0)}function Kt(e){const n=[[]],t=e.length,s=e[0].length;for(let r=0;r<t;r++){n[r]=[{count:0,color:""}];for(let o=0;o<s;o++)if(ne(e[r][o])){const l=o===0?null:e[r][o-1].colorIndex,f=e[r][o].colorIndex;l!==f?n[r].push({count:1,color:ye(f)}):n[r][n[r].length-1].count++}n[r].length>1&&n[r][0].count===0&&n[r].shift()}return n}function Vt(e){const n=[[]],t=e.length,s=e[0].length;for(let r=0;r<s;r++){n[r]=[{count:0,color:""}];for(let o=0;o<t;o++)if(ne(e[o][r])){const l=o===0?null:e[o-1][r].colorIndex,f=e[o][r].colorIndex;l!==f?n[r].push({count:1,color:ye(f)}):n[r][n[r].length-1].count++}n[r].length>1&&n[r][0].count===0&&n[r].shift()}return n}function Jt(e){let n="";const t=e.length,s=e[0].length;let r=1;for(let l=0;l<t;l++)for(let f=0;f<s;f++)if(!(l===0&&f===0)){const h=f===0?e[l-1][s-1]:e[l][f-1];h.colorIndex===e[l][f].colorIndex&&h.Xed===e[l][f].Xed?r++:(n+=r+(h.Xed?"x":ye(h.colorIndex)),r=1)}const o=e[t-1][s-1];return n+=r+(o.Xed?"x":ye(o.colorIndex)),n}function Ge(e){const n=Ft(e),t=[];let s=0,r=0;for(let o=0;o<q.v;o++)t[o]=[];for(let o=0;o<n.numbers.length;o++)for(let l=0;l<n.numbers[o];l++)n.letters[o]==="x"?t[s][r++]={colorIndex:0,Xed:!0}:t[s][r++]={colorIndex:He(n.letters[o]),Xed:!1},r>P.v-1&&(s++,r=0);return t}const Ke=e=>JSON.parse(JSON.stringify(e));function R(e){const n=typeof e=="object";let t=Ae(Ce(n?Ke(e):e));return{get v(){return S(t)},set v(r){be(t,Ce(r))},reset:()=>be(t,Ce(n?Ke(e):e))}}function ot(){const e=R(st),n=N(()=>e.v.length),t=N(()=>e.v[0].length),s=N(()=>qt(e.v,"colorIndex")),r=N(()=>Jt(e.v)),o=N(()=>Kt(e.v)),l=N(()=>Vt(e.v));return{get v(){return e.v},set v(f){e.v=f},reset:e.reset,get numRows(){return S(n)},get numColumns(){return S(t)},get colorIndices(){return S(s)},get encoded(){return S(r)},get rowHints(){return S(o)},get columnHints(){return S(l)}}}const Q=R("#476fb8"),w=R(["#f8fafc","#020617"]),W=R(1),P=R(5),q=R(5),st=nt(),D=ot(),ve=ot(),J=R([st]),K=R(0),re=R(!1),oe=R(!1),O=R(!1),y=R({row:-1,column:-1}),$e=R(""),Ee=R(0),se=R(1),_e=R(!0),F=R(50);var Ut=E("<div> </div>"),jt=E('<th class="svelte-1rie86b"></th>'),Wt=E('<thead><tr><th class="svelte-1rie86b"></th><!></tr></thead>'),Zt=E("<div> </div>"),Qt=E("<td></td>"),en=E("<td> </td>"),tn=E("<tr><!><!></tr>"),nn=E('<table class="svelte-1rie86b"><!><tbody></tbody></table>');function rn(e,n){ce(n,!1);var t=Qe(()=>D);const s=a=>a.Xed,r=a=>a.colorIndex===W.v;function o(a,v){a.colorIndex=v}function l(a){a.colorIndex=0}function f(a){a.Xed=!a.Xed}function h(a,v,i){O.v?a.button===0&&!s(t().v[v][i])?r(t().v[v][i])?o(t().v[v][i],0):o(t().v[v][i],W.v):a.button===2&&!ne(t().v[v][i])&&f(t().v[v][i]):a.button===0&&!r(t().v[v][i])?o(t().v[v][i],W.v):l(t().v[v][i]),_e.v=!1,y.v={row:v,column:i},Ee.reset()}function _(a,v){if(!(!re.v&&!oe.v||re.v&&oe.v||y.v.row===-1))if(Ee.v++,Ee.v===1&&($e.v=Yt(y.v.row,y.v.column,a,v)),O.v)if($e.v==="above"||$e.v==="below"){const i=Math.min(y.v.row,a),g=Math.max(y.v.row,a);for(let b=i;b<g+1;b++)re.v&&!s(t().v[b][y.v.column])?o(t().v[b][y.v.column],t().v[y.v.row][y.v.column].colorIndex):oe.v&&!ne(t().v[b][y.v.column])&&t(t().v[b][y.v.column].Xed=t().v[y.v.row][y.v.column].Xed)}else{const i=Math.min(y.v.column,v),g=Math.max(y.v.column,v);for(let b=i;b<g+1;b++)re.v&&!s(t().v[y.v.row][b])?o(t().v[y.v.row][b],t().v[y.v.row][y.v.column].colorIndex):oe.v&&!ne(t().v[y.v.row][b])&&t(t().v[y.v.row][b].Xed=t().v[y.v.row][y.v.column].Xed)}else ne(t().v[y.v.row][y.v.column])?o(t().v[a][v],W.v):l(t().v[a][v])}Ze();var p=nn(),u=A(p);Z(u,()=>O.v,a=>{var v=Wt(),i=A(v),g=A(i),b=x(g);j(b,1,()=>({length:t().numColumns}),U,(T,d,m)=>{var H=jt();j(H,9,()=>ve.columnHints[m],U,(I,X,M)=>{var z=Ut();G(()=>C(z,"color",w.v[He(pe(X).color)]));var L=A(z);$(z),G(()=>{C(z,"font-size",F.v/1.5+"px"),ge(L,pe(X).count)}),k(I,z)}),$(H),k(T,H)}),$(i),$(v),k(a,v)});var c=x(u);j(c,9,()=>({length:t().numRows}),U,(a,v,i)=>{var g=tn(),b=A(g);Z(b,()=>O.v,d=>{var m=Qt();C(m,"display","flex"),C(m,"justify-content","right"),j(m,9,()=>ve.rowHints[i],U,(H,I,X)=>{var M=Zt();C(M,"display","flex"),C(M,"justify-content","center"),C(M,"align-items","center"),G(()=>C(M,"color",w.v[He(pe(I).color)]));var z=A(M);$(M),G(()=>{C(M,"width",F.v+"px"),C(M,"height",F.v+"px"),C(M,"font-size",F.v/1.5+"px"),ge(z,pe(I).count)}),k(H,M)}),$(m),k(d,m)});var T=x(b);j(T,1,()=>({length:t().numColumns}),U,(d,m,H)=>{var I=en(),X=N(()=>L=>{h(L,i,H)});I.__mousedown=function(...L){var B;return(B=S(X))==null?void 0:B.apply(this,L)};var M=N(()=>()=>{_(i,H)});C(I,"text-align","center");var z=A(I);G(()=>ge(z,s(t().v[i][H])?"X":"")),$(I),G(()=>{C(I,"background-color",w.v[t().v[i][H].colorIndex]),C(I,"color",w.v[1]),C(I,"width",F.v+"px"),C(I,"height",F.v+"px"),C(I,"font-size",F.v/1.5+"px"),C(I,"border-top",se.v===0?"0":i%5===0&&i!==0&&se.v===2?`solid 4px ${w.v[1]}`:`solid 2px ${Q.v}`),C(I,"border-left",se.v===0?"0":H%5===0&&H!==0&&se.v===2?`solid 4px ${w.v[1]}`:`solid 2px ${Q.v}`)}),le("mouseenter",I,function(...L){var B;return(B=S(M))==null?void 0:B.apply(this,L)},!1),k(d,I)}),$(g),k(a,g)}),$(c),$(p),k(e,p),ie()}he(["mousedown"]);var on=E('<div class="svelte-1og3lo"><div class="svelte-1og3lo"><button class="svelte-1og3lo">Undo</button> Ctrl + z</div> <div class="svelte-1og3lo"><button class="svelte-1og3lo">Redo</button> Ctrl + y</div></div>');function sn(e,n){ce(n,!0);function t(u){u.ctrlKey&&u.key==="z"?r():u.ctrlKey&&u.key==="y"&&o()}function s(){D.v=xe(J.v[K.v]),rt()}function r(){K.v!==0&&(K.v--,s())}function o(){K.v!==J.v.length-1&&(K.v++,s())}var l=on();le("keydown",fe,t,!1);var f=A(l),h=A(f);h.__click=r,Le(),$(f);var _=x(x(f,!0)),p=A(_);p.__click=o,Le(),$(_),$(l),k(e,l),ie()}he(["click"]);var ln=E('<input type="color">'),an=E("<button>-</button>"),vn=E("<button>+</button>"),cn=E("<!> <!>",1),un=E('<div class="svelte-1g2zxbw"><div class="svelte-1g2zxbw"><input type="color"> <!></div> <!> <input type="range" min="0" class="svelte-1g2zxbw"> <input type="range" min="10" max="100" class="svelte-1g2zxbw"></div>');function fn(e,n){ce(n,!0);function t(){_e.v=!1}function s(){_e.reset()}We(()=>{document.body.style.backgroundColor=Q.v,document.body.style.color=w.v[0]});var r=un(),o=A(r),l=A(o);ee(l),l.__click=t,l.__change=s;var f=x(x(l,!0));j(f,65,()=>w.v,U,(u,c,a)=>{var v=ln();ee(v),v.__click=t,v.__change=s,te(v,()=>w.v[a],i=>w.v[a]=i),k(u,v)}),$(o);var h=x(x(o,!0));Z(h,()=>!O.v,u=>{var c=cn(),a=ae(c);Z(a,Gt,i=>{var g=an(),b=N(()=>()=>{w.v.pop(),W.v>w.v.length-1&&W.v--,rt()});g.__click=function(...T){var d;return(d=S(b))==null?void 0:d.apply(this,T)},k(i,g)});var v=x(x(a,!0));Z(v,()=>w.v.length<16,i=>{var g=vn(),b=N(()=>()=>{w.v.push(Pt())});g.__click=function(...T){var d;return(d=S(b))==null?void 0:d.apply(this,T)},k(i,g)}),k(u,c)});var _=x(x(h,!0));ee(_);var p=x(x(_,!0));ee(p),$(r),G(()=>{Se(_,"max",P.v>5||q.v>5?2:1),C(_,"accent-color",w.v[1]),C(p,"accent-color",w.v[1])}),te(l,()=>Q.v,u=>Q.v=u),te(_,()=>se.v,u=>se.v=u),te(p,()=>F.v,u=>F.v=u),k(e,r),ie()}he(["click","change"]);var dn=E('<div class="svelte-15evjjs"><button class="svelte-15evjjs"></button> <!></div>');function _n(e,n){ce(n,!1);var t=Qe(()=>W);function s(l){/^[1-9]$/.test(l.key)&&t(t().v=Number(l.key)>w.v.length?t().v:Number(l.key)-1)}Ze();var r=_t();le("keydown",fe,s,!1);var o=ae(r);j(o,1,()=>w.v,U,(l,f,h)=>{var _=dn(),p=A(_);p.__click=()=>{t(t().v=h)};var u=x(x(p,!0));Z(u,()=>h<9,c=>{var a=ht();a.nodeValue=h+1,k(c,a)}),$(_),G(()=>{C(p,"background-color",w.v[h]),C(p,"border",h===t().v?h===0?`solid 2px ${w.v[1]}`:`solid 2px ${w.v[0]}`:"0")}),k(l,_)}),k(e,r),ie()}he(["click"]);var hn=E('<header class="svelte-4vpjfo"><!> <!></header> <div class="middle svelte-4vpjfo"><!></div>',1);function pn(e){var n=hn(),t=ae(n),s=A(t);sn(s,{$$legacy:!0});var r=x(x(s,!0));fn(r,{$$legacy:!0}),$(t);var o=x(x(t,!0)),l=A(o);_n(l,{$$legacy:!0}),$(o),k(e,n)}var gn=E('<input type="text" class="svelte-1gjew4"> <input type="text" class="svelte-1gjew4"> <button class="svelte-1gjew4">Start Game</button>',1),mn=E('<span class="svelte-1gjew4"> </span> <button class="svelte-1gjew4">New Editor</button>',1),bn=E('<footer class="svelte-1gjew4"><!></footer>');function xn(e,n){ce(n,!0);const t=f=>Math.max(0,Math.min(Number(String(f).replace(/[^0-9]/g,"")),50)),s=N(()=>Bt(ve.colorIndices,D.colorIndices));function r(){P.v<1||q.v<1||(D.v=nt(),J.reset(),J.v[0]=xe(D.v),K.reset())}var o=bn(),l=A(o);Z(l,()=>!O.v,f=>{var h=gn(),_=ae(h);ee(_);var p=N(()=>()=>{P.v=t(P.v),r()});_.__input=function(...i){var g;return(g=S(p))==null?void 0:g.apply(this,i)};var u=x(x(_,!0));ee(u);var c=N(()=>()=>{q.v=t(q.v),r()});u.__input=function(...i){var g;return(g=S(c))==null?void 0:g.apply(this,i)};var a=x(x(u,!0)),v=N(()=>()=>{O.v=!0,ve.v=D.v,r()});a.__click=function(...i){var g;return(g=S(v))==null?void 0:g.apply(this,i)},te(_,()=>P.v,i=>P.v=i),te(u,()=>q.v,i=>q.v=i),k(f,h)},f=>{var h=mn(),_=ae(h),p=A(_);$(_);var u=x(x(_,!0)),c=N(()=>()=>{O.reset(),r()});u.__click=function(...a){var v;return(v=S(c))==null?void 0:v.apply(this,a)},G(()=>ge(p,S(s)?"You win":"Keep trying")),k(f,h)}),$(o),k(e,o),ie()}he(["input","click"]);var yn=E('<!> <main class="svelte-kgtxq7"><!></main> <!>',1);function An(e,n){ce(n,!0);function t(c){c.button===0?re.v=!0:c.button===2&&(oe.v=!0)}function s(c){c.button===0?re.reset():c.button===2&&oe.reset(),y.v.row!==-1&&(K.v!==J.v.length-1&&J.v.splice(K.v+1),K.v++,J.v.push(xe(D.v))),y.reset(),_e.reset()}let r=!0;Rt(()=>{if(window.location.hash&&r){const c=window.location.hash.slice(1).split("-");O.v=!!Number(c[0]),P.v=Number(c[1]),q.v=Number(c[2]),Q.v="#"+c[3];const a=O.v?c.slice(4,-2):c.slice(4,-1);for(let v=0;v<a.length;v++)w.v[v]="#"+a[v];D.v=Ge(c[O.v?c.length-2:c.length-1]),J.v[0]=xe(D.v),O.v&&(ve.v=Ge(c[c.length-1]))}r=!1});const o=N(()=>{const c=[Number(O.v),P.v,q.v,Q.v.slice(1)];for(let a=0;a<w.v.length;a++)c.push(w.v[a].slice(1));return c.push(D.encoded),O.v&&c.push(ve.encoded),c.join("-")});We(()=>{_e.v&&(window.location.hash=S(o))});var l=yn();le("mousedown",fe,t,!1),le("mouseup",fe,s,!1),le("contextmenu",fe,function(...c){var a;return(a=S(f))==null?void 0:a.apply(this,c)},!1),Mt(c=>{pt.title="Shareogram"});var f=N(()=>c=>c.preventDefault()),h=ae(l);pn(h);var _=x(x(h,!0)),p=A(_);rn(p,{}),$(_);var u=x(x(_,!0));xn(u,{}),k(e,l),ie()}export{An as component,Tn as universal};

import{c as _r,a as C,t as X}from"../chunks/disclose-version.BFyFZ1Tk.js";import{v as tr,q as Mt,o as mr,R as gr,w as wr,at as rr,A as le,D as gt,B as br,a9 as nr,H as xr,C as Gt,F as wt,G as et,au as lt,x as or,y as sr,z as yr,_ as dt,k as ht,av as Pt,aw as Ut,ax as Yt,ay as kr,a8 as Ir,az as $r,Q as Er,T as Tr,a5 as Cr,Z as ar,aA as Sr,m as Ar,h as Ht,aB as Xr,a2 as Mr,ab as ir,u as lr,aC as Hr,aD as Rr,aE as Nr,E as Lr,aF as Dr,aG as Or,aH as qr,n as tt,aI as Pr,X as Wt,Y as Jt,aJ as Yr,ac as pt,b as zr,d as W,g as b,ar as ne,O as F,p as Q,f as Je,a as j,c as P,s as L,r as D,J as Ge,aK as Rt,aL as fe,t as J,aM as Br}from"../chunks/runtime.kwFfegih.js";import{a as Fr,b as Gr,l as _t,d as ue,e as te,s as Nt,c as Ur}from"../chunks/render.DZPyI7WY.js";import{a as Wr,p as be,i as oe}from"../chunks/if.QfZRQiwm.js";import{i as de}from"../chunks/legacy.BZr0P_gC.js";const Jr=[];function mt(e,t=!1){return ct(e,new Map,"",Jr)}function ct(e,t,r,n,o=null){if(typeof e=="object"&&e!==null){const s=t.get(e);if(s!==void 0)return s;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(tr(e)){const f=[];t.set(e,f),o!==null&&t.set(o,f);for(let d=0;d<e.length;d+=1)f.push(ct(e[d],t,r,n));return f}if(Mt(e)===mr){const f={};t.set(e,f),o!==null&&t.set(o,f);for(var v in e)f[v]=ct(e[v],t,r,n);return f}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return ct(e.toJSON(),t,r,n,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function Ce(e,t){return t}function Vr(e,t,r,n){for(var o=[],v=t.length,s=0;s<v;s++)kr(t[s].e,o,!0);var f=v>0&&o.length===0&&r!==null;if(f){var d=r.parentNode;Ir(d),d.append(r),n.clear(),Ee(e,t[0].prev,t[v-1].next)}$r(o,()=>{for(var a=0;a<v;a++){var l=t[a];f||(n.delete(l.k),Ee(e,l.prev,l.next)),Er(l.e,!f)}})}function Se(e,t,r,n,o,v=null){var s=e,f={flags:t,items:new Map,first:null},d=(t&rr)!==0;if(d){var a=e;s=le?gt(Tr(a)):a.appendChild(gr())}le&&br();var l=null,p=!1;wr(()=>{var i=r(),h=tr(i)?i:i==null?[]:nr(i),c=h.length;if(p&&c===0)return;p=c===0;let _=!1;if(le){var g=s.data===xr;g!==(c===0)&&(s=Gt(),gt(s),wt(!1),_=!0)}if(le){for(var w=null,T,$=0;$<c;$++){if(et.nodeType===8&&et.data===Cr){s=et,_=!0,wt(!1);break}var k=h[$],N=n(k,$);T=cr(et,f,w,null,k,N,$,o,t),f.items.set(N,T),w=T}c>0&&gt(Gt())}if(!le){var ae=ar;Kr(h,f,s,o,t,(ae.f&lt)!==0,n)}v!==null&&(c===0?l?or(l):l=sr(()=>v(s)):l!==null&&yr(l,()=>{l=null})),_&&wt(!0),r()}),le&&(s=et)}function Kr(e,t,r,n,o,v,s){var ye,Ne,Qe,u;var f=(o&Sr)!==0,d=(o&(Pt|Yt))!==0,a=e.length,l=t.items,p=t.first,i=p,h,c=null,_,g=[],w=[],T,$,k,N;if(f)for(N=0;N<a;N+=1)T=e[N],$=s(T,N),k=l.get($),k!==void 0&&((ye=k.a)==null||ye.measure(),(_??(_=new Set)).add(k));for(N=0;N<a;N+=1){if(T=e[N],$=s(T,N),k=l.get($),k===void 0){var ae=i?i.e.nodes_start:r;c=cr(ae,t,c,c===null?t.first:c.next,T,$,N,n,o),l.set($,c),g=[],w=[],i=c.next;continue}if(d&&Zr(k,T,N,o),k.e.f&lt&&(or(k.e),f&&((Ne=k.a)==null||Ne.unfix(),(_??(_=new Set)).delete(k))),k!==i){if(h!==void 0&&h.has(k)){if(g.length<w.length){var re=w[0],U;c=re.prev;var he=g[0],ve=g[g.length-1];for(U=0;U<g.length;U+=1)Vt(g[U],re,r);for(U=0;U<w.length;U+=1)h.delete(w[U]);Ee(t,he.prev,ve.next),Ee(t,c,he),Ee(t,ve,re),i=re,c=ve,N-=1,g=[],w=[]}else h.delete(k),Vt(k,i,r),Ee(t,k.prev,k.next),Ee(t,k,c===null?t.first:c.next),Ee(t,c,k),c=k;continue}for(g=[],w=[];i!==null&&i.k!==$;)(v||!(i.e.f&lt))&&(h??(h=new Set)).add(i),w.push(i),i=i.next;if(i===null)continue;k=i}g.push(k),c=k,i=k.next}if(i!==null||h!==void 0){for(var pe=h===void 0?[]:nr(h);i!==null;)(v||!(i.e.f&lt))&&pe.push(i),i=i.next;var Re=pe.length;if(Re>0){var Pe=o&rr&&a===0?r:null;if(f){for(N=0;N<Re;N+=1)(Qe=pe[N].a)==null||Qe.measure();for(N=0;N<Re;N+=1)(u=pe[N].a)==null||u.fix()}Vr(t,pe,Pe,l)}}f&&dt(()=>{var m;if(_!==void 0)for(k of _)(m=k.a)==null||m.apply()}),ht.first=t.first&&t.first.e,ht.last=c&&c.e}function Zr(e,t,r,n){n&Pt&&Ut(e.v,t),n&Yt?Ut(e.i,r):e.i=r}function cr(e,t,r,n,o,v,s,f,d){var a=(d&Pt)!==0,l=(d&Xr)===0,p=a?l?Ar(o):Ht(o):o,i=d&Yt?Ht(s):s,h={i,v:p,k:v,a:null,e:null,prev:r,next:n};try{return h.e=sr(()=>f(e,p,i),le),h.e.prev=r&&r.e,h.e.next=n&&n.e,r===null?t.first=h:(r.next=h,r.e.next=h.e),n!==null&&(n.prev=h,n.e.prev=h.e),h}finally{}}function Vt(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,o=t?t.e.nodes_start:r,v=e.e.nodes_start;v!==n;){var s=Mr(v);o.before(v),v=s}}function Ee(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function vr(e,t,r){ir(()=>{var n=lr(()=>t(e,r==null?void 0:r())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}function se(e){if(le){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;Ve(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var o=e.checked;Ve(e,"checked",null),e.checked=o}}};e.__on_r=r,Nr(r),Fr()}}function Ve(e,t,r,n){var o=e.__attributes??(e.__attributes={});le&&(o[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||o[t]!==(o[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Hr]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Qr(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var Kt=new Map;function Qr(e){var t=Kt.get(e.nodeName);if(t)return t;Kt.set(e.nodeName,t=[]);for(var r,n=Mt(e),o=Element.prototype;o!==n;){r=Rr(n);for(var v in r)r[v].set&&t.push(v);n=Mt(n)}return t}function E(e,t,r,n){var o=e.__styles??(e.__styles={});o[t]!==r&&(o[t]=r,r==null?e.style.removeProperty(t):e.style.setProperty(t,r,""))}const jr=()=>performance.now(),Ae={tick:e=>requestAnimationFrame(e),now:()=>jr(),tasks:new Set};function fr(e){Ae.tasks.forEach(t=>{t.c(e)||(Ae.tasks.delete(t),t.f())}),Ae.tasks.size!==0&&Ae.tick(fr)}function en(e){let t;return Ae.tasks.size===0&&Ae.tick(fr),{promise:new Promise(r=>{Ae.tasks.add(t={c:e,f:r})}),abort(){Ae.tasks.delete(t)}}}function ot(e,t){e.dispatchEvent(new CustomEvent(t))}function tn(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Zt(e){const t={},r=e.split(";");for(const n of r){const[o,v]=n.split(":");if(!o||v===void 0)break;const s=tn(o.trim());t[s]=v.trim()}return t}const rn=e=>e;function nn(e,t,r,n){var o=(e&Pr)!==0,v="both",s,f=t.inert,d,a;function l(){var _=ar,g=ht;Wt(null),Jt(null);try{return s??(s=r()(t,(n==null?void 0:n())??{},{direction:v}))}finally{Wt(_),Jt(g)}}var p={is_global:o,in(){t.inert=f,ot(t,"introstart"),d=Lt(t,l(),a,1,()=>{ot(t,"introend"),d==null||d.abort(),d=s=void 0})},out(_){t.inert=!0,ot(t,"outrostart"),a=Lt(t,l(),d,0,()=>{ot(t,"outroend"),_==null||_()})},stop:()=>{d==null||d.abort(),a==null||a.abort()}},i=ht;if((i.transitions??(i.transitions=[])).push(p),Gr){var h=o;if(!h){for(var c=i.parent;c&&c.f&Lr;)for(;(c=c.parent)&&!(c.f&Dr););h=!c||(c.f&Or)!==0}h&&ir(()=>{lr(()=>p.in())})}}function Lt(e,t,r,n,o){var v=n===1;if(qr(t)){var s,f=!1;return dt(()=>{if(!f){var g=t({direction:v?"in":"out"});s=Lt(e,g,r,n,o)}}),{abort:()=>{f=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return o(),{abort:tt,deactivate:tt,reset:tt,t:()=>n};const{delay:d=0,css:a,tick:l,easing:p=rn}=t;var i=[];if(v&&r===void 0&&(l&&l(0,1),a)){var h=Zt(a(0,1));i.push(h,h)}var c=()=>1-n,_=e.animate(i,{duration:d});return _.onfinish=()=>{var g=(r==null?void 0:r.t())??1-n;r==null||r.abort();var w=n-g,T=t.duration*Math.abs(w),$=[];if(T>0){if(a)for(var k=Math.ceil(T/16.666666666666668),N=0;N<=k;N+=1){var ae=g+w*p(N/k),re=a(ae,1-ae);$.push(Zt(re))}c=()=>{var U=_.currentTime;return g+w*p(U/T)},l&&en(()=>{if(_.playState!=="running")return!1;var U=c();return l(U,1-U),!0})}_=e.animate($,{duration:T,fill:"forwards"}),_.onfinish=()=>{c=()=>n,l==null||l(n,1-n),o()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=tt)},deactivate:()=>{o=tt},reset:()=>{n===0&&(l==null||l(1,0))},t:()=>c()}}function Ke(e,t,r=t){var n=Yr();_t(e,"input",()=>{var o=yt(e)?kt(e.value):e.value;r(o),n&&o!==(o=t())&&(e.value=o??"")}),pt(()=>{var o=t();if(le&&e.defaultValue!==e.value){r(yt(e)?kt(e.value):e.value);return}yt(e)&&o===kt(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}const bt=new Set;function xt(e,t,r,n,o=n){var v=r.getAttribute("type")==="checkbox",s=e;let f=!1;if(t!==null)for(var d of t)s=s[d]??(s[d]=[]);s.push(r),_t(r,"change",()=>{var a=r.__value;v&&(a=Qt(s,a,r.checked)),o(a)},()=>o(v?[]:null)),pt(()=>{var a=n();if(le&&r.defaultChecked!==r.checked){f=!0;return}v?(a=a||[],r.checked=a.includes(r.__value)):r.checked=Wr(r.__value,a)}),zr(()=>{var a=s.indexOf(r);a!==-1&&s.splice(a,1)}),bt.has(s)||(bt.add(s),dt(()=>{s.sort((a,l)=>a.compareDocumentPosition(l)===4?-1:1),bt.delete(s)})),dt(()=>{if(f){var a;if(v)a=Qt(s,a,r.checked);else{var l=s.find(p=>p.checked);a=l==null?void 0:l.__value}o(a)}})}function Dt(e,t,r=t){_t(e,"change",()=>{var n=e.checked;r(n)}),t()==null&&r(!1),pt(()=>{var n=t();e.checked=!!n})}function Qt(e,t,r){for(var n=new Set,o=0;o<e.length;o+=1)e[o].checked&&n.add(e[o].__value);return r||n.delete(t),Array.from(n)}function yt(e){var t=e.type;return t==="number"||t==="range"}function kt(e){return e===""?null:+e}function on(e,t,r=t){_t(e,"change",()=>{r(e.files)}),pt(()=>{e.files=t()})}function V(e){var t=Ht(0);return function(){return arguments.length===1?(W(t,b(t)+1),arguments[0]):(b(t),e())}}const sn=!0,yo=Object.freeze(Object.defineProperty({__proto__:null,prerender:sn},Symbol.toStringTag,{value:"Module"})),ke=e=>e.colorIndex!==0,zt=()=>{const e=[[]];for(let t=0;t<Me.v;(t+=1)-1){e[t]=[];for(let r=0;r<Xe.v;(r+=1)-1)e[t][r]={colorIndex:0,Xed:!1}}return e},ur=()=>{for(let e=0;e<I.numRows;(e+=1)-1)for(let t=0;t<I.numColumns;(t+=1)-1)I.v[e][t].colorIndex>O.v.length-1&&(I.v[e][t].colorIndex=0)},Bt=()=>{xe.v!==He.v.length-1&&He.v.splice(xe.v+1),xe.v+=1,He.v.push(mt(I.v))},vt=()=>{Xe.v<1||Me.v<1||(I.v=zt(),He.reset(),He.v[0]=mt(I.v),xe.reset(),Te.v=!1)},Ot=e=>{let t=0;for(let r=0;r<e.length;(r+=1)-1)t*=26,t+=e.charCodeAt(r)-97+1;return t-1},qt=e=>{const t=parseInt(e.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]},ft=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),st=e=>{let t="";for(;e>=0;)t=String.fromCharCode(e%26+97)+t,e=Math.floor(e/26)-1;return t},G=e=>{let t=ne(be(e));return{set v(n){W(t,be(n))},get v(){return b(t)},reset:()=>W(t,be(e))}},dr=()=>{const e=G(hr),t=F(()=>e.v.length),r=F(()=>e.v[0].length),n=F(()=>e.v.map(a=>a.map(l=>l.colorIndex))),o=F(()=>{const a=[[]],l=e.v.length,p=e.v[0].length;for(let i=0;i<l;(i+=1)-1){a[i]=[];const h=e.v[i][0],c={color:h.Xed?"X":st(h.colorIndex),count:1};for(let _=1;_<p;(_+=1)-1){const g=e.v[i][_-1],w=e.v[i][_];g.colorIndex===w.colorIndex&&g.Xed===w.Xed?c.count+=1:(a[i].push({...c}),c.color=w.Xed?"X":st(w.colorIndex),c.count=1)}a[i].push({...c})}return a}),v=F(()=>b(o).map(a=>a.filter(l=>l.color!=="a"))),s=F(()=>{const a=[[]],l=e.v.length,p=e.v[0].length;for(let i=0;i<p;(i+=1)-1){a[i]=[];const h=e.v[0][i],c={color:h.Xed?"X":st(h.colorIndex),count:1};for(let _=1;_<l;(_+=1)-1){const g=e.v[_-1][i],w=e.v[_][i];g.colorIndex===w.colorIndex&&g.Xed===w.Xed?c.count+=1:(a[i].push({...c}),c.color=w.Xed?"X":st(w.colorIndex),c.count=1)}a[i].push({...c})}return a}),f=F(()=>b(s).map(a=>a.filter(l=>l.color!=="a"))),d=F(()=>{let a="",l="",p=0;for(let i=0;i<b(o).length;(i+=1)-1)for(let h=0;h<b(o)[i].length;(h+=1)-1){const c=b(o)[i][h];c.color===l?p+=c.count:(l!==""&&(a+=p+l),l=c.color,p=c.count)}return a+=p+l,a});return{get columnEncodes(){return b(s)},get colorIndices(){return b(n)},get columnHints(){return b(f)},get rowEncodes(){return b(o)},get numColumns(){return b(r)},get rowHints(){return b(v)},set v(a){e.v=a},get encoded(){return b(d)},get numRows(){return b(t)},get v(){return e.v},reset:e.reset}},Ue=G("#476fb8"),O=G(["#f8fafc","#020617"]),qe=G(1),Xe=G(5),Me=G(5),hr=zt(),I=dr(),ce=dr(),He=G([hr]),xe=G(0),Z=G(!1),B=G({colorIndex:-1,column:-1,Xed:!1,row:-1}),we=G(1),nt=G(!1),z=G(50),We=G(!1),Ft=G(!1),Te=G(!1),Be=G(!0),Ze=G(!1),Fe=G(!1),ut=G(!1);var Ye=V(()=>Me),ze=V(()=>Xe),It=V(()=>Z),an=X("<button>New Editor</button>"),ln=X('<div class="flex"><input class="min-w-0 text-center" type="text"> <input class="min-w-0 text-center" type="text"></div>');function cn(e,t){Q(t,!1);const r=v=>Math.max(0,Number(String(v).replace(/[^0-9]/g,"")));de();var n=_r(),o=Je(n);oe(o,()=>It().v,v=>{var s=an();s.__click=()=>{It(It().v=!1),vt()},C(v,s)},v=>{var s=ln(),f=P(s);se(f),f.__input=()=>{ze(ze().v=r(ze().v)),vt()};var d=L(f,2);se(d),d.__input=()=>{Ye(Ye().v=r(Ye().v)),vt()},D(s),Ke(f,()=>ze().v,a=>ze(ze().v=a)),Ke(d,()=>Ye().v,a=>Ye(Ye().v=a)),C(v,s)}),C(e,n),j()}ue(["click","input"]);const vn=(e,t)=>{t(I.colorIndices,O.v,r=>{const n=document.createElement("a");n.download="shareogram.png",n.href=r,n.click()})};var fn=X("<button>Export as PNG</button>");function un(e,t){Q(t,!1);const r=(o,v,s)=>{const f=o[0].length,d=o.length,a=document.createElement("canvas");a.width=f,a.height=d;const l=a.getContext("2d");if(l){const p=l.createImageData(f,d);for(let h=0;h<d;(h+=1)-1)for(let c=0;c<f;(c+=1)-1){const _=v[o[h][c]],g=qt(_);if(g){const[w,T,$]=g,k=(h*f+c)*4;p.data[k]=w,p.data[k+1]=T,p.data[k+2]=$,p.data[k+3]=255}}l.putImageData(p,0,0);const i=a.toDataURL("image/png");s(i)}};de();var n=fn();n.__click=[vn,r],C(e,n),j()}ue(["click"]);var dn=X('<input class="mx-2" type="range" max="442" min="10">'),hn=X('<input accept="image/png" id="file-upload" type="file" class="svelte-1mz0xx0"> <!>',1);function pn(e,t){Q(t,!0);let r=ne(10),n=ne(void 0);const o=(p,i,h)=>{const[c,_,g]=p,[w,T,$]=i;return Math.sqrt((c-w)**2+(_-T)**2+(g-$)**2)<=h},v=(p,i,h)=>"#"+[p,i,h].map(c=>Math.round(c).toString(16).padStart(2,"0")).join(""),s=(p,i,h)=>{const c=qt(p);for(let _=0;_<i.length;(_+=1)-1){const g=qt(i[_]);if(o(c,g,h))return _}return i.push(p),i.length-1},f=(p,i,h)=>{const c=new FileReader;c.onload=_=>{var w;const g=new Image;g.onload=()=>{const T=document.createElement("canvas"),$=T.getContext("2d");if($){T.width=g.width,T.height=g.height,$.drawImage(g,0,0);const k=$.getImageData(0,0,g.width,g.height).data,N=[],ae=[];for(let re=0;re<g.height;(re+=1)-1){const U=[];for(let he=0;he<g.width;(he+=1)-1){const ve=(re*g.width+he)*4,pe=k[ve],Re=k[ve+1],Pe=k[ve+2],ye=v(pe,Re,Pe),Ne=s(ye,N,i);U.push(Ne)}ae.push(U)}h(ae,N)}},g.src=(w=_.target)==null?void 0:w.result},c.readAsDataURL(p)};Ge(()=>{b(n)&&f(b(n)[0],b(r),(p,i)=>{Xe.v=p[0].length,Me.v=p.length,O.v=i,qe.v=0,I.v=zt();for(let h=0;h<I.numRows;(h+=1)-1)for(let c=0;c<I.numColumns;(c+=1)-1)I.v[h][c].colorIndex=p[h][c];Bt()})});var d=hn(),a=Je(d),l=L(a,2);oe(l,()=>b(n),p=>{var i=dn();se(i),Ke(i,()=>b(r),h=>W(r,h)),C(p,i)}),on(a,()=>b(n),p=>W(n,p)),C(e,d),j()}var Ie=V(()=>nt),$t=V(()=>qe),Et=V(()=>Ue),$e=V(()=>O),_n=X('<button class="flex-1">-</button>'),mn=X('<!> <button class="flex-1">+</button>',1),gn=X('<input type="color" class="h-8 min-w-12 flex-1 border-0">'),wn=X('<div><div class="flex flex-wrap"><!></div> <div class="flex flex-wrap"><input type="color" class="h-8 min-w-12 flex-1 border-0"> <!></div></div>');function bn(e,t){Q(t,!1);const r=()=>{const l="0123456789abcdef";let p="#";for(let i=0;i<6;(i+=1)-1){const h=Math.floor(Math.random()*l.length);p+=l[h]}return p},n=()=>$e().v.length>2;de();var o=wn(),v=P(o),s=P(v);oe(s,()=>!Z.v,l=>{var p=mn(),i=Je(p);oe(i,n,c=>{var _=_n();_.__click=()=>{$e().v.pop(),$t().v>$e().v.length-1&&$t($t().v-=1),ur()},C(c,_)});var h=L(i,2);h.__click=()=>{$e().v.push(r())},C(l,p)}),D(v);var f=L(v,2),d=P(f);se(d),d.__change=()=>{Ie(Ie().v=!0)},d.__click=()=>{Ie(Ie().v=!1)};var a=L(d,2);Se(a,1,()=>$e().v,Ce,(l,p,i)=>{var h=gn();se(h),h.__change=()=>{Ie(Ie().v=!0)},h.__click=()=>{Ie(Ie().v=!1)},Ke(h,()=>$e().v[i],c=>$e($e().v[i]=c)),C(l,h)}),D(f),D(o),Ke(d,()=>Et().v,l=>Et(Et().v=l)),C(e,o),j()}ue(["click","change"]);var Tt=V(()=>Be),xn=X('<div class="flex justify-center border-b-2 border-b-black pb-5"><input type="checkbox" class="svelte-1puqql9"></div>');function yn(e,t){Q(t,!1),de();var r=xn(),n=P(r);se(n),D(r),Dt(n,()=>Tt().v,o=>Tt(Tt().v=o)),C(e,r),j()}var ge=V(()=>we),kn=X('<input name="border" type="radio" class="svelte-14k2w4w">'),In=X('<div class="flex justify-between p-5 accent-black svelte-14k2w4w"><input name="border" type="radio" class="svelte-14k2w4w"> <input name="border" type="radio" class="svelte-14k2w4w"> <!></div>');function $n(e,t){Q(t,!1);const r=[];de();var n=In(),o=P(n);se(o),o.value=(o.__value=0)==null?"":0;var v=L(o,2);se(v),v.value=(v.__value=1)==null?"":1;var s=L(v,2);oe(s,()=>Xe.v>5||Me.v>5,f=>{var d=kn();se(d),d.value=(d.__value=2)==null?"":2,xt(r,[],d,()=>ge().v,a=>ge(ge().v=a)),C(f,d)}),D(n),xt(r,[],o,()=>ge().v,f=>ge(ge().v=f)),xt(r,[],v,()=>ge().v,f=>ge(ge().v=f)),C(e,n),j()}var En=X("<button>Reveal Tile</button>");function Tn(e,t){Q(t,!0);const r=F(()=>{const f=[];let d=!0;const a=I.numRows,l=I.numColumns;for(let p=0;p<a;(p+=1)-1)for(let i=0;i<l;(i+=1)-1)ce.v[p][i].colorIndex!==I.v[p][i].colorIndex&&(f.push({column:i,row:p}),d=!1);return{isDifferent:f,allSame:d}}),n=F(()=>b(r).isDifferent),o=F(()=>b(r).allSame);Ge(()=>{We.v=b(o)});const v=()=>{if(!We.v){const f=ft(0,b(n).length-1),d=b(n)[f].row,a=b(n)[f].column;I.v[d][a]={colorIndex:ce.v[d][a].colorIndex,Xed:!1},Bt()}};var s=En();s.__click=v,C(e,s),j()}ue(["click"]);var Ct=V(()=>ut),St=V(()=>Fe),Cn=X('<div class="flex justify-between border-t-2 border-t-black p-5"><input type="checkbox" class="svelte-1puqql9"> <input type="checkbox" class="svelte-1puqql9"></div>');function Sn(e,t){Q(t,!1),de();var r=Cn(),n=P(r);se(n);var o=L(n,2);se(o),D(r),Dt(n,()=>St().v,v=>St(St().v=v)),Dt(o,()=>Ct().v,v=>Ct(Ct().v=v)),C(e,r),j()}const pr="none";function An(e){return Array.isArray(e)?e:[e]}function rt(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function Xn(e,t){const r=e.getBoundingClientRect(),n=Math.abs(t[0].clientX-t[1].clientX),o=Math.abs(t[0].clientY-t[1].clientY),v=Math.min(t[0].clientX,t[1].clientX),s=Math.min(t[0].clientY,t[1].clientY),f=v+n/2,d=s+o/2,a=Math.round(f-r.left),l=Math.round(d-r.top);return{x:a,y:l}}function Mn(e,t){return t.filter(r=>e.pointerId!==r.pointerId)}function at(e,t,r,n,o){const v=e.getBoundingClientRect(),s=Math.round(r.clientX-v.left),f=Math.round(r.clientY-v.top);e.dispatchEvent(new CustomEvent(`${t}${o}`,{detail:{event:r,pointersCount:n.length,target:r.target,x:s,y:f}}))}function Hn(e,t,r,n,o,v=pr){t.style.touchAction=An(v).join(" ");let s=[];function f(a){s.push(a),at(t,e,a,s,"down"),n==null||n(s,a);const l=a.pointerId;function p(w){l===w.pointerId&&(s=Mn(w,s),s.length||i(),at(t,e,w,s,"up"),o==null||o(s,w))}function i(){h(),c(),_(),g()}const h=rt(t,"pointermove",w=>{s=s.map(T=>w.pointerId===T.pointerId?w:T),at(t,e,w,s,"move"),r==null||r(s,w)}),c=rt(t,"lostpointercapture",w=>{p(w)}),_=rt(t,"pointerup",w=>{p(w)}),g=rt(t,"pointerleave",w=>{s=[],i(),at(t,e,w,s,"up"),o==null||o(s,w)})}const d=rt(t,"pointerdown",f);return{destroy:()=>{d()}}}function jt(e){return Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY)}function Rn(e,t){const r={touchAction:pr,composed:!1,...t},n="pinch";let o,v=0,s;function f(l,p){l.length===1&&(o=void 0)}function d(l,p){l.length===2&&(v=jt(l),s=Xn(e,l))}function a(l,p){if(l.length===2){const i=jt(l);if(o!==void 0&&i!==o){const h=i/v;e.dispatchEvent(new CustomEvent(n,{detail:{scale:h,center:s,pointerType:p.pointerType}}))}o=i}return!1}return r.composed?{onMove:a,onDown:d,onUp:null}:Hn(n,e,a,d,f,r.touchAction)}var Nn=X('<input type="range" class="svelte-artubv">');function Ln(e,t){Q(t,!0);const r=100,n=10;let o=ne(1);const v=d=>{d.preventDefault(),d.deltaY<0&&z.v<r?z.v+=5:d.deltaY>0&&z.v>n&&(z.v-=5)},s=d=>{if(!Ze.v)return;const a=b(o);W(o,be(d.detail.scale));const l=b(o)<a;l&&z.v>n?z.v-=1:!l&&z.v<r&&(z.v+=1)};var f=Nn();te("wheel",fe,v,void 0,!1),vr(Rt.body,d=>Rn(d)),te("pinch",Rt.body,s),se(f),Ve(f,"max",r),Ve(f,"min",n),Ke(f,()=>z.v,d=>z.v=d),C(e,f),j()}var it=V(()=>Ft),Dn=X("<!> <!>",1),On=X("<!> <!>",1),qn=X('<div class="fixed bottom-0 top-0 z-50 flex w-40 max-w-[75%] flex-col overflow-hidden rounded-l-3xl bg-white svelte-187qfh2"><!> <!> <!> <!> <!> <!> <!></div>');function Pn(e,t){Q(t,!1);const r=p=>{p.key==="o"&&it(it().v=!it().v)};de();var n=qn();te("keydown",fe,r);var o=P(n);oe(o,()=>!Z.v,p=>{var i=Dn(),h=Je(i);pn(h,{});var c=L(h,2);un(c,{}),C(p,i)});var v=L(o,2);cn(v,{});var s=L(v,2);bn(s,{});var f=L(s,2);$n(f,{});var d=L(f,2);yn(d,{});var a=L(d,2);Ln(a,{});var l=L(a,2);oe(l,()=>Z.v,p=>{var i=On(),h=Je(i);Sn(h,{});var c=L(h,2);Tn(c,{}),C(p,i)}),D(n),J(()=>E(n,"right",it().v?"0":"-300px")),C(e,n),j()}const Yn=e=>e;function zn(e,{delay:t=0,duration:r=400,easing:n=Yn}={}){const o=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:n,css:v=>`opacity: ${v*o}`}}var Bn=X('<div class="font-normal"> </div>'),Fn=X("<th></th>"),Gn=X('<thead class="top-0 z-20 align-bottom"><tr><th class="invisible"></th><!></tr></thead>'),Un=X("<div> </div>"),Wn=X('<td class="left-0 z-10"><div></div></td>'),Jn=X("<span>X</span>"),Vn=X('<td class="box-content" tabindex="0"><!></td>'),Kn=X("<tr><!><!></tr>"),Zn=X('<table class="m-32 border-collapse"><!><tbody></tbody></table>');function Qn(e,t){Q(t,!0);let r=ne(!1),n=ne(!1),o=ne(""),v=ne(0);const s=(u,m,x,M)=>{const q=Math.abs(u-x),y=Math.abs(m-M);return q===0&&y===1?M>m?"right":"left":q===1&&y===0?x>u?"below":"above":"not adjacent"},f=u=>u.Xed,d=u=>u.colorIndex===qe.v,a=(u,m)=>{u.colorIndex=m},l=u=>{u.colorIndex=0},p=u=>{u.Xed=!u.Xed},i=(u,m,x)=>{Ze.v||(u.target instanceof HTMLElement&&u.target.releasePointerCapture(u.pointerId),u.button===0?W(r,!0):u.button===2&&W(n,!0),h(m,x))},h=(u,m)=>{B.v={colorIndex:I.v[u][m].colorIndex,Xed:I.v[u][m].Xed,column:m,row:u},nt.v=!1,W(v,0),Z.v?b(r)?Te.v&&!ke(I.v[u][m])?p(I.v[u][m]):!Te.v&&!f(I.v[u][m])&&(d(I.v[u][m])?l(I.v[u][m]):a(I.v[u][m],qe.v)):b(n)&&(ke(I.v[u][m])?l(I.v[u][m]):p(I.v[u][m])):b(r)?a(I.v[u][m],qe.v):b(n)&&l(I.v[u][m])},c=u=>{u.button===0?W(r,!1):u.button===2&&W(n,!1),nt.v=!0},_=(u,m)=>{if(!b(r)&&!b(n)||b(r)&&b(n)||B.v.row===-1||Ze.v)return;Br(v),b(v)===1&&W(o,be(s(B.v.row,B.v.column,u,m)));const x=I.v[B.v.row][B.v.column];if(Z.v)if(b(o)==="above"||b(o)==="below"){const M=Math.min(B.v.row,u),q=Math.max(B.v.row,u);for(let y=M;y<q+1;(y+=1)-1){const S=I.v[y][B.v.column];b(r)?Te.v&&!ke(S)?S.Xed=x.Xed:!Te.v&&!f(S)&&a(S,x.colorIndex):B.v.Xed&&!ke(S)?S.Xed=!1:B.v.colorIndex===0&&!ke(S)?S.Xed=!0:B.v.colorIndex!==0&&!f(S)&&l(S)}}else{const M=Math.min(B.v.column,m),q=Math.max(B.v.column,m);for(let y=M;y<q+1;(y+=1)-1){const S=I.v[B.v.row][y];b(r)?Te.v&&!ke(S)?S.Xed=x.Xed:!Te.v&&!f(S)&&a(S,x.colorIndex):B.v.Xed&&!ke(S)?S.Xed=!1:B.v.colorIndex===0&&!ke(S)?S.Xed=!0:B.v.colorIndex!==0&&!f(S)&&l(S)}}else b(r)?a(I.v[u][m],qe.v):l(I.v[u][m])};let g=ne(!1),w=ne(be(we.v)),T=ne(be(Be.v));Ge(()=>{We.v&&!b(g)?(W(g,!0),W(w,be(we.v)),W(T,be(Be.v)),we.v=0,Be.v=!1):!We.v&&b(g)&&(W(g,!1),we.v=b(w),Be.v=b(T))});let $=0,k=0;const N=(u,m)=>{$=u,k=m},ae=u=>{var M;if(u.key!=="ArrowUp"&&u.key!=="ArrowDown"&&u.key!=="ArrowLeft"&&u.key!=="ArrowRight"&&u.key!==" ")return;u.preventDefault();let m=$,x=k;u.key==="ArrowUp"&&$>0?m-=1:u.key==="ArrowDown"&&$<I.numRows-1?m+=1:u.key==="ArrowLeft"&&k>0?x-=1:u.key==="ArrowRight"&&k<I.numColumns-1?x+=1:u.key===" "&&W(r,!0),(M=document.querySelector(`[data-row="${m}"][data-col="${x}"]`))==null||M.focus(),b(r)&&h(m,x)},re=u=>{u.key===" "&&W(r,!1)},U=(u,m,x)=>{let M=0,q=0;for(let A=0;A<m.length;(A+=1)-1)A!==0&&m[A-1].color===m[A].color&&(A<=u?M+=1:A>u&&(q+=1)),A<u?M+=m[A].count:A>u&&(q+=m[A].count);let y=0,S=x.length-1,Y=0;for(let A=y;A<x.length&&!(Y>=M);(A+=1)-1)Y+=x[A].count,y+=1;Y=0;for(let A=S;A>=0&&!(Y>=q);(A-=1)+1)Y+=x[A].count,S-=1;return{encodesStartIndex:y,encodesEndIndex:S}},he=(u,m)=>{const x=new Array(u.length).fill(void 0),M=new Array(u.length).fill(void 0),q=new Array(u.length).fill(void 0);for(let y=0;y<u.length;(y+=1)-1){const{encodesStartIndex:S,encodesEndIndex:Y}=U(y,u,m),A=u[y];for(let H=S;H<=Y;(H+=1)-1)if(A.color===m[H].color&&A.count>=m[H].count){if(x.slice(0,y).includes(H))continue;x[y]=H;for(let R=0;R<y;(R+=1)-1)x[R]>H&&(x[R]=void 0);break}}for(let y=u.length-1;y>=0;(y-=1)+1){const{encodesStartIndex:S,encodesEndIndex:Y}=U(y,u,m),A=u[y];for(let H=Y;H>=S;(H-=1)+1)if(A.color===m[H].color&&A.count>=m[H].count){if(M.slice(y+1).includes(H))continue;M[y]=H;for(let R=u.length-1;R>y;(R-=1)+1)M[R]<H&&(M[R]=void 0);break}}for(let y=0;y<u.length;(y+=1)-1)x[y]===M[y]&&(q[y]=x[y]);return q},ve=(u,m)=>{const x=he(u,m);let M=[],q=x[0]!==void 0?x[0]:0;for(let y=1;y<x.length;(y+=1)-1)x[y]!==void 0&&(x[y-1]===void 0&&M.push([q,x[y]]),q=x[y]);x[x.length-1]===void 0&&q!==m.length-1&&M.push([q,m.length-1]);for(let y=0;y<M.length;(y+=1)-1){const[S,Y]=M[y],A=S===0?0:x.indexOf(S),H=Y===m.length-1?u.length-1:x.indexOf(Y),R=u.slice(A,H+1),ee=m.slice(S,Y+1),_e=R.reduce((ie,je)=>ie+je.count,0);if(ee.reduce((ie,je)=>ie+je.count,0)<_e)continue;const me=he(R,ee);for(let ie=0;ie<me.length;(ie+=1)-1)me[ie]!==void 0&&(me[ie]=me[ie]+S);x.splice(A,H-A+1,...me)}return x},pe=F(()=>{let u=[[]];for(let m=0;m<ce.rowHints.length;(m+=1)-1){const x=ce.rowHints[m],M=I.rowEncodes[m];u[m]=ve(x,M)}return u}),Re=F(()=>{let u=[[]];for(let m=0;m<ce.columnHints.length;(m+=1)-1){const x=ce.columnHints[m],M=I.columnEncodes[m];u[m]=ve(x,M)}return u}),Pe=(u,m,x,M)=>{const q=M?b(pe):b(Re),y=M?I.rowEncodes[u]:I.columnEncodes[u];return q[u][m]!==void 0&&JSON.stringify(x)===JSON.stringify(y[q[u][m]])};var ye=Zn();te("pointerup",fe,c),te("keyup",fe,re);var Ne=P(ye);oe(Ne,()=>Z.v,u=>{var m=Gn(),x=P(m),M=L(P(x));Se(M,17,()=>({length:I.numColumns}),Ce,(q,y,S)=>{var Y=Fn();Se(Y,21,()=>ce.columnHints[S],Ce,(A,H,R)=>{var ee=Bn();const _e=F(()=>Pe(S,R,b(H),!1)?.2:1);J(()=>E(ee,"opacity",b(_e)));const K=F(()=>O.v[Ot(b(H).color)]);J(()=>E(ee,"color",b(K)));var me=P(ee,!0);D(ee),J(()=>{E(ee,"font-size",ut.v?z.v/3+"px":z.v/1.5+"px"),Nt(me,b(H).count)}),C(A,ee)}),D(Y),C(q,Y)}),D(x),D(m),J(()=>{E(m,"position",ut.v?"sticky":""),E(m,"background-color",ut.v?O.v[0]:"")}),C(u,m)});var Qe=L(Ne);Se(Qe,21,()=>({length:I.numRows}),Ce,(u,m,x)=>{var M=Kn(),q=P(M);oe(q,()=>Z.v,Y=>{var A=Wn(),H=P(A);E(H,"justify-content","right"),E(H,"display","flex"),Se(H,21,()=>ce.rowHints[x],Ce,(R,ee,_e)=>{var K=Un();const me=F(()=>Pe(x,_e,b(ee),!0)?.2:1);J(()=>E(K,"opacity",b(me)));const ie=F(()=>O.v[Ot(b(ee).color)]);J(()=>E(K,"color",b(ie))),E(K,"justify-content","center"),E(K,"align-items","center"),E(K,"display","flex");var je=P(K,!0);D(K),J(()=>{E(K,"font-size",Fe.v?z.v/3+"px":z.v/1.5+"px"),E(K,"min-width",Fe.v?z.v/3+"px":z.v+"px"),E(K,"height",Fe.v?z.v/3+"px":z.v+"px"),Nt(je,b(ee).count)}),C(R,K)}),D(H),D(A),J(()=>{E(A,"position",Fe.v?"sticky":""),E(A,"background-color",Fe.v?O.v[0]:"")}),C(Y,A)});var y=L(q);Se(y,17,()=>({length:I.numColumns}),Ce,(Y,A,H)=>{var R=Vn();R.__pointerdown=_e=>{i(_e,x,H)},Ve(R,"data-row",x),Ve(R,"data-col",H),R.__keydown=ae,E(R,"transition","background-color .5s, border-radius .5s"),E(R,"text-align","center");var ee=P(R);oe(ee,()=>f(I.v[x][H])&&!We.v,_e=>{var K=Jn();nn(3,K,()=>zn,()=>({duration:300})),C(_e,K)}),D(R),J(()=>{E(R,"border-left",we.v===0?"0":`solid ${H%5===0&&H!==0&&we.v===2?`4px ${O.v[1]}`:`2px ${Ue.v}`}`),E(R,"border-top",we.v===0?"0":`solid ${x%5===0&&x!==0&&we.v===2?`4px ${O.v[1]}`:`2px ${Ue.v}`}`),E(R,"border-radius",Be.v===!0?"20%":"0"),E(R,"background-color",O.v[I.v[x][H].colorIndex]),E(R,"font-size",z.v/1.5+"px"),E(R,"min-width",z.v+"px"),E(R,"height",z.v+"px"),E(R,"color",O.v[1])}),te("pointerenter",R,()=>{_(x,H)}),te("focus",R,()=>{N(x,H)}),C(Y,R)}),D(M),C(u,M)}),D(Qe),D(ye),C(e,ye),j()}ue(["pointerdown","keydown"]);var jn=X('<div class="flex"><button class="flex-1">Undo</button> <button class="flex-1">Redo</button></div>');function eo(e,t){Q(t,!0);const r=()=>{B.v.row!==-1&&Bt(),B.reset()},n=l=>{l.key==="z"?v():l.key==="y"&&s()},o=()=>{I.v=mt(He.v[xe.v]),ur()},v=()=>{xe.v!==0&&(xe.v-=1,o())},s=()=>{xe.v!==He.v.length-1&&(xe.v+=1,o())};var f=jn();te("keydown",fe,n),te("pointerup",fe,r);var d=P(f);d.__click=v;var a=L(d,2);a.__click=s,D(f),C(e,f),j()}ue(["click"]);var Le=V(()=>Ze),De=V(()=>qe),Oe=V(()=>Te),to=X('<button class="flex aspect-square h-8 flex-1 items-center justify-center p-0"></button>'),ro=X('<button class="flex aspect-square h-8 flex-1 items-center justify-center p-0">X</button>'),no=X('<div class="flex flex-wrap"><!> <!> <button class="flex aspect-square h-8 flex-1 items-center justify-center p-0" aria-label="Move"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21v-9m0 9l3-3m-3 3l-3-3m3-6V3m0 9H3m9 0h9m-9-9L9 6m3-3l3 3M3 12l3 3m-3-3l3-3m15 3l-3-3m3 3l-3 3"></path></svg></button></div>');function oo(e,t){Q(t,!1);const r=l=>{/[1-9]/.test(l.key)&&Number(l.key)<=O.v.length?n(Number(l.key)-1):l.key==="m"?v():l.key==="x"&&Z.v&&o()},n=l=>{Oe(Oe().v=!1),Le(Le().v=!1),De(De().v=l)},o=()=>{Oe(Oe().v=!0),Le(Le().v=!1),De(De().v=-1)},v=()=>{Oe(Oe().v=!1),Le(Le().v=!0),De(De().v=-1)};de();var s=no();te("keydown",fe,r);var f=P(s);Se(f,1,()=>O.v,Ce,(l,p,i)=>{var h=to();h.__click=()=>{n(i)},h.textContent=i+1,J(()=>{E(h,"border",`solid 2px ${i===De().v?i===0?O.v[1]:O.v[0]:O.v[i]}`),E(h,"color",i===0?O.v[1]:O.v[0]),E(h,"background-color",O.v[i])}),C(l,h)});var d=L(f,2);oe(d,()=>Z.v,l=>{var p=ro();p.__click=o,J(()=>E(p,"border",`solid 2px ${Oe().v?O.v[1]:"ButtonFace"}`)),C(l,p)});var a=L(d,2);a.__click=v,D(s),J(()=>E(a,"border",`solid 2px ${Le().v?O.v[1]:"ButtonFace"}`)),C(e,s),j()}ue(["click"]);var At=V(()=>Ft),so=X('<footer class="flex justify-center"><div><button>Options</button> <div><!> <!></div></div></footer>');function ao(e,t){Q(t,!1),de();var r=so(),n=P(r);E(n,"border-top-right-radius","8px"),E(n,"border-top-left-radius","8px"),E(n,"overflow","hidden"),E(n,"display","flex");var o=P(n);o.__click=()=>{At(At().v=!At().v)};var v=L(o,2),s=P(v);oo(s,{});var f=L(s,2);eo(f,{}),D(v),D(n),D(r),C(e,r),j()}ue(["click"]);var io=X('<div class="absolute -left-4 -top-4 scale-[40%]" id="dynamic-svg"><a href="https://github.com/Tree52/Shareogram" aria-label="Link to GitHub repository"><svg height="96" width="98" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" fill-rule="evenodd"></path></svg></a></div>');function lo(e){var t=io();C(e,t)}var er=V(()=>ce),Xt=V(()=>Z),co=X("<span> </span>"),vo=X('<button class="rounded-b-lg">Start Game</button>'),fo=X('<header class="flex items-center justify-center"><!> <!></header>');function uo(e,t){Q(t,!1),de();var r=fo(),n=P(r);lo(n);var o=L(n,2);oe(o,()=>Xt().v,v=>{var s=co();E(s,"padding-top","10px");var f=P(s,!0);D(s),J(()=>Nt(f,We.v?"You win!":"Keep trying")),C(v,s)},v=>{var s=vo();s.__click=()=>{Xt(Xt().v=!0),er(er().v=I.v),vt()},C(v,s)}),D(r),C(e,r),j()}ue(["click"]);const ho=e=>{let t=!1,r,n,o,v;const s=a=>{(a.button===1||a.button===0&&Ze.v)&&(a.preventDefault(),t=!0,r=a.pageX-e.offsetLeft,n=a.pageY-e.offsetTop,o=e.scrollLeft,v=e.scrollTop,e.style.cursor="grabbing",document.addEventListener("mousemove",f),document.addEventListener("mouseup",d))},f=a=>{if(!t)return;a.preventDefault();const l=a.pageX-e.offsetLeft,p=a.pageY-e.offsetTop,i=(l-r)*2,h=(p-n)*2;e.scrollLeft=o-i,e.scrollTop=v-h},d=()=>{t=!1,e.style.cursor="",document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",d)};return e.addEventListener("mousedown",s),{destroy:()=>{e.removeEventListener("mousedown",s),e.style.cursor=""}}};var po=X('<li class="absolute -bottom-[200px] block aspect-square rounded-[10%] bg-white/20 svelte-qqc5lb"></li>'),_o=X('<ul class="absolute inset-0 -z-10 m-0 overflow-hidden p-0 svelte-qqc5lb"></ul> <!>  <main class="m-3 flex flex-1 overflow-auto svelte-qqc5lb"><!></main> <!> <!>',1);function ko(e,t){Q(t,!0);let r=ne(!1);const n=c=>{const _=c.match(/(\d+|[a-zX]+)/g),g=[],w=[];if(_)for(let T=0;T<_.length;(T+=1)-1){const $=_[T];isNaN(Number($))?w.push($):g.push(Number($))}if(g.length!==w.length)throw new Error("Error: different number of counts and letters.");return{letters:w,numbers:g}},o=c=>{const _=n(c),g=[];let w=0,T=0;for(let $=0;$<Me.v;($+=1)-1)g[$]=[];for(let $=0;$<_.numbers.length;($+=1)-1)for(let k=0;k<_.numbers[$];(k+=1)-1)_.letters[$]==="X"?g[w][(T+=1)-1]={colorIndex:0,Xed:!0}:g[w][(T+=1)-1]={colorIndex:Ot(_.letters[$]),Xed:!1},T>Xe.v-1&&(w+=1,T=0);return g},v=c=>(c.preventDefault(),c.returnValue="",""),s=()=>{const c=window.location.hash;if(c){try{const _=c.slice(1).split("-");Z.v=!!Number(_[0]),Xe.v=Number(_[1]),Me.v=Number(_[2]),Ue.v="#"+_[3];const g=Z.v?_.slice(4,-2):_.slice(4,-1);for(let w=0;w<g.length;(w+=1)-1)O.v[w]="#"+g[w];I.v=o(_[Z.v?_.length-2:_.length-1]),He.v[0]=mt(I.v),Z.v&&(ce.v=o(_[_.length-1]))}catch{alert("Couldn't load the code from the URL. Make sure you copied the link correctly.")}nt.v=!0}W(r,!0)};Ge(()=>{for(;!b(r);)s()}),Ge(()=>{if(nt.v){const c=[Number(Z.v),Xe.v,Me.v,Ue.v.slice(1)];for(let _=0;_<O.v.length;(_+=1)-1)c.push(O.v[_].slice(1));c.push(I.encoded),Z.v&&c.push(ce.encoded),window.location.hash=c.join("-")}}),Ge(()=>{document.body.style.color=O.v[0];const c=document.querySelector("#dynamic-svg path");c==null||c.setAttribute("fill",O.v[0])});var f=_o();Ur(c=>{Rt.title="Shareogram"}),te("contextmenu",fe,c=>c.preventDefault()),te("load",fe,s),te("beforeunload",fe,c=>{v(c)});var d=Je(f);Se(d,20,()=>({length:35}),Ce,(c,_)=>{var g=po();const w=F(()=>ft(0,60)+"s");J(()=>E(g,"animation-delay",b(w)));const T=F(()=>ft(5,200)+"px");J(()=>E(g,"width",b(T)));const $=F(()=>ft(0,100)+"%");J(()=>E(g,"left",b($))),C(c,g)}),D(d);var a=L(d,2);uo(a,{});var l=L(a,2);l.__click=()=>{Ft.v=!1};var p=P(l);Qn(p,{}),D(l),vr(l,c=>ho(c));var i=L(l,2);ao(i,{});var h=L(i,2);Pn(h,{}),J(()=>{E(d,"background-color",Ue.v),E(l,"touch-action",Ze.v?"auto":"none")}),C(e,f),j()}ue(["click"]);export{ko as component,yo as universal};

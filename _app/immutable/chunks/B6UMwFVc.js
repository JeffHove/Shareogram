import{C as N,B as X,o as y}from"./Dd6hhvDe.js";import{i as T,t as j,b as i,e as g,a as h,d as A,f as p,g as l,h as v,c as E}from"./DyUHs0DP.js";import{p as B}from"./CAAGZOkF.js";const J=[];function C(t,e=!1){return u(t,new Map,"",J)}function u(t,e,s,n,o=null){if(typeof t=="object"&&t!==null){var c=e.get(t);if(c!==void 0)return c;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(N(t)){var r=Array(t.length);e.set(t,r),o!==null&&e.set(o,r);for(var f=0;f<t.length;f+=1){var a=t[f];f in t&&(r[f]=u(a,e,s,n))}return r}if(X(t)===y){r={},e.set(t,r),o!==null&&e.set(o,r);for(var d in t)r[d]=u(t[d],e,s,n);return r}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function")return u(t.toJSON(),e,s,n,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}const V=3,Y=.5,Z=t=>t.colorIndex!==0,$=()=>{T.v=!1,i.v=j.v,_()},O=()=>{T.v=!0,j.v=C(i.v),M(),_()},M=()=>{if(g.v<1||h.v<1)return;const t=[[]];for(let e=0;e<h.v;e++){t[e]=[];for(let s=0;s<g.v;s++)t[e][s]={colorIndex:0,Xed:!1}}i.v=t,A.v=!1,p.v=0},tt=()=>{for(let t=0;t<i.numRows;t++)for(let e=0;e<i.numColumns;e++)i.v[t][e].colorIndex>E.v.length-1&&(i.v[t][e].colorIndex=0)},k=()=>{v.v!==l.v.length-1&&l.v.splice(v.v+1),v.v++,l.v.push(C(i.v))},_=()=>{l.reset(),l.v[0]=C(i.v),v.reset()},et=()=>{if(g.v<1||h.v<1)return;const t=i.v,e=[[]];for(let s=0;s<h.v;s++){e[s]=[];for(let n=0;n<g.v;n++)t&&t[s]&&t[s][n]?e[s][n]={...t[s][n]}:e[s][n]={colorIndex:0,Xed:!1}}i.v=e,k(),A.v=!1,p.v=0},b=t=>{const e=parseInt(t.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]},q=(t,e,s)=>{const[n,o,c]=t,[r,f,a]=e;return Math.sqrt((n-r)**2+(o-f)**2+(c-a)**2)<=s},z=(t,e,s)=>"#"+[t,e,s].map(n=>Math.round(n).toString(16).padStart(2,"0")).join(""),F=(t,e,s)=>{const n=b(t);for(let o=0;o<e.length;o++){const c=b(e[o]);if(q(n,c,s))return o}return e.push(t),e.length-1},P=(t,e)=>{g.v=t[0].length,h.v=t.length,E.v=e,p.v=0,M();for(let s=0;s<i.numRows;s++)for(let n=0;n<i.numColumns;n++)i.v[s][n].colorIndex=t[s][n];B.route.id==="/daily"&&O()},st=(t,e)=>{const s=new FileReader;s.onload=n=>{var c;const o=new Image;o.onload=()=>{const r=document.createElement("canvas"),f=r.getContext("2d");if(f){r.width=o.width,r.height=o.height,f.drawImage(o,0,0);const a=f.getImageData(0,0,o.width,o.height).data,d=["#ffffff"],w=[];for(let x=0;x<o.height;x++){const S=[];for(let I=0;I<o.width;I++){const m=(x*o.width+I)*4,H=a[m],R=a[m+1],D=a[m+2],G=a[m+3]<1?"#ffffff":z(H,R,D),L=F(G,d,e);S.push(L)}w.push(S)}P(w,d)}},o.src=(c=n.target)==null?void 0:c.result},s.readAsDataURL(t)};export{V as M,k as a,Y as b,tt as c,C as d,O as e,b as h,Z as i,st as l,M as n,et as r,$ as s};

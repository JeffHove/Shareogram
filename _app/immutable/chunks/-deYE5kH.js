import{x as te,w as Ie,o as xe,I as pe,b as ge,af as se,e as O,h as R,M as Te,a as we,n as p,ad as Ee,H as Ce,d as K,f as W,j as b,a5 as Se,g as re,i as oe,p as Ae,ag as q,a9 as ie,a1 as He,u as Q,ah as z,ai as Z,aj as J,ak as Re,l as j,al as Me,am as be,a8 as ye,an as Xe,ac as Ne,ao as De,L as ke,ap as Le,q as ee,G as C}from"./DQukIa9v.js";import{p as G}from"./BBRC-sar.js";const Oe=[];function ae(e,n=!1){return N(e,new Map,"",Oe)}function N(e,n,t,l,r=null){if(typeof e=="object"&&e!==null){var c=n.get(e);if(c!==void 0)return c;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(te(e)){var i=Array(e.length);n.set(e,i),r!==null&&n.set(r,i);for(var _=0;_<e.length;_+=1){var f=e[_];_ in e&&(i[_]=N(f,n,t,l))}return i}if(Ie(e)===xe){i={},n.set(e,i),r!==null&&n.set(r,i);for(var d in e)i[d]=N(e[d],n,t,l);return i}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return N(e.toJSON(),n,t,l,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function Ke(e,n){return n}function We(e,n,t,l){for(var r=[],c=n.length,i=0;i<c;i++)be(n[i].e,r,!0);var _=c>0&&r.length===0&&t!==null;if(_){var f=t.parentNode;ye(f),f.append(t),l.clear(),H(e,n[0].prev,n[c-1].next)}Xe(r,()=>{for(var d=0;d<c;d++){var m=n[d];_||(l.delete(m.k),H(e,m.prev,m.next)),Ne(m.e,!_)}})}function Qe(e,n,t,l,r,c=null){var i=e,_={items:new Map,first:null},f=(n&se)!==0;if(f){var d=e;i=R?O(Te(d)):d.appendChild(pe())}R&&we();var m=null,v=!1,o=Ee(()=>{var a=t();return te(a)?a:a==null?[]:ie(a)});ge(()=>{var a=p(o),s=a.length;if(v&&s===0)return;v=s===0;let g=!1;if(R){var I=i.data===Ce;I!==(s===0)&&(i=K(),O(i),W(!1),g=!0)}if(R){for(var w=null,E,T=0;T<s;T++){if(b.nodeType===8&&b.data===Se){i=b,g=!0,W(!1);break}var u=a[T],h=l(u,T);E=le(b,_,w,null,u,h,T,r,n,t),_.items.set(h,E),w=E}s>0&&O(K())}R||qe(a,_,i,r,n,l,t),c!==null&&(s===0?m?re(m):m=oe(()=>c(i)):m!==null&&Ae(m,()=>{m=null})),g&&W(!0),p(o)}),R&&(i=b)}function qe(e,n,t,l,r,c,i){var V,Y,$,F;var _=(r&Me)!==0,f=(r&(z|J))!==0,d=e.length,m=n.items,v=n.first,o=v,a,s=null,g,I=[],w=[],E,T,u,h;if(_)for(h=0;h<d;h+=1)E=e[h],T=c(E,h),u=m.get(T),u!==void 0&&((V=u.a)==null||V.measure(),(g??(g=new Set)).add(u));for(h=0;h<d;h+=1){if(E=e[h],T=c(E,h),u=m.get(T),u===void 0){var me=o?o.e.nodes_start:t;s=le(me,n,s,s===null?n.first:s.next,E,T,h,l,r,i),m.set(T,s),I=[],w=[],o=s.next;continue}if(f&&Ge(u,E,h,r),u.e.f&q&&(re(u.e),_&&((Y=u.a)==null||Y.unfix(),(g??(g=new Set)).delete(u))),u!==o){if(a!==void 0&&a.has(u)){if(I.length<w.length){var X=w[0],A;s=X.prev;var P=I[0],k=I[I.length-1];for(A=0;A<I.length;A+=1)ne(I[A],X,t);for(A=0;A<w.length;A+=1)a.delete(w[A]);H(n,P.prev,k.next),H(n,s,P),H(n,k,X),o=X,s=k,h-=1,I=[],w=[]}else a.delete(u),ne(u,o,t),H(n,u.prev,u.next),H(n,u,s===null?n.first:s.next),H(n,s,u),s=u;continue}for(I=[],w=[];o!==null&&o.k!==T;)o.e.f&q||(a??(a=new Set)).add(o),w.push(o),o=o.next;if(o===null)continue;u=o}I.push(u),s=u,o=u.next}if(o!==null||a!==void 0){for(var M=a===void 0?[]:ie(a);o!==null;)o.e.f&q||M.push(o),o=o.next;var L=M.length;if(L>0){var _e=r&se&&d===0?t:null;if(_){for(h=0;h<L;h+=1)($=M[h].a)==null||$.measure();for(h=0;h<L;h+=1)(F=M[h].a)==null||F.fix()}We(n,M,_e,m)}}_&&He(()=>{var U;if(g!==void 0)for(u of g)(U=u.a)==null||U.apply()}),Q.first=n.first&&n.first.e,Q.last=s&&s.e}function Ge(e,n,t,l){l&z&&Z(e.v,n),l&J?Z(e.i,t):e.i=t}function le(e,n,t,l,r,c,i,_,f,d){var m=(f&z)!==0,v=(f&De)===0,o=m?v?Re(r):j(r):r,a=f&J?j(i):i,s={i:a,v:o,k:c,a:null,e:null,prev:t,next:l};try{return s.e=oe(()=>_(e,o,a,d),R),s.e.prev=t&&t.e,s.e.next=l&&l.e,t===null?n.first=s:(t.next=s,t.e.next=s.e),l!==null&&(l.prev=s,l.e.prev=s.e),s}finally{}}function ne(e,n,t){for(var l=e.next?e.next.e.nodes_start:t,r=n?n.e.nodes_start:t,c=e.e.nodes_start;c!==l;){var i=ke(c);r.before(c),c=i}}function H(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}function Ze(e,n,t,l){var r=e.__styles??(e.__styles={});r[n]!==t&&(r[n]=t,t==null?e.style.removeProperty(n):e.style.setProperty(n,t,""))}const je=(e,n)=>Math.floor(Math.random()*(n-e+1)+e),en=3,nn=.5,tn=e=>e.colorIndex!==0,fe=()=>{const e=[[]];for(let n=0;n<de.v;n++){e[n]=[];for(let t=0;t<ue.v;t++)e[n][t]={colorIndex:0,Xed:!1}}return e},sn=()=>{for(let e=0;e<S.numRows;e++)for(let n=0;n<S.numColumns;n++)S.v[e][n].colorIndex>Je.v.length-1&&(S.v[e][n].colorIndex=0)},Be=()=>{D.v!==y.v.length-1&&y.v.splice(D.v+1),D.v++,y.v.push(ae(S.v))},ze=()=>{y.reset(),y.v[0]=ae(S.v),D.reset()},rn=()=>{ue.v<1||de.v<1||(S.v=fe(),Pe.v?ze():Be(),Ve.v=!1)},on=e=>{const n=parseInt(e.replace("#",""),16);return[n>>16&255,n>>8&255,n&255]},x=e=>{let n=Le(G(e));return{set v(l){ee(n,G(l))},get v(){return p(n)},reset:()=>ee(n,G(e))}},ce=()=>{const e=x(ve),n=C(()=>e.v.length),t=C(()=>e.v[0].length),l=C(()=>e.v.map(f=>f.map(d=>d.colorIndex))),r=C(()=>{const f=[[]],d=e.v.length,m=e.v[0].length;for(let v=0;v<d;v++){f[v]=[];const o=e.v[v][0],a={colorIndex:o.Xed?-1:o.colorIndex,count:1};for(let s=1;s<m;s++){const g=e.v[v][s-1],I=e.v[v][s];g.colorIndex===I.colorIndex&&g.Xed===I.Xed?a.count++:(f[v].push({...a}),a.colorIndex=I.Xed?-1:I.colorIndex,a.count=1)}f[v].push({...a})}return f}),c=C(()=>p(r).map(f=>f.filter(d=>d.colorIndex!==0&&d.colorIndex!==-1))),i=C(()=>{const f=[[]],d=e.v.length,m=e.v[0].length;for(let v=0;v<m;v++){f[v]=[];const o=e.v[0][v],a={colorIndex:o.Xed?-1:o.colorIndex,count:1};for(let s=1;s<d;s++){const g=e.v[s-1][v],I=e.v[s][v];g.colorIndex===I.colorIndex&&g.Xed===I.Xed?a.count++:(f[v].push({...a}),a.colorIndex=I.Xed?-1:I.colorIndex,a.count=1)}f[v].push({...a})}return f}),_=C(()=>p(i).map(f=>f.filter(d=>d.colorIndex!==0&&d.colorIndex!==-1)));return{get columnEncodes(){return p(i)},get colorIndices(){return p(l)},get columnHints(){return p(_)},get rowEncodes(){return p(r)},get numColumns(){return p(t)},get rowHints(){return p(c)},set v(f){e.v=f},get numRows(){return p(n)},get v(){return e.v},reset:e.reset}},an=x("#476fb8"),Je=x(["#f8fafc","#020617"]),ln=x(1),ue=x(5),de=x(5),ve=fe(),S=ce(),B=ce(),y=x([ve]),D=x(0),Pe=x(!1),fn=x({colorIndex:-1,column:-1,Xed:!1,row:-1}),cn=x(1),un=x(!1),Ve=x(!1),dn=x(!1),vn=x(!1),hn=x(!1),mn=x(!1),he=C(()=>{const e=[];let n=!0;const t=S.numRows,l=S.numColumns;for(let r=0;r<t;r++)for(let c=0;c<l;c++)B.v[r]&&B.v[r][c]&&B.v[r][c].colorIndex!==S.v[r][c].colorIndex&&(e.push({column:c,row:r}),n=!1);return{differentTiles:e,isWin:n}}),Ye=C(()=>p(he).differentTiles),$e=C(()=>p(he).isWin),_n=()=>p(Ye),In=()=>p($e);export{fn as A,vn as B,Ve as C,tn as D,D as E,y as F,ae as G,en as M,Pe as a,an as b,S as c,ue as d,Qe as e,de as f,je as g,on as h,Ke as i,Je as j,ln as k,fe as l,Be as m,rn as n,sn as o,In as p,_n as q,ze as r,Ze as s,B as t,hn as u,mn as v,nn as w,cn as x,un as y,dn as z};

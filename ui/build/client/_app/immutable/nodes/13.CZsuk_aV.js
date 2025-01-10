import{s as lt,r as ut}from"../chunks/scheduler.gYkXA_jx.js";import{S as ot,i as ft,c as T,s as E,d as B,g as I,m as U,j as p,o as A,t as F,f as n,p as W,e as d,a as $,b as w,h as m,k as C,q as G,r as q,u as J,v as nt,w as it}from"../chunks/index.Da-vJZNO.js";/* empty css                                                    */import{a as ct,F as pt,B as mt}from"../chunks/FormElm.BtQgP28A.js";import{t as R}from"../chunks/SvelteToast.svelte_svelte_type_style_lang.DHR7y2lI.js";import{g as dt}from"../chunks/entry.C-LT8vz1.js";import{I as at}from"../chunks/Logo.CIz8777T.js";import{H as $t}from"../chunks/HdgWithIcon.BBIycJZe.js";import{P as vt}from"../chunks/PageWrapper.BDCPbkV0.js";import{A as _t}from"../chunks/config.CzsQEk9Y.js";import{N as ht}from"../chunks/Nav.BVaf7xvy.js";function gt(l,e,s){let a=[];return l.length<e&&a.push(`The string length must be at least ${e} characters.`),l.length>s&&a.push(`The string length must be at most ${s} characters.`),a.length>0?{status:"error",errors:a}:{status:"ok"}}function wt(l){const e=[];/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)||e.push("Email address is invalid"),l.indexOf("@")===-1&&e.push("Email address must contain @ symbol");const a=l.split("@")[1];return a||e.push("Email address must contain domain name"),/^[^\s@]+\.[^\s@]+$/.test(a)||e.push("Domain name is invalid"),e.length>0?{status:"error",errors:e}:{status:"ok"}}async function Et(l,e,s){debugger;if(e!==s){R.push("Passwords does not match");return}if(wt(l).status!=="ok"){R.push("Not a valid email");return}if(gt(e,6,30).status!=="ok"){R.push("Not a valid password");return}debugger;const r=await ct(`${_t}/signup`,{email:l,password:e});if(r.ok)R.push("Your account has been created"),dt("/");else{const f=await r.json();R.push(f.message)}}function It(l){let e;return{c(){e=nt("Students  Signup")},l(s){e=it(s,"Students  Signup")},m(s,a){p(s,e,a)},d(s){s&&n(e)}}}function xt(l){let e;return{c(){e=nt("Signup")},l(s){e=it(s,"Signup")},m(s,a){p(s,e,a)},d(s){s&&n(e)}}}function bt(l){let e,s,a,i,r="Email",f,v,o,c,_,x,M="Password",H,D,P,h,Y,b,Q="Confirm Password",K,V,S,g,L,j,y,O,z,X;return s=new $t({props:{icon:at.KEY,$$slots:{default:[It]},$$scope:{ctx:l}}}),y=new mt({props:{icons:at.SAVE,clk:l[6],$$slots:{default:[xt]},$$scope:{ctx:l}}}),{c(){e=d("div"),T(s.$$.fragment),a=E(),i=d("div"),i.textContent=r,f=E(),v=d("div"),o=d("div"),c=d("input"),_=E(),x=d("div"),x.textContent=M,H=E(),D=d("div"),P=d("div"),h=d("input"),Y=E(),b=d("div"),b.textContent=Q,K=E(),V=d("div"),S=d("div"),g=d("input"),L=E(),j=d("div"),T(y.$$.fragment),this.h()},l(t){e=$(t,"DIV",{class:!0});var u=w(e);B(s.$$.fragment,u),u.forEach(n),a=I(t),i=$(t,"DIV",{class:!0,"data-svelte-h":!0}),G(i)!=="svelte-klynmt"&&(i.textContent=r),f=I(t),v=$(t,"DIV",{class:!0});var N=w(v);o=$(N,"DIV",{class:!0});var k=w(o);c=$(k,"INPUT",{type:!0,class:!0,autocomplete:!0}),k.forEach(n),N.forEach(n),_=I(t),x=$(t,"DIV",{class:!0,"data-svelte-h":!0}),G(x)!=="svelte-1by2qsq"&&(x.textContent=M),H=I(t),D=$(t,"DIV",{class:!0});var Z=w(D);P=$(Z,"DIV",{class:!0});var tt=w(P);h=$(tt,"INPUT",{type:!0,class:!0}),tt.forEach(n),Z.forEach(n),Y=I(t),b=$(t,"DIV",{class:!0,"data-svelte-h":!0}),G(b)!=="svelte-19k40nm"&&(b.textContent=Q),K=I(t),V=$(t,"DIV",{class:!0});var et=w(V);S=$(et,"DIV",{class:!0});var st=w(S);g=$(st,"INPUT",{type:!0,class:!0}),st.forEach(n),et.forEach(n),L=I(t),j=$(t,"DIV",{class:!0});var rt=w(j);B(y.$$.fragment,rt),rt.forEach(n),this.h()},h(){m(e,"class","flex justify-center"),m(i,"class","flex justify-center pt-1 text-white"),m(c,"type","text"),m(c,"class","w-full bg-gray-700 color-white p-2 m-1 rounded-md"),m(c,"autocomplete","email"),c.required=!0,m(o,"class","w-6/12 text-center"),m(v,"class","flex justify-center pt-1"),m(x,"class","flex justify-center pt-1 text-white"),m(h,"type","password"),m(h,"class","w-full bg-gray-700 color-white p-2 m-1 rounded-md"),h.required=!0,m(P,"class","w-6/12 text-center"),m(D,"class","flex justify-center pt-1"),m(b,"class","flex justify-center pt-1 text-white"),m(g,"type","password"),m(g,"class","w-full bg-gray-700 color-white p-2 m-1 rounded-md"),g.required=!0,m(S,"class","w-6/12 text-center"),m(V,"class","flex justify-center pt-1"),m(j,"class","flex justify-center ")},m(t,u){p(t,e,u),U(s,e,null),p(t,a,u),p(t,i,u),p(t,f,u),p(t,v,u),C(v,o),C(o,c),q(c,l[0]),p(t,_,u),p(t,x,u),p(t,H,u),p(t,D,u),C(D,P),C(P,h),q(h,l[1]),p(t,Y,u),p(t,b,u),p(t,K,u),p(t,V,u),C(V,S),C(S,g),q(g,l[2]),p(t,L,u),p(t,j,u),U(y,j,null),O=!0,z||(X=[J(c,"input",l[3]),J(h,"input",l[4]),J(g,"input",l[5])],z=!0)},p(t,u){const N={};u&128&&(N.$$scope={dirty:u,ctx:t}),s.$set(N),u&1&&c.value!==t[0]&&q(c,t[0]),u&2&&h.value!==t[1]&&q(h,t[1]),u&4&&g.value!==t[2]&&q(g,t[2]);const k={};u&7&&(k.clk=t[6]),u&128&&(k.$$scope={dirty:u,ctx:t}),y.$set(k)},i(t){O||(A(s.$$.fragment,t),A(y.$$.fragment,t),O=!0)},o(t){F(s.$$.fragment,t),F(y.$$.fragment,t),O=!1},d(t){t&&(n(e),n(a),n(i),n(f),n(v),n(_),n(x),n(H),n(D),n(Y),n(b),n(K),n(V),n(L),n(j)),W(s),W(y),z=!1,ut(X)}}}function yt(l){let e,s,a,i,r,f,v;return f=new pt({props:{$$slots:{default:[bt]},$$scope:{ctx:l}}}),{c(){e=d("br"),s=d("br"),a=E(),i=d("div"),r=d("div"),T(f.$$.fragment),this.h()},l(o){e=$(o,"BR",{}),s=$(o,"BR",{}),a=I(o),i=$(o,"DIV",{class:!0});var c=w(i);r=$(c,"DIV",{class:!0});var _=w(r);B(f.$$.fragment,_),_.forEach(n),c.forEach(n),this.h()},h(){m(r,"class","w-10/12 "),m(i,"class","flex justify-center w-full")},m(o,c){p(o,e,c),p(o,s,c),p(o,a,c),p(o,i,c),C(i,r),U(f,r,null),v=!0},p(o,c){const _={};c&135&&(_.$$scope={dirty:c,ctx:o}),f.$set(_)},i(o){v||(A(f.$$.fragment,o),v=!0)},o(o){F(f.$$.fragment,o),v=!1},d(o){o&&(n(e),n(s),n(a),n(i)),W(f)}}}function Dt(l){let e,s,a,i;return e=new ht({}),a=new vt({props:{$$slots:{default:[yt]},$$scope:{ctx:l}}}),{c(){T(e.$$.fragment),s=E(),T(a.$$.fragment)},l(r){B(e.$$.fragment,r),s=I(r),B(a.$$.fragment,r)},m(r,f){U(e,r,f),p(r,s,f),U(a,r,f),i=!0},p(r,[f]){const v={};f&135&&(v.$$scope={dirty:f,ctx:r}),a.$set(v)},i(r){i||(A(e.$$.fragment,r),A(a.$$.fragment,r),i=!0)},o(r){F(e.$$.fragment,r),F(a.$$.fragment,r),i=!1},d(r){r&&n(s),W(e,r),W(a,r)}}}function Vt(l,e,s){let a="",i="",r="";function f(){a=this.value,s(0,a)}function v(){i=this.value,s(1,i)}function o(){r=this.value,s(2,r)}return[a,i,r,f,v,o,()=>Et(a,i,r)]}class At extends ot{constructor(e){super(),ft(this,e,Vt,Dt,lt,{})}}export{At as component};

import{S as Se,i as We,s as je,k as j,a as X,q as D,e as te,J as Ge,l as G,h as g,c as C,m as T,r as H,n as d,F as N,G as w,b as O,O as $,U as ve,B as K,V as q,Q as Te,R as Oe,p as x,P as ke,u as ye,W as ae}from"../../../chunks/index-17adf793.js";import{c as z}from"../../../chunks/singletons-5e04b6fe.js";const Pe=(a,e={})=>{ie(e);let{colors:n=["#FFC700","#FF0000","#2E3191","#41BBC7"],duration:l=3500,force:s=.5,particleCount:r=150,particleShape:o="mix",particleSize:t=12,destroyAfterDone:c=!0,stageHeight:E=800,stageWidth:v=1600}=e;(function(i){const b=Q("style");b.dataset.neoconfetti="",b.textContent='@keyframes fk9XWG_y-axis{to{transform:translate3d(0,var(--stage-height),0)}}@keyframes fk9XWG_x-axis{to{transform:translate3d(var(--x-landing-point),0,0)}}@keyframes fk9XWG_rotation{50%{transform:rotate3d(var(--half-rotation),180deg)}to{transform:rotate3d(var(--rotation),360deg)}}.fk9XWG_container{width:0;height:0;z-index:1200;position:relative;overflow:visible}.fk9XWG_particle{animation:x-axis var(--duration-chaos)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:fk9XWG_x-axis}.fk9XWG_particle>div{animation:y-axis var(--duration-chaos)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--width);height:var(--height);animation-name:fk9XWG_y-axis;position:absolute;top:0;left:0}.fk9XWG_particle>div:before{height:100%;width:100%;content:"";background-color:var(--bgcolor);animation:rotation var(--rotation-duration)infinite linear;border-radius:var(--border-radius);animation-name:fk9XWG_rotation;display:block}',Y(document.head,b)})(),a.classList.add("fk9XWG_container"),a.style.setProperty("--stage-height",E+"px");let k,h=oe(r,n),_=se(a,h);function m(i,b){const W=U(P()*(He-1)),p=o!=="rectangles"&&(o==="circles"||ze(W)),f=(A,S)=>i.style.setProperty(A,S+"");f("--x-landing-point",J(V(ne(b,90)-180),0,180,-v/2,v/2)+"px"),f("--duration-chaos",l-U(1e3*P())+"ms");const u=P()<Xe?B(P()*Ce,2):0;f("--x1",u),f("--x2",-1*u),f("--x3",u),f("--x4",B(V(J(V(ne(b,90)-180),0,180,-1,1)),4)),f("--y1",B(P()*le,4)),f("--y2",B(P()*s*(we()?1:-1),4)),f("--y3",le),f("--y4",B(De(J(V(b-180),0,180,s,-s),0),4)),f("--width",(p?t:U(4*P())+t/2)+"px"),f("--height",(p?t:U(2*P())+t)+"px");const y=W.toString(2).padStart(3,"0").split("");f("--half-rotation",y.map(A=>+A/2+"")),f("--rotation",y),f("--rotation-duration",B(P()*(Ne-re)+re)+"ms"),f("--border-radius",p?"50%":0)}for(const[i,b]of Object.entries(_))m(b,h[+i].degree);return Promise.resolve().then(()=>k=setTimeout(()=>c&&(a.innerHTML=""),l)),{update(i){var f,u,y,A,S,M,L,I,ee;ie(i);const b=(f=i.particleCount)!=null?f:r,W=(u=i.colors)!=null?u:n,p=(y=i.stageHeight)!=null?y:E;if(h=oe(b,W),b===r&&JSON.stringify(n)!==JSON.stringify(W))for(const[Ee,{color:Ae}]of Object.entries(h))_[+Ee].style.setProperty("--bgcolor",Ae);b!==r&&(a.innerHTML="",_=se(a,h)),c&&!i.destroyAfterDone&&clearTimeout(k),a.style.setProperty("--stage-height",p+"px"),n=W,l=(A=i.duration)!=null?A:l,s=(S=i.force)!=null?S:s,r=b,o=(M=i.particleShape)!=null?M:o,t=(L=i.particleSize)!=null?L:t,c=(I=i.destroyAfterDone)!=null?I:c,E=p,v=(ee=i.stageWidth)!=null?ee:v},destroy(){clearTimeout(k)}}};function se(a,e=[]){const n=[];for(const{color:l}of e){const s=Q("div");s.className="fk9XWG_particle",s.style.setProperty("--bgcolor",l);const r=Q("div");Y(s,r),Y(a,s),n.push(s)}return n}const re=200,Ne=800,Xe=.1,Ce=.3,le=.5,V=Math.abs,P=Math.random,U=Math.round,De=Math.max,Q=a=>document.createElement(a),Y=(a,e)=>a.appendChild(e),oe=(a,e)=>Array.from({length:a},(n,l)=>({color:e[l%e.length],degree:360*l/a})),B=(a,e=2)=>U((a+Number.EPSILON)*10**e)/10**e,J=(a,e,n,l,s)=>(a-e)*(s-l)/(n-e)+l,ne=(a,e)=>a+e>360?a+e-360:a+e,we=()=>P()>.5,He=6,ze=a=>a!==1&&we(),Z=a=>a===void 0,F=(a,e)=>{if(!Z(a)&&Number.isSafeInteger(a)&&a<0)throw new Error(e+" must be a positive integer")},ie=({particleCount:a,duration:e,colors:n,particleSize:l,force:s,stageHeight:r,stageWidth:o,particleShape:t})=>{if(F(a,"particleCount"),F(e,"duration"),F(l,"particleSize"),F(s,"force"),F(r,"stageHeight"),F(o,"stageWidth"),!Z(t)&&!/^(mix|circles|rectangles)$/i.test(t))throw new Error('particlesShape should be either "mix" or "circles" or "rectangle"');if(!Z(n)&&!Array.isArray(n))throw new Error("colors must be an array of strings");if(s>1)throw new Error("force must be within 0 and 1")};z.disable_scroll_handling;z.goto;z.invalidate;const Me=z.invalidateAll;z.prefetch;z.prefetch_routes;z.before_navigate;z.after_navigate;const Ie=z.apply_action;function Be(a,e=()=>{}){const n=async({action:s,result:r,reset:o})=>{r.type==="success"&&(o!==!1&&a.reset(),await Me()),(location.origin+location.pathname===s.origin+s.pathname||r.type==="redirect"||r.type==="error")&&Ie(r)};async function l(s){var _,m,i,b,W;s.preventDefault();const r=new URL((_=s.submitter)!=null&&_.hasAttribute("formaction")?s.submitter.formAction:a.action),o=new FormData(a),t=(m=s.submitter)==null?void 0:m.getAttribute("name");t&&o.append(t,(b=(i=s.submitter)==null?void 0:i.getAttribute("value"))!=null?b:"");const c=new AbortController;let E=!1;const k=(W=e({action:r,cancel:()=>E=!0,controller:c,data:o,form:a}))!=null?W:n;if(E)return;let h;try{h=await(await fetch(r,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:o,signal:c.signal})).json()}catch(p){if((p==null?void 0:p.name)==="AbortError")return;h={type:"error",error:p}}k({action:r,data:o,form:a,update:p=>n({action:r,result:h,reset:p==null?void 0:p.reset}),result:h,get type(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")},get location(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")},get error(){throw new Error("(result) => {...} has changed to ({ result }) => {...}")}})}return a.addEventListener("submit",l),{destroy(){a.removeEventListener("submit",l)}}}const{document:R,window:Fe}=Oe;function ce(a,e,n){const l=a.slice();return l[7]=e[n],l}function ue(a,e,n){const l=a.slice();return l[10]=e[n],l}function fe(a,e,n){const l=a.slice();l[13]=e[n],l[7]=n;const s=l[7]===l[3];return l[14]=s,l}function de(a,e,n){var r;const l=a.slice();l[13]=e[n],l[18]=n;const s=(r=l[0].answers[l[7]])==null?void 0:r[l[18]];return l[16]=s,l}function he(a){let e,n,l,s;return{c(){e=j("input"),this.h()},l(r){e=G(r,"INPUT",{name:!0,"aria-selected":!0,class:!0}),this.h()},h(){var r,o;d(e,"name","guess"),e.disabled=n=!a[14],e.readOnly=!0,d(e,"aria-selected",l=a[14]&&a[18]===a[0].guesses[a[7]].length),e.value=s=(o=(r=a[0].guesses[a[7]])==null?void 0:r[a[18]])!=null?o:"",d(e,"class","svelte-wk2j3k"),N(e,"exact",a[16]==="x"),N(e,"close",a[16]==="c")},m(r,o){O(r,e,o)},p(r,o){var t,c;o&8&&n!==(n=!r[14])&&(e.disabled=n),o&9&&l!==(l=r[14]&&r[18]===r[0].guesses[r[7]].length)&&d(e,"aria-selected",l),o&1&&s!==(s=(c=(t=r[0].guesses[r[7]])==null?void 0:t[r[18]])!=null?c:"")&&e.value!==s&&(e.value=s),o&1&&N(e,"exact",r[16]==="x"),o&1&&N(e,"close",r[16]==="c")},d(r){r&&g(e)}}}function _e(a){let e,n,l=Array(5),s=[];for(let r=0;r<l.length;r+=1)s[r]=he(de(a,l,r));return{c(){e=j("div");for(let r=0;r<s.length;r+=1)s[r].c();n=X(),this.h()},l(r){e=G(r,"DIV",{class:!0});var o=T(e);for(let t=0;t<s.length;t+=1)s[t].l(o);n=C(o),o.forEach(g),this.h()},h(){d(e,"class","row svelte-wk2j3k"),N(e,"current",a[14])},m(r,o){O(r,e,o);for(let t=0;t<s.length;t+=1)s[t].m(e,null);w(e,n)},p(r,o){if(o&9){l=Array(5);let t;for(t=0;t<l.length;t+=1){const c=de(r,l,t);s[t]?s[t].p(c,o):(s[t]=he(c),s[t].c(),s[t].m(e,n))}for(;t<s.length;t+=1)s[t].d(1);s.length=l.length}o&8&&N(e,"current",r[14])},d(r){r&&g(e),q(s,r)}}}function Le(a){let e,n,l,s,r,o,t,c,E,v,k=["qwertyuiop","asdfghjkl","zxcvbnm"],h=[];for(let _=0;_<3;_+=1)h[_]=pe(ce(a,k,_));return{c(){e=j("div"),n=j("button"),l=D("enter"),r=X(),o=j("button"),t=D("back"),c=X();for(let _=0;_<3;_+=1)h[_].c();this.h()},l(_){e=G(_,"DIV",{class:!0});var m=T(e);n=G(m,"BUTTON",{"data-key":!0,"aria-selected":!0,class:!0});var i=T(n);l=H(i,"enter"),i.forEach(g),r=C(m),o=G(m,"BUTTON",{"data-key":!0,formaction:!0,name:!0,class:!0});var b=T(o);t=H(b,"back"),b.forEach(g),c=C(m);for(let W=0;W<3;W+=1)h[W].l(m);m.forEach(g),this.h()},h(){d(n,"data-key","enter"),d(n,"aria-selected",a[5]),n.disabled=s=!a[5],d(n,"class","svelte-wk2j3k"),d(o,"data-key","backspace"),d(o,"formaction","?/update"),d(o,"name","key"),o.value="backspace",d(o,"class","svelte-wk2j3k"),d(e,"class","keyboard svelte-wk2j3k")},m(_,m){O(_,e,m),w(e,n),w(n,l),w(e,r),w(e,o),w(o,t),w(e,c);for(let i=0;i<3;i+=1)h[i].m(e,null);E||(v=$(o,"click",ke(a[6])),E=!0)},p(_,m){if(m&32&&d(n,"aria-selected",_[5]),m&32&&s!==(s=!_[5])&&(n.disabled=s),m&77){k=["qwertyuiop","asdfghjkl","zxcvbnm"];let i;for(i=0;i<3;i+=1){const b=ce(_,k,i);h[i]?h[i].p(b,m):(h[i]=pe(b),h[i].c(),h[i].m(e,null))}for(;i<3;i+=1)h[i].d(1)}},d(_){_&&g(e),q(h,_),E=!1,v()}}}function Ue(a){let e,n,l=a[4]?"you won :)":"game over :(",s,r,o=!a[4]&&a[0].answer&&ge(a);return{c(){o&&o.c(),e=X(),n=j("button"),s=D(l),r=D(" play again?"),this.h()},l(t){o&&o.l(t),e=C(t),n=G(t,"BUTTON",{"data-key":!0,"aria-selected":!0,class:!0,formaction:!0});var c=T(n);s=H(c,l),r=H(c," play again?"),c.forEach(g),this.h()},h(){d(n,"data-key","enter"),d(n,"aria-selected","true"),d(n,"class","restart svelte-wk2j3k"),d(n,"formaction","?/restart")},m(t,c){o&&o.m(t,c),O(t,e,c),O(t,n,c),w(n,s),w(n,r)},p(t,c){!t[4]&&t[0].answer?o?o.p(t,c):(o=ge(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),c&16&&l!==(l=t[4]?"you won :)":"game over :(")&&ye(s,l)},d(t){o&&o.d(t),t&&g(e),t&&g(n)}}}function me(a){let e,n,l,s,r,o;return{c(){e=j("button"),n=D(a[10]),this.h()},l(t){e=G(t,"BUTTON",{"data-key":!0,class:!0,formaction:!0,name:!0});var c=T(e);n=H(c,a[10]),c.forEach(g),this.h()},h(){d(e,"data-key",a[10]),d(e,"class",l=ae(a[2][a[10]])+" svelte-wk2j3k"),e.disabled=s=a[0].guesses[a[3]].length===5,d(e,"formaction","?/update"),d(e,"name","key"),e.value=a[10]},m(t,c){O(t,e,c),w(e,n),r||(o=$(e,"click",ke(a[6])),r=!0)},p(t,c){c&4&&l!==(l=ae(t[2][t[10]])+" svelte-wk2j3k")&&d(e,"class",l),c&9&&s!==(s=t[0].guesses[t[3]].length===5)&&(e.disabled=s)},d(t){t&&g(e),r=!1,o()}}}function pe(a){let e,n,l=a[7],s=[];for(let r=0;r<l.length;r+=1)s[r]=me(ue(a,l,r));return{c(){e=j("div");for(let r=0;r<s.length;r+=1)s[r].c();n=X(),this.h()},l(r){e=G(r,"DIV",{class:!0});var o=T(e);for(let t=0;t<s.length;t+=1)s[t].l(o);n=C(o),o.forEach(g),this.h()},h(){d(e,"class","row svelte-wk2j3k")},m(r,o){O(r,e,o);for(let t=0;t<s.length;t+=1)s[t].m(e,null);w(e,n)},p(r,o){if(o&77){l=r[7];let t;for(t=0;t<l.length;t+=1){const c=ue(r,l,t);s[t]?s[t].p(c,o):(s[t]=me(c),s[t].c(),s[t].m(e,n))}for(;t<s.length;t+=1)s[t].d(1);s.length=l.length}},d(r){r&&g(e),q(s,r)}}}function ge(a){let e,n,l=a[0].answer+"",s,r;return{c(){e=j("p"),n=D('the answer was "'),s=D(l),r=D('"')},l(o){e=G(o,"P",{});var t=T(e);n=H(t,'the answer was "'),s=H(t,l),r=H(t,'"'),t.forEach(g)},m(o,t){O(o,e,t),w(e,n),w(e,s),w(e,r)},p(o,t){t&1&&l!==(l=o[0].answer+"")&&ye(s,l)},d(o){o&&g(e)}}}function be(a){let e,n,l;return{c(){e=j("div"),this.h()},l(s){e=G(s,"DIV",{style:!0}),T(e).forEach(g),this.h()},h(){x(e,"position","absolute"),x(e,"left","50%"),x(e,"top","30%")},m(s,r){O(s,e,r),n||(l=ve(Pe.call(null,e,{force:.7,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#ff3e00","#40b3ff","#676778"]})),n=!0)},p:K,d(s){s&&g(e),n=!1,l()}}}function Ve(a){let e,n,l,s,r,o,t,c,E,v,k,h,_,m=Array(6),i=[];for(let u=0;u<m.length;u+=1)i[u]=_e(fe(a,m,u));function b(u,y){return u[4]||u[0].answers.length>=6?Ue:Le}let W=b(a),p=W(a),f=a[4]&&be();return{c(){e=j("meta"),n=X(),l=j("form"),s=j("a"),r=D("How to play"),o=X(),t=j("div");for(let u=0;u<i.length;u+=1)i[u].c();c=X(),E=j("div"),p.c(),v=X(),f&&f.c(),k=te(),this.h()},l(u){const y=Ge("svelte-18lvto8",R.head);e=G(y,"META",{name:!0,content:!0}),y.forEach(g),n=C(u),l=G(u,"FORM",{method:!0,action:!0,class:!0});var A=T(l);s=G(A,"A",{class:!0,href:!0});var S=T(s);r=H(S,"How to play"),S.forEach(g),o=C(A),t=G(A,"DIV",{class:!0});var M=T(t);for(let I=0;I<i.length;I+=1)i[I].l(M);M.forEach(g),c=C(A),E=G(A,"DIV",{class:!0});var L=T(E);p.l(L),L.forEach(g),A.forEach(g),v=C(u),f&&f.l(u),k=te(),this.h()},h(){var u;R.title="Sverdle",d(e,"name","description"),d(e,"content","A Wordle clone written in SvelteKit"),d(s,"class","how-to-play svelte-wk2j3k"),d(s,"href","/sverdle/how-to-play"),d(t,"class","grid svelte-wk2j3k"),N(t,"playing",!a[4]),N(t,"bad-guess",(u=a[1])==null?void 0:u.badGuess),d(E,"class","controls svelte-wk2j3k"),d(l,"method","POST"),d(l,"action","?/enter"),d(l,"class","svelte-wk2j3k")},m(u,y){w(R.head,e),O(u,n,y),O(u,l,y),w(l,s),w(s,r),w(l,o),w(l,t);for(let A=0;A<i.length;A+=1)i[A].m(t,null);w(l,c),w(l,E),p.m(E,null),O(u,v,y),f&&f.m(u,y),O(u,k,y),h||(_=[$(Fe,"keydown",qe),ve(Be.call(null,l,xe))],h=!0)},p(u,[y]){var A;if(y&9){m=Array(6);let S;for(S=0;S<m.length;S+=1){const M=fe(u,m,S);i[S]?i[S].p(M,y):(i[S]=_e(M),i[S].c(),i[S].m(t,null))}for(;S<i.length;S+=1)i[S].d(1);i.length=m.length}y&16&&N(t,"playing",!u[4]),y&2&&N(t,"bad-guess",(A=u[1])==null?void 0:A.badGuess),W===(W=b(u))&&p?p.p(u,y):(p.d(1),p=W(u),p&&(p.c(),p.m(E,null))),u[4]?f?f.p(u,y):(f=be(),f.c(),f.m(k.parentNode,k)):f&&(f.d(1),f=null)},i:K,o:K,d(u){g(e),u&&g(n),u&&g(l),q(i,u),p.d(),u&&g(v),f&&f.d(u),u&&g(k),h=!1,Te(_)}}}function qe(a){var e;a.metaKey||(e=document.querySelector(`[data-key="${a.key}" i]`))==null||e.dispatchEvent(new MouseEvent("click",{cancelable:!0}))}const xe=()=>({update:a})=>{a({reset:!1})};function Je(a,e,n){let l,s,r,{data:o}=e,{form:t}=e,c;function E(v){const k=o.guesses[s],h=v.target.getAttribute("data-key");h==="backspace"?(n(0,o.guesses[s]=k.slice(0,-1),o),t!=null&&t.badGuess&&n(1,t.badGuess=!1,t)):k.length<5&&n(0,o.guesses[s]+=h,o)}return a.$$set=v=>{"data"in v&&n(0,o=v.data),"form"in v&&n(1,t=v.form)},a.$$.update=()=>{var v;a.$$.dirty&1&&n(4,l=o.answers.at(-1)==="xxxxx"),a.$$.dirty&17&&n(3,s=l?-1:o.answers.length),a.$$.dirty&13&&(n(2,c={}),o.answers.forEach((k,h)=>{const _=o.guesses[h];for(let m=0;m<5;m+=1){const i=_[m];k[m]==="x"?n(2,c[i]="exact",c):c[i]||n(2,c[i]=k[m]==="c"?"close":"missing",c)}})),a.$$.dirty&9&&n(5,r=((v=o.guesses[s])==null?void 0:v.length)===5)},[o,t,c,s,l,r,E]}class Qe extends Se{constructor(e){super(),We(this,e,Je,Ve,je,{data:0,form:1})}}export{Qe as default};

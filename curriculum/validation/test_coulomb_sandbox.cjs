'use strict';
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const m=core('coulomb-sandbox','DEMO_VERSION,C_V,C_E,CORE_R,potentialAt,fieldAt,coreAt,viewBounds,snap01,roundV,roundE,fmtV,fmtE,dirDeg,probeReading,fieldGrid,chargeKey,cmToM,readingsCsv');
// the demo's own pure functions take the charge list; this shim keeps the original test groups unchanged
let charges=[];
const c={potential:(x,y)=>m.potentialAt(charges,x,y),field:(x,y)=>m.fieldAt(charges,x,y),inCore:(x,y)=>m.coreAt(charges,x,y),CORE_R:m.CORE_R,set:q=>{charges=q;}};const k=8.9875517862e9;let n=0;
const close=(a,b,rel=1e-8,abs=1e-6)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`),test=(name,f)=>{f();n++;console.log('PASS',name);};
test('SI units and inverse distance / inverse square for isolated charges',()=>{
 for(const q of [-3,1,5]){c.set([{x:0,y:0,q}]);for(const r of [.2,1,3,10]){close(c.potential(r,0),k*q*1e-9/(r*.01));close(c.field(r,0)[0],k*q*1e-9/(r*.01)**2);close(c.field(r,0)[1],0);}}
});
test('superposition and dipole cancellation',()=>{
 const charges=[{x:-3,y:0,q:2},{x:3,y:0,q:-2}];c.set(charges);close(c.potential(0,0),0);close(c.field(0,0)[0],2*k*2e-9/.03**2);
 const p=[1,2];c.set(charges);const v=c.potential(...p),E=c.field(...p);let vs=0,ex=0,ey=0;
 for(const q of charges){c.set([q]);vs+=c.potential(...p);const e=c.field(...p);ex+=e[0];ey+=e[1];}close(v,vs);close(E[0],ex);close(E[1],ey);
});
test('field equals independent numerical negative potential gradient away from cores',()=>{
 c.set([{x:-3,y:0,q:2},{x:3,y:1,q:-1}]);for(const [x,y] of [[0,0],[1,2],[-4,3]]){const h=1e-4,e=c.field(x,y);
 close(e[0],-(c.potential(x+h,y)-c.potential(x-h,y))/(2*h*.01),1e-7);close(e[1],-(c.potential(x,y+h)-c.potential(x,y-h))/(2*h*.01),1e-7);}
});
test('closed path work is zero outside softened charge cores',()=>{
 c.set([{x:0,y:0,q:1}]);let work=0;const N=10000;
 for(let j=0;j<N;j++){const a=2*Math.PI*(j+.5)/N,x=3+Math.cos(a),y=2+Math.sin(a),e=c.field(x,y);work+=(e[0]*-Math.sin(a)+e[1]*Math.cos(a))*.01*2*Math.PI/N;}close(work,0,0,1e-9);
});
test('zero charges and distant dipole scaling',()=>{
 c.set([{x:0,y:0,q:0}]);close(c.potential(0,0),0);close(c.field(0,0)[0],0);
 c.set([{x:-1,y:0,q:1},{x:1,y:0,q:-1}]);const a=Math.abs(c.field(0,1000)[0]),b=Math.abs(c.field(0,2000)[0]);close(a/b,8,2e-6);
});
test('core model: uniformly charged ball, E = -grad V inside, continuous at r = a',()=>{
 const a=c.CORE_R;assert.equal(a,.12);
 for(const q of [1,-3]){c.set([{x:0,y:0,q}]);
  close(c.potential(0,0),1.5*k*q*1e-9/(a*.01));close(c.field(0,0)[0],0);
  for(const r of [.01,.05,.09,.1199]){const rm=r*.01,am=a*.01;
   close(c.potential(r,0),k*q*1e-9*(3*am*am-rm*rm)/(2*am**3));close(c.field(r,0)[0],k*q*1e-9*rm/am**3);
   const h=1e-6,g=-(c.potential(r+h,0)-c.potential(r-h,0))/(2*h*.01);close(c.field(r,0)[0],g,1e-6);}
  const e=1e-9;close(c.potential(a-e,0),c.potential(a+e,0),1e-7);close(c.field(a-e,0)[0],c.field(a+e,0)[0],1e-7);
  assert(c.inCore(.05,0)&&!c.inCore(.13,0));}
});
test('E = -grad V on a grid crossing two cores (2D, both components)',()=>{
 c.set([{x:0,y:0,q:2},{x:.3,y:.1,q:-1}]);const h=1e-6;
 for(let i=-20;i<=20;i++)for(let j=-10;j<=10;j++){const x=i*.0173,y=j*.0191,E=c.field(x,y);
  if([[0,0],[.3,.1]].some(([X,Y])=>Math.abs(Math.hypot(x-X,y-Y)-.12)<1e-5))continue;
  close(E[0],-(c.potential(x+h,y)-c.potential(x-h,y))/(2*h*.01),1e-5,1e-3);close(E[1],-(c.potential(x,y+h)-c.potential(x,y-h))/(2*h*.01),1e-5,1e-3);}
});
test('readings: capture rounds as displayed, CSV carries the charges and parses back to the core values',()=>{
 assert.match(m.DEMO_VERSION,/^coulomb-sandbox@\d{4}-\d{2}-\d{2}$/);
 // display rounding and its text agree
 const vNum=t=>{t=t.replace('−','-');return t.endsWith(' kV')?parseFloat(t)*1e3:parseFloat(t);};
 const eNum=t=>t.endsWith(' MV/m')?parseFloat(t)*1e6:t.endsWith(' kV/m')?parseFloat(t)*1e3:parseFloat(t);
 for(const v of [0,-0.4,12.6,-999.4,1234.5,-23456,5e5,7777.77])close(vNum(m.fmtV(v)),m.roundV(v),0,1e-6);
 for(const e of [0,3.4,999.4,1234,45678,123456,987654,2.345e6,9.99e7])close(eNum(m.fmtE(e)),m.roundE(e),0,1e-6);
 for(const v of [-12345,-50,0,7,999,1000,4321])assert(Math.abs(m.roundV(v)-v)<=(Math.abs(v)>=1000?5:0.5));
 assert.equal(m.dirDeg(1,0),0);assert.equal(m.dirDeg(0,1),90);assert.equal(m.dirDeg(-1,-1e-9),180);assert.equal(m.dirDeg(1,-1e-9),0);assert.equal(m.dirDeg(0,0),null);
 // dipole reading at (0, 2.5) cm: V = 0 and E along +x with |E| = 2kq d/(d^2+h^2)^(3/2)
 const dip=[{x:-3,y:0,q:2},{x:3,y:0,q:-2}],r=m.probeReading(dip,0,2.5),Ex=2*k*2e-9*.03/(.03**2+.025**2)**1.5;
 assert.equal(r.V,0);assert.equal(r.dir,0);assert.equal(r.E,m.roundE(Ex));assert.equal(r.E,18100);assert.equal(r.inCore,false);
 assert.equal(m.probeReading(dip,-3,0.05).inCore,true);
 // CSV: header comments, charges in SI, rows parse back within display rounding of the core values
 const pts=[[0,2.5],[1.3,-0.7],[-4.2,3.1],[2.9,0.1]],rows=pts.map(([x,y])=>{const q=m.probeReading(dip,x,y);return {config:1,x:q.x.toFixed(1),y:q.y.toFixed(1),V:String(q.V),E:String(q.E),dir:q.dir===null?'':String(q.dir),inCore:q.inCore};});
 rows.push({config:2,x:'0.5',y:'0',V:'edited, by hand',E:'',dir:'',inCore:false});
 const csv=m.readingsCsv(rows,[{name:'Dipole',charges:dip},{name:'Like pair',charges:[{x:-3,y:0,q:2},{x:3,y:0,q:2}]}]),L=csv.trim().split('\n');
 assert.equal(L[0],'# Coulomb Sandbox probe readings (simulated data)');assert.equal(L[1],'# demo version,'+m.DEMO_VERSION);
 assert(L.includes('# config 1 charge 1,x_m,-0.03,y_m,0,q_C,2e-9'));assert(L.includes('# config 1 charge 2,x_m,0.03,y_m,0,q_C,-2e-9'));assert(L.includes('# config 2,Like pair'));
 const hi=L.indexOf('row,config,x_m,y_m,V_volts,E_V_per_m,E_direction_deg,inside_charge_ball');assert(hi>0&&L.slice(0,hi).every(l=>l.startsWith('# ')));
 const data=L.slice(hi+1);assert.equal(data.length,5);
 data.slice(0,4).forEach((line,i)=>{const f=line.split(','),x=+f[2]*100,y=+f[3]*100;close(x,pts[i][0],0,1e-9);close(y,pts[i][1],0,1e-9);
  const V=m.potentialAt(dip,x,y),[ex,ey]=m.fieldAt(dip,x,y),E=Math.hypot(ex,ey);
  assert(Math.abs(+f[4]-V)<=(Math.abs(V)>=1000?5:0.5)+1e-9,`V row ${i+1}`);assert(Math.abs(+f[5]-E)<=0.005*E+0.5,`E row ${i+1}`);
  const d=Math.atan2(ey,ex)*180/Math.PI,dd=Math.abs(((+f[6]-d)%360+540)%360-180);assert(dd<=0.5+1e-9,`direction row ${i+1}`);});
 assert.equal(data[4],'5,2,0.005,0,"edited, by hand",,,0');
 assert.equal(m.cmToM('−2.5'),'-0.025');assert.equal(m.cmToM('abc'),'abc');assert.equal(m.snap01(-0.04),0);
 // field map table covers the region on a 2 cm grid and agrees with probe readings
 const g=m.fieldGrid(dip,{x0:-9.7,x1:9.7,y0:-5.7,y1:5.7},2);assert.equal(g.length,9*5);assert(g.every(p=>p.x%2===0&&p.y%2===0));
 assert.equal(JSON.stringify(g.find(p=>p.x===0&&p.y===0)),JSON.stringify(m.probeReading(dip,0,0)));
 const b=m.viewBounds(800,600,400,300,40);assert.equal(JSON.stringify(b),JSON.stringify({x0:-10,x1:10,y0:-7.5,y1:7.5}));
 assert.equal(m.chargeKey(dip),'-3,0,2;3,0,-2');
});

// ---------- continuous charge distributions (OpenStax Vol 2 section 5.5) ----------
const b=core('coulomb-sandbox','C_V,C_E,CORE_R,QUAD_REL,ellip,carlsonRJ,quad3,rodLocal,ringLocal,diskLocal,bodyAt,bodyDist,bodyFrame,bodyEnds,bodyLimits,potentialAt,fieldAt,coreAt,probeReading,readingsCsv,chargeKey');
const KC=b.C_E,KV=b.C_V,A=b.CORE_R,rel=(x,y)=>Math.abs(x-y)/Math.max(Math.abs(y),1e-300);
const within=(x,y,r,w)=>assert(rel(x,y)<=r,`${w||''}: expected ${y}, got ${x} (rel ${rel(x,y).toExponential(2)})`);
// independent Gauss-Legendre nodes on [-1, 1] (Newton on P_n), for brute force integrals
function gl(n){const x=[],w=[];for(let i=1;i<=n;i++){let z=Math.cos(Math.PI*(i-.25)/(n+.5)),pp;for(let it=0;it<100;it++){let p1=1,p2=0;for(let j=1;j<=n;j++){const p3=p2;p2=p1;p1=((2*j-1)*z*p2-(j-1)*p3)/j;}pp=n*(z*p1-p2)/(z*z-1);const dz=p1/pp;z-=dz;if(Math.abs(dz)<1e-16)break;}x.push(z);w.push(2/((1-z*z)*pp*pp));}return {x,w};}
const G=gl(64);
function integ(f,a,b,panels){let s=0;const h=(b-a)/panels;for(let p=0;p<panels;p++){const c=a+(p+.5)*h;for(let i=0;i<G.x.length;i++)s+=G.w[i]*f(c+G.x[i]*h/2)*h/2;}return s;}
// brute force thin body fields from k dq / r, independent of the demo: [V, E1, E2] in the body's local frame for Q = 1 nC
const bruteRod=(L,u,v)=>[integ(t=>1/Math.hypot(u-t,v),-L/2,L/2,40)*KV/L,integ(t=>(u-t)/Math.hypot(u-t,v)**3,-L/2,L/2,40)*KC/L,integ(t=>v/Math.hypot(u-t,v)**3,-L/2,L/2,40)*KC/L];
function bruteRing(R,rho,z){const N=4000;let V=0,Er=0,Ez=0;for(let i=0;i<N;i++){const p=2*Math.PI*(i+.5)/N,r=Math.sqrt(rho*rho+R*R-2*rho*R*Math.cos(p)+z*z);V+=1/r;Er+=(rho-R*Math.cos(p))/r**3;Ez+=z/r**3;}return [V*KV/N,Er*KC/N,Ez*KC/N];}
function bruteDisk(R,rho,z){const sig=1/(Math.PI*R*R),N=720;let V=0,Er=0,Ez=0;for(let i=0;i<N;i++){const p=2*Math.PI*(i+.5)/N,cp=Math.cos(p);
 const f=(g)=>integ(s=>{const r=Math.sqrt(rho*rho+s*s-2*rho*s*cp+z*z);return g(s,r)*s;},0,R,8);
 V+=f((s,r)=>1/r);Er+=f((s,r)=>(rho-s*cp)/r**3);Ez+=f((s,r)=>z/r**3);}const d=2*Math.PI/N;return [V*d*sig*KV,Er*d*sig*KC,Ez*d*sig*KC];}
test('elliptic integrals: K and E at known values, series and AGM agree at the switch, A B Cc match their definitions',()=>{
 within(b.ellip(.5).K,1.8540746773013719,1e-13,'K(0.5)');within(b.ellip(.5).E,1.3506438810476755,1e-13,'E(0.5)');
 within(b.ellip(.9).K,2.5780921133481733,1e-13,'K(0.9)');within(b.ellip(.9).E,1.1047747327040733,1e-13,'E(0.9)');
 within(b.ellip(.1).K,1.6124413487202194,1e-13,'K(0.1)');within(b.ellip(.1).E,1.5307576368977633,1e-13,'E(0.1)');
 for(const k of ['K','E','A','B','Cc'])within(b.ellip(.5-1e-12)[k],b.ellip(.5)[k],1e-10,'switch '+k);
 // complete elliptic integral of the third kind from Carlson's RJ: Π(n, m) = ∫ dψ / ((1 − n sin²ψ) √(1 − m sin²ψ))
 for(const [n,m] of [[.3,.1],[.9,.5],[.999,.8],[.5,.49],[1-1e-6,.3]]){const P=b.ellip(m).K+n/3*b.carlsonRJ(0,1-m,1,1-n);
  within(P,integ(p=>{const s=Math.sin(p)**2;return 1/((1-n*s)*Math.sqrt(1-m*s));},0,Math.PI/2,n>.99?4000:40),1e-10,`Pi(${n}, ${m})`);}
 for(const m of [1e-6,.2,.6,.95]){const f=b.ellip(m),q=(g)=>integ(p=>{const s=Math.sin(p)**2;return g(s);},0,Math.PI/2,20);
  within(f.A,q(s=>(1-m*s)**-1.5),1e-12,'A');within(f.B,q(s=>(2*s-1)*(1-m*s)**-1.5),1e-10,'B');within(f.Cc,q(s=>(2*s-1)*(1-m*s)**-.5),m<1e-4?1e-8:1e-12,'Cc');}
});
test('rod: closed form equals brute force k dq/r, OpenStax bisector result, infinite line and point charge limits',()=>{
 for(const [L,u,v] of [[6,0,2.5],[6,1.3,.7],[6,4,-1],[6,-5.5,.2],[2,9,3],[6,3.2,0],[6,-8,0]]){const e=b.rodLocal(L,u,v),f=bruteRod(L,u,v);
  within(e[0],f[0],1e-10,'V');within(Math.hypot(e[1]-f[1],e[2]-f[2])/Math.hypot(f[1],f[2])+1,1,1e-9,'E');}
 // OpenStax Example 5.7: on the perpendicular bisector E = k λ L / (z √(z² + L²/4)), along the bisector; V = 2kλ asinh(L/2z)
 for(const [L,z] of [[6,2.5],[1,.3],[10,7]]){const e=b.rodLocal(L,0,z);within(e[2],KC*(1/L)*L/(z*Math.sqrt(z*z+L*L/4)),1e-13,'bisector E');assert(Math.abs(e[1])<1e-12*e[2]);within(e[0],2*KV/L*Math.asinh(L/(2*z)),1e-13,'bisector V');}
 // long rod: E -> 2kλ/r = λ/(2πε0 r), relative error (2r/L)²/2 for r << L
 for(const L of [100,1000,1e4]){const r=1,e=b.rodLocal(L,0,r);within(e[2],2*KC/L/r,(2*r/L)**2,'infinite line');}
 // far: E -> kQ/r² in every direction, with relative error of order (L/r)²
 for(const ang of [0,.4,1.2,Math.PI/2]){const r=600,e=b.rodLocal(6,r*Math.cos(ang),r*Math.sin(ang));within(Math.hypot(e[1],e[2]),KC/(r*r),(6/r)**2,'far E');within(e[0],KV/r,(6/r)**2,'far V');}
});
test('ring: on the axis E = kQz/(z²+R²)^3/2 exactly, off the axis equals brute force, far field is a point charge',()=>{
 for(const R of [.5,2,5])for(const z of [-4,-.3,0,.1,1,R/Math.SQRT2,2.5,40]){const e=b.ringLocal(R,0,z);within(e[2]+1,KC*z/(z*z+R*R)**1.5+1,1e-13,'axis Ez');assert.equal(e[1],0);within(e[0],KV/Math.hypot(z,R),1e-14,'axis V');}
 // the on axis maximum sits at z = R/√2
 const R=2,zm=R/Math.SQRT2;assert(b.ringLocal(R,0,zm)[2]>b.ringLocal(R,0,zm*1.01)[2]&&b.ringLocal(R,0,zm)[2]>b.ringLocal(R,0,zm*.99)[2]);
 for(const [rho,z] of [[1e-7,1],[1e-3,.5],[.5,1],[1.5,.2],[1.85,0],[2.13,0],[3,-1],[6,2],[2,.5],[2.5,0]]){const e=b.ringLocal(2,rho,z),f=bruteRing(2,rho,z);
  within(e[0],f[0],1e-10,'V');within(e[1]+e[2]*0,f[1],Math.abs(f[1])>1?1e-9:1e-6,'Erho');within(e[2]+1e-9,f[2]+1e-9,1e-9,'Ez');}
 for(const t of [0,.7,1.4]){const r=800,e=b.ringLocal(2,r*Math.sin(t),r*Math.cos(t));within(Math.hypot(e[1],e[2]),KC/(r*r),2*(2/r)**2,'far');}
});
test('disk: on the axis V and E are the closed forms, near the center E -> σ/2ε0, off the axis equals brute force',()=>{
 for(const R of [.5,2,5])for(const z of [-3,-.2,.13,.5,2.5,30]){const s=1/(Math.PI*R*R),e=b.diskLocal(R,0,z),h=Math.abs(z);
  within(e[0],2*Math.PI*KV*s*(Math.hypot(z,R)-h),1e-12,'axis V');within(e[2],Math.sign(z)*2*Math.PI*KC*s*(1-h/Math.hypot(z,R)),1e-12,'axis E');assert(Math.abs(e[1])<1e-12*Math.abs(e[2]));}
 // infinite plane: E = σ/(2ε0) = 2πkσ, approached as 1 − z/R near the center of a wide disk
 for(const z of [.5,.2,.13]){const R=5,pl=2*Math.PI*KC/(Math.PI*R*R),e=b.diskLocal(R,0,z)[2];assert(e<pl&&e>pl*(1-z/R-1e-12));}
 for(const [rho,z] of [[.7,.5],[1.5,1],[1.9,.4],[2.5,.4],[2.5,0],[3,-1],[6,2],[1,-.3],[2,.6]]){const e=b.diskLocal(2,rho,z),f=bruteDisk(2,rho,z);
  within(e[0],f[0],2e-9,'V');within(e[1],f[1],2e-9,'Erho');within(e[2]+1e-6,f[2]+1e-6,2e-9,'Ez');}
 // the closed form switches branch at the rim (rho = R): V and E are continuous through it
 for(const z of [.5,-1.3]){const m=b.diskLocal(2,2,z);for(const d of [-1e-9,1e-9]){const e=b.diskLocal(2,2+d,z);for(let i=0;i<3;i++)within(e[i],m[i],1e-7,'rim '+i);}}
 for(const t of [0,.7,1.4,Math.PI/2]){const r=800,e=b.diskLocal(2,r*Math.sin(t),r*Math.cos(t));within(Math.hypot(e[1],e[2]),KC/(r*r),2*(2/r)**2,'far');}
 // across the sheet Ez is odd in z, zero in the middle of the 1.2 mm model layer, and swings by nearly σ/ε0 = 4πkσ across it
 const s=1/(Math.PI*4),up=b.diskLocal(2,1,A),dn=b.diskLocal(2,1,-A),mid=b.diskLocal(2,1,0);within(-dn[2],up[2],1e-9,'odd');assert(Math.abs(mid[2])<1e-9*up[2]);
 assert(up[2]-dn[2]<4*Math.PI*KC*s&&up[2]-dn[2]>0.9*4*Math.PI*KC*s);
});
test('Gauss: flux of each body through a sphere is 4πkQ when it encloses the body and 0 when it encloses none of it',()=>{
 const flux=(fn,c0,Rs)=>integ(t=>{const st=Math.sin(t),ct=Math.cos(t),e=fn(Rs*st,c0+Rs*ct);return (e[0]*st+e[1]*ct)*2*Math.PI*Rs*Rs*st;},0,Math.PI,24);
 const rod=(rho,z)=>{const e=b.rodLocal(6,z,rho);return [e[2],e[1]];},ring=(rho,z)=>b.ringLocal(2,rho,z).slice(1),disk=(rho,z)=>b.diskLocal(2,rho,z).slice(1);
 for(const [fn,Rs] of [[rod,3.5],[rod,9],[ring,2.6],[ring,7],[disk,2.6],[disk,7]])within(flux(fn,0,Rs),4*Math.PI*KC,1e-9,'encloses');
 for(const [fn,c0,Rs] of [[ring,0,1.4],[ring,3,1.5],[disk,-2,1.5],[rod,6,2]])assert(Math.abs(flux(fn,c0,Rs))<1e-8*4*Math.PI*KC,'empty sphere');
});
test('bodies: E = −∇V everywhere, continuous at the 1.2 mm model layer, and exact thin body values outside it',()=>{
 const bodies=[{kind:'rod',x:.3,y:-.2,q:2,size:6,ang:30},{kind:'ring',x:-.5,y:.4,q:-1.5,size:2,ang:90},{kind:'disk',x:.2,y:.1,q:3,size:2,ang:15}];
 const pts=[[0,2.5],[1.1,.3],[-2.3,-1.7],[3.05,1.6],[.31,-.15],[-2.5,.45],[-.5,.43],[1.5,.4],[2.25,.6],[.21,.12]];
 for(const c of bodies)for(const [x,y] of pts){const e=b.bodyAt(c,x,y),h=1e-3,V=(X,Y)=>b.bodyAt(c,X,Y)[0];
  const gx=-(-V(x+2*h,y)+8*V(x+h,y)-8*V(x-h,y)+V(x-2*h,y))/(12*h*.01),gy=-(-V(x,y+2*h)+8*V(x,y+h)-8*V(x,y-h)+V(x,y-2*h))/(12*h*.01);
  const d=b.bodyDist(c,x,y);if(Math.abs(d-A)<3*h)continue;
  assert(Math.hypot(e[1]-gx,e[2]-gy)<=2e-6*Math.hypot(e[1],e[2])+1e-6,`${c.kind} at (${x}, ${y}): E ${e[1]},${e[2]} vs -grad V ${gx},${gy}`);}
 // inside the model layer (rod line, ring wire crossing, disk sheet) values are finite and E = −∇V there too
 for(const [c,x,y] of [[bodies[0],.3,-.2],[bodies[1],-2.5,.4],[bodies[2],.2,.1],[bodies[2],.2+2*Math.sin(15*Math.PI/180)*-1,.1+2*Math.cos(15*Math.PI/180)]]){
  assert(b.bodyDist(c,x,y)<A+1e-12);const e=b.bodyAt(c,x+.03,y+.02);assert(e.every(Number.isFinite));}
 // continuity across the layer: step from just inside to just outside
 for(const c of bodies){const [e1,e2]=b.bodyEnds(c),mx=(e1[0]+e2[0])/2,my=(e1[1]+e2[1])/2;
  const pick=c.kind==='ring'?e2:[mx*.7+e2[0]*.3,my*.7+e2[1]*.3],nx=-(e2[1]-e1[1]),ny=e2[0]-e1[0],nn=Math.hypot(nx,ny);
  const P=t=>[pick[0]+t*nx/nn,pick[1]+t*ny/nn],lo=b.bodyAt(c,...P(A-1e-9)),hi=b.bodyAt(c,...P(A+1e-9));
  for(let i=0;i<3;i++)assert(Math.abs(lo[i]-hi[i])<=1e-6*Math.hypot(...hi),`${c.kind} continuity ${i}`);}
 // outside the layer the ring and rod use no model at all: equal to brute force thin values
 const f=b.rodLocal(6,3.1,.13),g=bruteRod(6,3.1,.13);within(f[0],g[0],1e-9,'rod just outside');
});
test('bodies in the sandbox: superposition with points, map frame, probe readings, limits table, CSV',()=>{
 const rod={kind:'rod',x:0,y:0,q:2,size:6,ang:0},ring={kind:'ring',x:0,y:0,q:2,size:2,ang:90},disk={kind:'disk',x:0,y:0,q:2,size:2,ang:90};
 // the presets put the probe at (0, 2.5): on the rod's bisector, on the ring's and the disk's axis
 within(b.fieldAt([rod],0,2.5)[1],KC*2/(2.5*Math.sqrt(2.5**2+9)),1e-13,'rod preset');
 within(b.fieldAt([ring],0,2.5)[1],KC*2*2.5/(2.5**2+4)**1.5,1e-13,'ring preset');
 within(b.fieldAt([disk],0,2.5)[1],2*Math.PI*KC*2/(Math.PI*4)*(1-2.5/Math.hypot(2.5,2)),1e-12,'disk preset');
 assert(Math.abs(b.fieldAt([ring],0,2.5)[0])<1e-9&&Math.abs(b.fieldAt([disk],0,2.5)[0])<1e-9);
 // turning a body turns its field: a ring with its axis along +x seen at (2.5, 0)
 const r0=b.fieldAt([{...ring,ang:0}],2.5,0);within(r0[0],KC*2*2.5/(2.5**2+4)**1.5,1e-13,'turned ring');assert(Math.abs(r0[1])<1e-9);
 // a turned rod: symmetric about its own bisector
 const t={...rod,ang:30},a=b.fieldAt([t],-1,2),bb=b.potentialAt([t],-1,2),u=[Math.cos(Math.PI/6),Math.sin(Math.PI/6)];
 const m=[-1-2*((-1)*u[0]+2*u[1])*u[0],2-2*((-1)*u[0]+2*u[1])*u[1]];within(b.potentialAt([t],...m),bb,1e-12,'mirror');
 // superposition with point charges
 const pts=[{x:-3,y:0,q:2},{x:3,y:1,q:-1}],all=[...pts,rod,ring],p=[1.3,2.2];
 within(b.potentialAt(all,...p),b.potentialAt(pts,...p)+b.bodyAt(rod,...p)[0]+b.bodyAt(ring,...p)[0],1e-13,'superposition V');
 // probe reading flags the model layer of a body; the ring only where it crosses the map
 assert(b.probeReading([rod],1,0).inCore&&!b.probeReading([rod],1,.2).inCore&&b.probeReading([ring],2,0).inCore&&!b.probeReading([ring],0,0).inCore&&b.probeReading([disk],.5,0).inCore);
 assert.equal(b.coreAt([pts[0],rod],1,.1),rod);
 // limits rows are the textbook formulas evaluated at the probe
 let L=b.bodyLimits(rod,0,2.5);within(L.E,L.rows.find(r=>r.id==='bisector').E,1e-13,'bisector row');within(L.rows.find(r=>r.id==='line').E,2*KC*2/6/2.5,1e-15);within(L.rows.find(r=>r.id==='point').E,KC*2/6.25,1e-15);
 L=b.bodyLimits({...ring,q:-2},0,-1.4);within(L.E,L.rows.find(r=>r.id==='ringAxis').E,1e-13,'ring axis row');
 L=b.bodyLimits({...disk,size:5},0,.2);within(L.E,L.rows.find(r=>r.id==='diskAxis').E,1e-12,'disk axis row');within(L.rows.find(r=>r.id==='plane').E,2*Math.PI*KC*2/(Math.PI*25),1e-15);
 // CSV: points keep their old lines, bodies get their own
 const csv=b.readingsCsv([{config:1,x:'0.0',y:'2.5',V:'1',E:'2',dir:'90',inCore:false}],[{name:'Ring',charges:[{x:0,y:0,q:2,kind:'ring',size:2,ang:90},{x:-3,y:0,q:2}]}]);
 assert(csv.includes('# config 1 body 1,ring,x_m,0,y_m,0,Q_C,2e-9,R_m,0.02,axis_deg,90\n')&&csv.includes('# config 1 charge 1,x_m,-0.03,y_m,0,q_C,2e-9\n')&&csv.includes('# model_bodies,'));
 assert(!b.readingsCsv([],[{name:'Dipole',charges:pts}]).includes('model_bodies'));
 assert.notEqual(b.chargeKey([ring]),b.chargeKey([disk]));assert.equal(b.chargeKey(pts),'-3,0,2;3,1,-1');
});
test('potential energy: pair sum, work qV to bring a charge in, bodies left out',()=>{
 const pe=core('coulomb-sandbox','potentialEnergy,potentialAt');
 close(pe.potentialEnergy([{x:-3,y:0,q:2},{x:3,y:0,q:-2}]),k*2e-9*-2e-9/.06,1e-12,1e-18);
 const tri=[{x:0,y:0,q:1},{x:4,y:0,q:-2},{x:0,y:3,q:3}];close(pe.potentialEnergy(tri),k*1e-18*(1*-2/.04+1*3/.03+-2*3/.05),1e-12,1e-18);
 const two=tri.slice(0,2),q3=tri[2];close(pe.potentialEnergy(tri)-pe.potentialEnergy(two),q3.q*1e-9*pe.potentialAt(two,q3.x,q3.y),1e-10,1e-18);
 assert.equal(pe.potentialEnergy([{x:0,y:0,q:1}]),0);assert.equal(pe.potentialEnergy([{x:0,y:0,q:1,kind:'rod',size:4,ang:0},{x:2,y:2,q:1}]),null);
});
if(process.argv.includes('--strict-core')){
 // Independent check at a point inside the core: the field must equal the numerical -dV/dx there.
 c.set([{x:0,y:0,q:1}]);const x=.05,h=1e-5,expected=-(c.potential(x+h,0)-c.potential(x-h,0))/(2*h*.01);
 console.log('Core consistency probe (cm)',{x,field:c.field(x,0)[0],negativeGradient:expected});close(c.field(x,0)[0],expected);
}
console.log(`${n} coulomb-sandbox test groups passed`);

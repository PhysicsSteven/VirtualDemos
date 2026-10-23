'use strict';
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const c=core('circuits','solveDC,eqResistance,kclResiduals,powerBalance,solveAC,spectrum,specAt,specRms,zSeen,buildTransient,propagator,stepWith,storedC,storedL,zeroState,carryState,buildPreset,PRESETS,quad,dot,stateAt,locateSample');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const close=(a,b,r=2e-8,abs=1e-12)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
const part=(id,type,a,b,props={})=>({id,type,a:[a,0],b:[b,0],...props});
test('circuits DC: series, parallel, internal resistance and power/KCL',()=>{
 for(const [name,current,req] of [['series',.3,20],['parallel',1.2,5],['internal',9/11,10]]){
  const els=c.buildPreset(name).els,sol=c.solveDC(els),bat=els.find(e=>e.type==='bat');
  close(-sol.res.get(bat.id).I,current);close(c.eqResistance(els,bat),req);
  const p=c.powerBalance(els,sol);close(p.src,p.diss);
  for(const v of c.kclResiduals(sol.brs,id=>sol.res.get(id)?.I).values())close(v,0);
 }
});
test('circuits DC: every DC preset, balanced bridge and open capacitor',()=>{
 for(const name of ['series','parallel','compare','divider','bridge','internal']){
  const els=c.buildPreset(name).els,sol=c.solveDC(els);for(const e of els)assert(sol.res.get(e.id)?.ok);
  const p=c.powerBalance(els,sol);close(p.src,p.diss);
  if(name==='bridge')close(sol.res.get(els.find(e=>e.name==='G').id).I,0);
  if(name==='divider')close(sol.res.get(els.find(e=>e.type==='vm').id).V,12*1000/3200);
 }
 const els=[part(1,'bat',0,1,{emf:12}),part(2,'res',0,2,{R:1000}),part(3,'cap',2,1,{C:.001})],sol=c.solveDC(els);
 close(sol.res.get(2).I,0);close(sol.res.get(3).V,12);
});
test('circuits DC: shorted load, open switch, ideal short, loose meter, resistor extremes (from circuit-builder)',()=>{
 const els=c.buildPreset('internal').els,bat=els.find(e=>e.type==='bat');els.find(e=>e.type==='sw').closed=true;
 const sh=c.solveDC(els);close(-sh.res.get(bat.id).I,9);close(sh.res.get(bat.id).V,0,0,1e-9);close(c.powerBalance(els,sh).diss,81);
 const b=c.buildPreset('bridge').els;close(c.eqResistance(b,b.find(e=>e.type==='bat')),1/(1/320+1/480));
 for(const name of ['series','parallel','compare','divider','bridge','internal']){const e2=c.buildPreset(name).els,s=c.solveDC(e2);let w=0;
  for(const e of e2){const r=s.res.get(e.id);if(Number.isFinite(r.V)&&Number.isFinite(r.I))w+=r.V*r.I;}close(w,0,0,1e-9);}
 const B=part(1,'bat',0,1,{emf:6}),open=[B,part(2,'sw',0,1,{closed:false})];
 close(c.solveDC(open).res.get(1).I,0);assert.equal(c.eqResistance(open,B),Infinity);
 assert(!c.solveDC([B,part(2,'sw',0,1,{closed:true})]).res.get(1).ok);
 assert(Number.isNaN(c.solveDC([B,part(3,'vm',8,9)]).res.get(3).V));
 for(const R of [1,1e6])for(const ri of [.1,100]){const s=c.solveDC([part(1,'bat',0,1,{emf:12,rOn:true,r:ri}),part(2,'res',0,1,{R})]);close(Math.abs(s.res.get(2).I),12/(R+ri));}
});
test('circuits AC: complex series impedance and RMS including pure reactances',()=>{
 for(const name of ['acR','acC','acL','below','reso','hiQ']){
  const els=c.buildPreset(name).els,src=els.find(e=>e.type==='ac'),R=els.filter(e=>['res','bulb'].includes(e.type)).reduce((a,e)=>a+e.R,0),L=els.find(e=>e.type==='ind')?.L||0,C=els.find(e=>e.type==='cap')?.C,w=2*Math.PI*src.f,X=w*L-(C?1/(w*C):0),den=R*R+X*X,z=c.zSeen(els,src,src.f),sol=c.solveAC(els,src.f),I=sol.res.get(src.id).I;
  close(z.re,R);close(z.im,X);close(-I[0],src.V0*R/den);close(-I[1],-src.V0*X/den);
  close(c.specRms(c.spectrum(els),src.id,'I'),src.V0/Math.sqrt(2*den));
 }
});
/* moved from test_ac_circuits.cjs when the old AC page became a redirect to circuits.html#ac */
test('circuits AC: resonance and exact half power bandwidth',()=>{
 for(const name of ['below','reso','hiQ'])for(const Rset of [10,22,100,1000]){
  const els=c.buildPreset(name).els.map(e=>['res','bulb'].includes(e.type)?{...e,R:Rset}:e),src=els.find(e=>e.type==='ac'),R=els.filter(e=>['res','bulb'].includes(e.type)).reduce((a,e)=>a+e.R,0),L=els.find(e=>e.type==='ind').L,C=els.find(e=>e.type==='cap').C;
  const f0=1/(2*Math.PI*Math.sqrt(L*C)),a=R/(2*L),w0=1/Math.sqrt(L*C),f1=(-a+Math.sqrt(a*a+w0*w0))/(2*Math.PI),f2=(a+Math.sqrt(a*a+w0*w0))/(2*Math.PI);
  const z0=c.zSeen(els,src,f0);close(z0.re,R);close(z0.im,0,1e-8,1e-8*R);
  for(const f of [f1,f2]){const z=c.zSeen(els,src,f);close(Math.hypot(z.re,z.im),Math.SQRT2*R,1e-8);}
  close(f2-f1,R/(2*Math.PI*L));close(f1*f2,f0*f0);
 }
});
test('circuits time: exact RC/RL solutions, source work and heat integrals',()=>{
 for(const type of ['cap','ind']){
  const R=100,react=type==='cap'?.001:1,tau=type==='cap'?R*react:react/R,V=12;
  const els=[part(1,'bat',0,1,{emf:V}),part(2,'res',0,2,{R}),part(3,type,2,1,type==='cap'?{C:react}:{L:react})],sys=c.buildTransient(els);assert(sys.ok);
  for(const f of [.01,1,5]){
   const t=f*tau,out=c.stepWith(c.propagator(sys,t),c.zeroState(sys)),x=out.x,decay=Math.exp(-f);
   close(c.dot(sys.Vrow.get(3),x),type==='cap'?V*(1-decay):V*decay);
   close(c.dot(sys.Irow.get(3),x),type==='cap'?V/R*decay:V/R*(1-decay));
   const energy=c.storedC(sys,x)+c.storedL(sys,x),src=out.dE.reduce((a,v,i)=>a+(sys.forms[i].key==='src'?v:0),0),heat=out.dE.reduce((a,v,i)=>a+(sys.forms[i].key==='heat'?v:0),0);
   close(src,energy+heat);
   if(type==='cap'){close(src,react*V*V*(1-decay));close(heat,.5*react*V*V*(1-decay*decay));}
  }
 }
});
test('circuits time: LC conservation and RLC damping on both sides of critical',()=>{
 const L=.1,C=1e-5,V=10,q0=C*V,w0=1/Math.sqrt(L*C);
 for(const R of [0,20,50,100,190,198,200,202,210,1000]){
  const els=[part(1,'cap',0,1,{C}),part(2,'ind',2,1,{L}),part(3,R?'res':'wire',0,2,R?{R}:{})],sys=c.buildTransient(els);assert(sys.ok);const x0=c.zeroState(sys);x0[sys.si.get('q1')]=q0;
  for(const t of [.0001,.001,.005,.02]){
   const out=c.stepWith(c.propagator(sys,t),x0),a=R/(2*L),disc=a*a-w0*w0;let q;
   if(Math.abs(disc)<1e-8)q=q0*Math.exp(-a*t)*(1+a*t);
   else if(disc<0){const w=Math.sqrt(-disc);q=q0*Math.exp(-a*t)*(Math.cos(w*t)+a/w*Math.sin(w*t));}
   else{const b=Math.sqrt(disc),r1=-a+b,r2=-a-b;q=q0*(-r2*Math.exp(r1*t)+r1*Math.exp(r2*t))/(r1-r2);}
   close(out.x[sys.si.get('q1')],q,2e-7,1e-13);
   const heat=out.dE.reduce((a,v,i)=>a+(sys.forms[i].key==='heat'?v:0),0);close(c.storedC(sys,out.x)+c.storedL(sys,out.x)+heat,.5*C*V*V,2e-7);
  }
 }
});
test('circuits time: switch preserves reactive state; propagator semigroup',()=>{
 const els=c.buildPreset('flip').els,sys=c.buildTransient(els),x=c.stepWith(c.propagator(sys,1),c.zeroState(sys)).x,sw=els.find(e=>e.type==='sw2');sw.pos=1;const next=c.buildTransient(els),y=c.carryState(sys,x,next,1);
 for(const [key,i] of next.si)if(key.startsWith('q')||key.startsWith('i'))close(y[i],x[sys.si.get(key)]);
 const full=c.stepWith(c.propagator(next,.6),y),half=c.stepWith(c.propagator(next,.3),y),twice=c.stepWith(c.propagator(next,.3),half.x);
 full.x.forEach((v,i)=>close(v,twice.x[i]));full.dE.forEach((v,i)=>close(v,half.dE[i]+twice.dE[i]));
});
test('circuits time cursor: stateAt reads exact values and energies between samples and across a switch',()=>{
 // a run as the page stores it: RC charging (12 V, 10 kOhm, 100 uF, tau = 1 s) sampled every h, S1 flipped to discharge at t1
 const els=c.buildPreset('rc').els,sw=els.find(e=>e.type==='sw2'),cap=els.find(e=>e.type==='cap'),res=els.find(e=>e.name==='R1');
 const E=12,R=res.R,C=cap.C,tau=R*C,h=6/400,t1=0.6;
 const totals=(sys,dE,e)=>{const o=Float64Array.from(e);sys.forms.forEach((F,k)=>{o[F.key==='src'?0:F.key==='heat'?1:2]+=dE[k];});return o;};
 const run=(sys,x,t0,n,e)=>{const P=c.propagator(sys,h),sg={sys,ts:[t0],xs:[x],es:[e]};for(let k=1;k<=n;k++){const r=c.stepWith(P,x);x=r.x;e=totals(sys,r.dE,e);sg.ts.push(t0+k*h);sg.xs.push(x);sg.es.push(e);}return sg;};
 const s0=c.buildTransient(els),seg0=run(s0,c.zeroState(s0),0,40,new Float64Array(3));
 close(seg0.ts[40],t1,1e-12);
 sw.pos=1;const s1=c.buildTransient(els),x1=c.carryState(s0,seg0.xs[40],s1,t1),seg1=run(s1,x1,t1,60,seg0.es[40]);
 const segs=[seg0,seg1];
 const V=(st)=>Math.abs(c.dot(st.sys.Vrow.get(cap.id),st.x)),I=(st)=>c.dot(st.sys.Irow.get(res.id),st.x);
 const V1=E*(1-Math.exp(-t1/tau)),W1=C*E*E*(1-Math.exp(-t1/tau)),H1=0.5*C*E*E*(1-Math.exp(-2*t1/tau));
 let worstLinear=0;
 for(const t of [0,0.0001,0.00731,0.0151,0.2468,0.333,0.5999,0.61,0.6123,0.9,1.2345,1.5]){
  const st=c.stateAt(segs,t);assert(st,`state at ${t}`);
  let v,i,W,H;
  if(t<t1){v=E*(1-Math.exp(-t/tau));i=E/R*Math.exp(-t/tau);W=C*E*E*(1-Math.exp(-t/tau));H=0.5*C*E*E*(1-Math.exp(-2*t/tau));}
  else{const d=t-t1;v=V1*Math.exp(-d/tau);i=V1/R*Math.exp(-d/tau);W=W1;H=H1+0.5*C*V1*V1*(1-Math.exp(-2*d/tau));}
  close(V(st),v,1e-10,1e-12);close(Math.abs(I(st)),i,1e-10,1e-15);
  close(st.E.W,W,1e-10,1e-15);close(st.E.H,H,1e-10,1e-15);close(st.E.Sp,0,0,1e-15);
  close(c.storedC(st.sys,st.x),0.5*C*v*v,1e-10,1e-15);
  // a straight line between the two stored samples would be off by up to h^2/(8 tau^2) of the range
  const sg=segs[st.si];if(st.i+1<sg.ts.length){const a=sg.ts[st.i],b=sg.ts[st.i+1],u=(t-a)/(b-a),va=Math.abs(c.dot(sg.sys.Vrow.get(cap.id),sg.xs[st.i])),vb=Math.abs(c.dot(sg.sys.Vrow.get(cap.id),sg.xs[st.i+1]));worstLinear=Math.max(worstLinear,Math.abs(va+u*(vb-va)-v));}
 }
 assert(worstLinear>1e-6,'the test points fall between samples');
 // at the switch instant the cursor reads the circuit after the switch: same charge, current reversed
 const a=c.stateAt([seg0],t1),b=c.stateAt(segs,t1);
 close(V(a),V(b),1e-12);assert(I(a)*I(b)<0,'current reverses at the flip');close(Math.abs(I(b)),V1/R,1e-10);
 // before t = 0 there is nothing to read; past the last sample the state is carried on exactly
 assert.equal(c.stateAt(segs,-1e-9),null);
 close(V(c.stateAt(segs,1.6)),V1*Math.exp(-(1.6-t1)/tau),1e-10);
 // a thinned record (every other sample, as the page keeps long runs) reads the same values
 const thin=(sg)=>{const n=sg.ts.length,f=(arr)=>arr.filter((_,k)=>k%2===0||k===n-1);return {sys:sg.sys,ts:f(sg.ts),xs:f(sg.xs),es:f(sg.es)};};
 const segsT=segs.map(thin);
 for(const t of [0.0151,0.333,0.6123,1.2345]){const p=c.stateAt(segs,t),q=c.stateAt(segsT,t);close(V(q),V(p),1e-11);close(q.E.H,p.E.H,1e-11,1e-16);}
 // locateSample: the last sample at or before t, by bisection, equals a plain scan
 for(let k=0;k<300;k++){const t=k*0.005+0.0007*(k%3),L=c.locateSample(segs,t);let si=-1;segs.forEach((s,j)=>{if(s.ts[0]<=t)si=j;});let i=0;segs[si].ts.forEach((u,j)=>{if(u<=t)i=j;});assert.deepEqual([L.si,L.i],[si,i],`locate ${t}`);}
});
console.log(`Completed ${count} unified Circuits core groups. Drawing, export and arbitrary topology coverage remain separate.`);

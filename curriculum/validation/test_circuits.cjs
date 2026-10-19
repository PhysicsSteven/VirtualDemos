'use strict';
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const c=core('circuits','solveDC,eqResistance,kclResiduals,powerBalance,solveAC,spectrum,specAt,specRms,zSeen,buildTransient,propagator,stepWith,storedC,storedL,zeroState,carryState,buildPreset,PRESETS,quad,dot');
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
test('circuits AC: complex series impedance and RMS including pure reactances',()=>{
 for(const name of ['acR','acC','acL','below','reso','hiQ']){
  const els=c.buildPreset(name).els,src=els.find(e=>e.type==='ac'),R=els.filter(e=>['res','bulb'].includes(e.type)).reduce((a,e)=>a+e.R,0),L=els.find(e=>e.type==='ind')?.L||0,C=els.find(e=>e.type==='cap')?.C,w=2*Math.PI*src.f,X=w*L-(C?1/(w*C):0),den=R*R+X*X,z=c.zSeen(els,src,src.f),sol=c.solveAC(els,src.f),I=sol.res.get(src.id).I;
  close(z.re,R);close(z.im,X);close(-I[0],src.V0*R/den);close(-I[1],-src.V0*X/den);
  close(c.specRms(c.spectrum(els),src.id,'I'),src.V0/Math.sqrt(2*den));
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
 for(const R of [0,20,200,1000]){
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
console.log(`Completed ${count} unified Circuits core groups. Drawing, export and arbitrary topology coverage remain separate.`);

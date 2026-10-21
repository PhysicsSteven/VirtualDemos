'use strict';
// AC frequency response readings in demos/circuits.html: acReading against the analytic series RLC,
// and roundSI against the readout rounding (fmtSI with an SI prefix and n significant figures).
const assert=require('node:assert/strict'),{core}=require('./demo_source.cjs');
const c=core('circuits','acReading,roundSI,buildPreset,resonance');
let count=0;const test=(name,fn)=>{fn();count++;console.log('PASS',name);};
const close=(a,b,r=1e-10,abs=1e-14)=>assert(Number.isFinite(a)&&Math.abs(a-b)<=abs+r*Math.abs(b),`expected ${b}, got ${a}`);
test('roundSI: prefix and significant figures as the readouts print them',()=>{
 for(const [v,sig,want] of [[0.32142857,4,0.3214],[321.42857,4,321.4],[1591.549,3,1590],[999.96,4,1000],[999.4,4,999.4],[-0.0123456,4,-0.01235],
  [7.0710678,4,7.071],[1.23456e-7,3,1.23e-7],[0,4,0],[4e-16,4,0],[12345678,4,12350000],[0.00099996,4,0.001]])
  assert.equal(c.roundSI(v,sig),want,`roundSI(${v}, ${sig})`);
 assert.equal(c.roundSI(Infinity,4),Infinity);
});
test('acReading: series RLC presets match I = V0/(sqrt2 |Z|), phase atan(X/R) and P = Irms^2 R',()=>{
 for(const name of ['acR','acC','acL','below','reso','hiQ']){
  const {els}=c.buildPreset(name),src=els.find(e=>e.type==='ac');
  const R=els.filter(e=>e.type==='res').reduce((a,e)=>a+e.R,0),ind=els.find(e=>e.type==='ind'),cap=els.find(e=>e.type==='cap');
  for(const f of [0.5*src.f,src.f,1.7*src.f]){
   const s={...src,f},E=els.map(e=>e.id===src.id?s:e),w=2*Math.PI*f,XL=ind?w*ind.L:0,XC=cap?1/(w*cap.C):0,X=XL-XC,Z=Math.hypot(R,X);
   const r=c.acReading(E,s);
   close(r.f,f);close(r.Vrms,src.V0/Math.SQRT2);close(r.Z,Z);close(r.phi,Math.atan2(X,R));
   close(r.Irms,src.V0/(Math.SQRT2*Z));close(r.I0,src.V0/Z);close(r.P,r.Irms**2*R,1e-10,1e-14);
   const V=(n)=>r.parts.find(q=>q.name===n);
   if(ind)close(V(ind.name).Vrms,r.Irms*XL);
   if(cap)close(V(cap.name).Vrms,r.Irms*XC);
   for(const e of els.filter(e=>e.type==='res'))close(V(e.name).Vrms,r.Irms*e.R);
  }
 }
});
test('acReading at resonance: current peaks at V0/(sqrt2 R), phase 0, VL = VC = Q V',()=>{
 const {els}=c.buildPreset('reso'),src=els.find(e=>e.type==='ac'),R=els.find(e=>e.type==='res').R,L=els.find(e=>e.type==='ind').L,C=els.find(e=>e.type==='cap').C;
 const r=c.acReading(els,src),Q=Math.sqrt(L/C)/R;
 close(r.Irms,src.V0/(Math.SQRT2*R));close(r.phi,0,1e-9,1e-9);close(r.P,src.V0**2/(2*R));
 const VL=r.parts.find(q=>q.type==='ind').Vrms,VC=r.parts.find(q=>q.type==='cap').Vrms;
 close(VL,Q*r.Vrms,1e-9);close(VC,Q*r.Vrms,1e-9);
});
console.log(`${count} circuits readings tests passed`);

'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const f=require('./demo_source.cjs').core('faraday','MU0,MAG,ellipKE,ringFlux,ringField,cylFluxUnit,cylFieldUnit,coilFlux,dipoleFlux,magMoment,tiltFluxUnit,flipSeries,seriesEval,circuitStep,makeCircuit,runMove,magnetForce,genPhi,genEmf,railsPhi,coast');let count=0;
const close=(a,b,rel=1e-8,abs=1e-12)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);
const test=(name,fn)=>{try{fn();count++;console.log('PASS',name);}catch(e){process.exitCode=1;console.error('FAIL',name,e.message);}};
test('ring field agrees with independent on-axis Biot-Savart formula',()=>{
 for(const b of [.01,.03])for(const z of [0,.02,.1]){const [Bz,Br]=f.ringField(b,0,z);close(Bz,f.MU0*b*b/(2*(b*b+z*z)**1.5));close(Br,0);}
});
test('ring mutual flux agrees with independent Neumann integral',()=>{
 for(const [a,b,z] of [[.025,.01,0],[.015,.01,.02],[.05,.01,.12]]){
  let sum=0;const n=20000;for(let j=0;j<n;j++){const p=2*Math.PI*(j+.5)/n;sum+=Math.cos(p)/Math.sqrt(a*a+b*b+z*z-2*a*b*Math.cos(p));}
  const ref=f.MU0*a*b/2*sum*2*Math.PI/n;close(f.ringFlux(a,b,z),ref,2e-8,1e-16);
 }
});
test('finite magnet field and flux convergence',()=>{
 for(const z of [0,.04,.12]){
  const h=f.MAG.len/2,b=f.MAG.b,ref=.5*((z+h)/Math.sqrt((z+h)**2+b*b)-(z-h)/Math.sqrt((z-h)**2+b*b));
  close(f.cylFieldUnit(0,z,32)[0],ref,1e-8);
  for(const a of [.015,.025,.05])close(f.cylFluxUnit(a,z,16),f.cylFluxUnit(a,z,32),1e-8);
 }
});
test('magnet reversal, linearity, Faraday integral and speed invariance',()=>{
 const p={N:400,R:100,Br:1.2,a:.025,pol:1};
 const slow=f.runMove(p,-.12,0,.1,.001),fast=f.runMove(p,-.12,0,.4,.001),rev=f.runMove(p,0,-.12,.1,.001);
 close(slow.c.Q,fast.c.Q);close(slow.c.Q,-rev.c.Q);assert(slow.c.Q<0);assert(rev.c.Q>0);
 close(slow.c.intEmf,-p.N*(slow.c.phi-slow.c.phi0));
 close(f.coilFlux(2*p.Br,p.a,.04),2*f.coilFlux(p.Br,p.a,.04));
 const i=slow.out.find(row=>row[0]===.1)[3];assert(f.magnetForce(p,-.11,i)<0);
});
test('generator exact interval average, phase and step refinement',()=>{
 const N=100,B=.2,A=.01,w=6.3,R=100,t=.25;
 function error(dt){const c=f.makeCircuit(N,R,f.genPhi(B,A,w*(t-dt)));f.circuitStep(c,f.genPhi(B,A,w*t),dt);const mid=f.genEmf(N,B,A,w,w*(t-dt/2));close(c.emf,mid*Math.sin(w*dt/2)/(w*dt/2));return Math.abs(c.emf-mid);}
 const a=error(.004),b=error(.002),c=error(.001);assert(a/b>3.9&&b/c>3.9);
 close(f.genEmf(N,B,A,w,0),0);close(f.genEmf(N,B,A,w,Math.PI/2),1.26);
});
test('rails sign, electromagnetic drag and mechanical power',()=>{
 const B=1,L=.2,v=1,R=.47,dt=.001,c=f.makeCircuit(1,R,f.railsPhi(B,L,.1));
 f.circuitStep(c,f.railsPhi(B,L,.1+v*dt),dt);close(c.emf,-B*L*v);assert(c.I<0);
 close(-(c.I*L*B)*v,c.I*c.I*R);close(c.heat,c.I*c.I*R*dt);
});
test('coasting energy converges and zero field remains ballistic',()=>{
 const p={B:1,L:.2,m:.02,R:.47},v0=1,T=.2;
 function error(dt){const n=Math.round(T/dt),c=f.makeCircuit(1,p.R,0);for(let j=1;j<=n;j++)f.circuitStep(c,f.railsPhi(p.B,p.L,f.coast(p,v0,j*dt).dx),dt);const exact=.5*p.m*(v0*v0-f.coast(p,v0,T).v**2);return Math.abs(c.heat-exact);}
 const a=error(.004),b=error(.002),c=error(.001);assert(a/b>3.9&&b/c>3.9);
 const z=f.coast({...p,B:0},2,3);close(z.v,2);close(z.dx,6);assert.equal(z.tau,Infinity);
});
test('invalid time step and resistance rejected',()=>{
 assert.throws(()=>f.makeCircuit(1,0,0),/Invalid/);assert.throws(()=>f.circuitStep(f.makeCircuit(1,1,0),1,0),/Invalid/);
});
console.log(`Completed ${count} Faraday test groups.`);

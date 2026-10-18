'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const src=fs.readFileSync(path.join(__dirname,'../../demos/ac-circuits.html'),'utf8'),ctx={};
vm.runInNewContext([...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(m=>m[1].includes('==CORE START=='))[1],ctx,{timeout:1000});
const a=ctx.AC,p={V0:10,f:1000,R:22,L:.01,C:1e-6,on:{R:true,L:true,C:true}};let n=0;
const close=(x,y,rel=1e-8,abs=1e-10)=>assert(Math.abs(x-y)<=abs+rel*Math.abs(y),`expected ${y}, got ${x}`);
const test=(name,fn)=>{fn();n++;console.log('PASS',name);};
test('phasor amplitude phase and cycle-averaged power from sampled waves',()=>{
 for(const flags of [{R:true,L:true,C:true},{R:true,L:false,C:false},{R:false,L:true,C:false},{R:false,L:false,C:true}]){
  const z=a.analyze({...p,on:flags});let power=0,irms2=0;
  for(let j=0;j<2000;j++){const s=a.steady(z,z.T*j/2000);close(s.vR+s.vL+s.vC,s.v);power+=s.v*s.i/2000;irms2+=s.i*s.i/2000;}
  close(Math.sqrt(irms2),z.Irms);close(power,z.P);close(z.P,z.Vrms*z.Irms*Math.cos(z.phi));
 }
});
test('resonance and exact half-power bandwidth',()=>{
 for(const R of [10,22,100,1000]){
  const z=a.analyze({...p,R,f:1/(2*Math.PI*Math.sqrt(p.L*p.C))});close(z.Z,R);close(z.phi,0);close(z.Q,z.f0/z.bw);
  close(a.Zof({...p,R},z.f1),Math.SQRT2*R);close(a.Zof({...p,R},z.f2),Math.SQRT2*R);close(z.f2-z.f1,z.bw);close(z.f1*z.f2,z.f0*z.f0);
 }
});
function rk4(R,L,C,w,V,t,steps){let q=0,i=0,h=t/steps;const f=(time,q,i)=>[i,(V*Math.sin(w*time)-R*i-q/C)/L];for(let j=0;j<steps;j++){const t0=j*h,A=f(t0,q,i),B=f(t0+h/2,q+h*A[0]/2,i+h*A[1]/2),D=f(t0+h/2,q+h*B[0]/2,i+h*B[1]/2),E=f(t0+h,q+h*D[0],i+h*D[1]);q+=h*(A[0]+2*B[0]+2*D[0]+E[0])/6;i+=h*(A[1]+2*B[1]+2*D[1]+E[1])/6;}return {q,i};}
test('driven transients agree with independent ODE integration',()=>{
 for(const R of [0,10,200*(1-1e-10),200,200*(1+1e-10),1000]){
  const pp={...p,R,on:{R:R>0,L:true,C:true}},z=a.analyze(pp),tr=a.transient(z),t=.002,s=tr.at(t),ref=rk4(R,p.L,p.C,z.w,p.V0,t,40000);
  close(s.q,ref.q,1e-7,1e-12);close(s.i,ref.i,1e-7,1e-10);close(s.vR+s.vL+s.vC,s.v);
  const zero=tr.at(0);close(zero.q,0);close(zero.i,0);
 }
});
test('undamped exact resonance grows and remains finite in transient mode',()=>{
 const pp={...p,f:1/(2*Math.PI*Math.sqrt(p.L*p.C)),on:{R:false,L:true,C:true}},z=a.analyze(pp),tr=a.transient(z);assert(z.unbounded);assert.equal(tr.kind,'resonant');
 const t=3.25*z.T,s=tr.at(t),ref=rk4(0,p.L,p.C,z.w,p.V0,t,50000);close(s.q,ref.q,1e-7,1e-12);close(s.i,ref.i,1e-7);
});
test('UI component extremes remain finite in damped steady state',()=>{
 for(const R of [10,1000])for(const L of [.001,.1])for(const C of [1e-7,1e-4])for(const f of [10,1e5]){
  const z=a.analyze({...p,R,L,C,f});for(const k of ['Z','I0','phi','P','f1','f2','bw'])assert(Number.isFinite(z[k]),k);assert(z.P>=0);close(a.Zof({...p,R,L,C},f),z.Z);
 }
});
console.log(`Completed ${n} AC circuit test groups.`);

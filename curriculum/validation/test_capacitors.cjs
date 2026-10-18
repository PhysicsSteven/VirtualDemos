'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const src=require('./demo_source.cjs').readDemo('capacitors'),ctx={};
vm.runInNewContext([...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(m=>m[1].includes('==CORE START=='))[1],ctx,{timeout:1000});
const c=ctx.CAP,eps=c.EPS0;let n=0;
const close=(a,b,rel=1e-9,abs=1e-20)=>assert(Math.abs(a-b)<=abs+rel*Math.abs(b),`expected ${b}, got ${a}`);
const test=(name,fn)=>{fn();n++;console.log('PASS',name);};
const g={A:.0144,d:.01,t:.01,kap:4.7,f:0},V=100,C0=eps*g.A/g.d,Q0=C0*V;
test('vacuum, full dielectric, partial area and air-gap series model',()=>{
 close(c.capOf(g).C,C0);close(c.capOf({...g,f:1}).C,4.7*C0);close(c.capOf({...g,f:.5}).C,2.85*C0);
 close(c.capOf({...g,d:.02,f:1}).C,eps*g.A/(.01+.01/4.7));
 for(const f of [0,.3,1])close(c.capOf({...g,f,kap:1}).C,C0);
});
test('fixed voltage and fixed charge separation experiments',()=>{
 const a=c.stateOf(g,'battery',V,Q0),b=c.stateOf({...g,d:.02},'battery',V,Q0),q=c.stateOf({...g,d:.02},'iso',V,Q0);
 close(b.C,a.C/2);close(b.Q,a.Q/2);close(b.U,a.U/2);close(q.Q,a.Q);close(q.V,2*V);close(q.U,2*a.U);close(q.Ee,a.Ee);
});
test('independently integrated field energy equals capacitor energy',()=>{
 for(const f of [0,.25,1])for(const kap of [1,4.7,80.1])for(const d of [.01,.02,.04])for(const mode of ['battery','iso']){
  const z=c.stateOf({...g,f,kap,d},mode,V,Q0),ref=.5*eps*((1-f)*g.A*d*z.Ee**2+f*g.A*(d-g.t)*z.Ea**2+kap*f*g.A*g.t*z.Ed**2);
  close(z.U,ref);close(z.Ufield,ref);close(z.Ea,kap*z.Ed);
 }
});
test('force agrees with independent numerical energy derivative',()=>{
 const base={...g,f:.4,d:.02},h=1e-7;
 for(const mode of ['battery','iso']){
  const z=c.stateOf(base,mode,V,Q0),lo=c.stateOf({...base,f:base.f-h/Math.sqrt(g.A)},mode,V,Q0),hi=c.stateOf({...base,f:base.f+h/Math.sqrt(g.A)},mode,V,Q0);
  // At fixed V the relevant mechanical potential includes battery work: -CV²/2.
  const sign=mode==='battery'?1:-1;close(z.Fslab,sign*(hi.U-lo.U)/(2*h),1e-7);
 }
});
test('independent plate-force work integral matches ledger at fixed V',()=>{
 let work=0;const steps=20000,h=.01/steps;
 for(let j=0;j<steps;j++){const d=.01+(j+.5)*h;work+=.5*eps*g.A*V*V/(d*d)*h;}
 const ledger=c.newLedger();c.moveStep(ledger,g,{...g,d:.02},'battery',V,Q0);close(ledger.Wh,work,1e-9);close(ledger.Wb,-.5*C0*V*V);close(ledger.H,0);
});
test('reconnection heat and complete energy ledger',()=>{
 const end={...g,d:.02},cap=c.capOf(end).C,l=c.newLedger();c.moveStep(l,g,end,'iso',V,Q0);const q=c.connectStep(l,cap,Q0,V);
 close(q,cap*V);close(l.H,.5*cap*(200-100)**2);close(l.Wb,-cap*V*V);
 const initial=.5*C0*V*V,final=.5*cap*V*V;close(final-initial,l.Wh+l.Wb-l.H);
});
test('series parallel mixed networks conserve charge, voltage and energy',()=>{
 const caps=[10e-12,22e-12,47e-12];
 for(const top of ['series','parallel','mixed']){
  const z=c.combo(top,3,caps,V);close(z.U,z.caps.reduce((a,x)=>a+x.U,0));
  if(top==='series'){close(z.Ceq,1/caps.reduce((a,x)=>a+1/x,0));close(z.caps.reduce((a,x)=>a+x.V,0),V);for(const x of z.caps)close(x.Q,z.Q);}
  if(top==='parallel'){close(z.Ceq,79e-12);close(z.caps.reduce((a,x)=>a+x.Q,0),z.Q);}
  if(top==='mixed'){close(z.caps[0].Q,z.caps[1].Q+z.caps[2].Q);close(z.caps[0].V+z.caps[1].V,V);close(z.caps[1].V,z.caps[2].V);}
 }
});
console.log(`Completed ${n} capacitor test groups. Qualitative fringe-field grid is not certified by these ideal-model checks.`);
